import React, { useContext } from "react";
import { GlobalContext } from "../Context/Globalstate";

const Balance = () => {
    const { incometransactions, expensetransactions } = useContext(GlobalContext);

    const incomeamounts = incometransactions.map(
        incometransaction => incometransaction.incomeamount
    );

    const expenseamounts = expensetransactions.map(
        expensetransaction => expensetransaction.expenseamount
    );

    const totalincome = incomeamounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const totalexpenses = expenseamounts
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    return (
        <div className="balance">

            <div className='main-balance' >
                <h2>Your Balance</h2>
                <h3>Rs. {(totalincome - totalexpenses).toFixed(2)}</h3>
            </div>
            
            <div className="income-expense">

                <div className="plus">
                    <h3>Income</h3>
                    <p>+Rs. {totalincome}</p>
                </div>

                <div className="minus">
                    <h3>Expenses</h3>
                    <p>-Rs. {totalexpenses}</p>

                </div>

            </div>
        </div>
    );
};

export default Balance
