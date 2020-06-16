import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialstate = {
    incometransactions: [
   
    ],
    expensetransactions: [
  
    ],

};

export const GlobalContext = createContext(initialstate);

export const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialstate)

    const addincome = incometransaction => {
        dispatch({
            type: "ADD_INCOME",
            payload: incometransaction
        });
    }


    const addexpense = expensetransaction => {
        dispatch({
            type: "ADD_EXPENSE",
            payload: expensetransaction
        });
    }

    const deletetransaction = id => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    };



    return (

        <GlobalContext.Provider value={{
            incometransactions: state.incometransactions,
            expensetransactions: state.expensetransactions,
            addincome,
            addexpense,
            deletetransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

