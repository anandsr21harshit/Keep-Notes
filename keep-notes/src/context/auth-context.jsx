import { createContext, useContext, useState } from "react";
import axios from "axios"

const AuthContext = createContext();

const AuthProvider = ({chidlren})=>{
    const localStorageToken = JSON.parse(localStorage.getItem('loginCred'))
    const [currentUser, setCurrentUser] = useState(localStorageToken?.token)
    const [token, setToken] = useState(localStorageToken?.user)

    const loginHandler = async (email,password)=>{
        try{
            const response = await axios.post("/api/auth/login",{email, password});

            if(response.status === 200 || response.status === 201){
                localStorage.setItem("loginCred",JSON.stringify({token: response.data.encodedToken,user:response.data.foundUser}));
                setCurrentUser(response.data.foundUser);
                setToken(response.data.encodedtoken);
            }
        }
        catch(err){
            console.log(err.message);
        }
    }

    const signUpHandler = async (email,password,firstName,lastName) => {
        try{
            const response = await axios.post("/api/auth/signup",{
                email,
                password,
                firstName,
                lastName
            })

            if(response.status === 200 && response.status === 201){
                localStorage.setItem("loginCred",JSON.stringify({token: response.data.encodedToken,user:response.data.foundUser}));
                setCurrentUser(response.data.foundUser);
                setToken(response.data.encodedtoken);
            }
        }
        catch(err){
            console.log(err.message);
        }
    }

    const logOutHandler = ()=>{
        localStorage.removeItem("loginCred");
        setToken(null);
        setCurrentUser(null);
    }

    return(
        <AuthContext.Provider value={{loginHandler,signUpHandler,logOutHandler,token,currentUser}}>
            {chidlren}
        </AuthContext.Provider>
    )
}

const useAuth = ()=>useContext(AuthContext);

export {useAuth,AuthProvider};
