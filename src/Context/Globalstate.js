import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialstate = {
    incometransaction: [
        { id: 1, incometext: 'Salary', incomeamount: 60000 },
        { id: 2, incometext: 'Bike Sold', incomeamount: 40000 },
        { id: 3, incometext: 'Online', incomeamount: 20000 },
    ],
    expensetransaction: [
        { id: 4, expensetext: 'Mobile purchase', expenseamount: 12000 },
        { id: 5, expensetext: 'Room Rent', expenseamount: 10000 },
        { id: 6, expensetext: 'Netflix Membership', expenseamount: 5000 },
    ],

};

export const GlobalContext = createContext(initialstate);

export const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer (AppReducer, initialstate)

    return (

        <GlobalContext.Provider value={{
            incometransaction: state.incometransaction,
            expensetransaction: state.expensetransaction,
        }}>
            {children}
        </GlobalContext.Provider>


    )

}

