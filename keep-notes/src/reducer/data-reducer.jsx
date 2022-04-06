const initialState = {
    notes: [],
    archive: [],
    trash:[],
}

const dataReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case "ADD_NOTES":
            return {
                ...state,
                notes: [...payload.note]
            }
        case "ARCHIVE":
            return{
                ...state,
                archive: [...payload.archive]
            }
        case "TRASH":
            return{
                ...state,
                trash: [...state.trash,payload]
            }
        case "PERMANENT_DELETE":
            return {
                ...state,
                trash: payload
            }
    }
}

export {dataReducer,initialState}