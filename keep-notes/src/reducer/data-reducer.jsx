const initialState = {
    notes: [],
    archive: []
}

const dataReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case "ADD_NOTES":
            return {
                ...state,
                notes: [...payload.note]
            }
    }
}

export {dataReducer,initialState}