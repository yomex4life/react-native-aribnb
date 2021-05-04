import {createContext, useReducer} from 'react';
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user:null,
    isFetching:false, //not fetching anything at the begining
    error:false //No error at the begining
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    return (
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error:state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}



//When user clicks a button like login, we send credentials to action. the action then sends it to the reducer. The reducer then determines which state needs to be updated.