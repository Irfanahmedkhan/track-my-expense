import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Globalstate'

const ExpenseTransaction = ({ expensetransaction }) => {

    const { deletetransaction } = useContext(GlobalContext);


    return (

        <li className='transaction'>

            <span><button onClick={() => deletetransaction(expensetransaction.id)} className="edelete-btn">x
            </button>
            </span> <span className='transaction-text'>{expensetransaction.expensetext}</span>
            <span className='transaction-amount'>Rs.{expensetransaction.expenseamount}</span>


        </li>
    )
}

export default ExpenseTransaction
