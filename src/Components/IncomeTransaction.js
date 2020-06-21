import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Globalstate'


const IncomeTransaction = ({ incometransaction }) => {

    const { deletetransaction } = useContext(GlobalContext);

    return (

        <li className='transaction'>

            <span>  <button onClick={() => deletetransaction(incometransaction.id)} className="idelete-btn">X
            </button>
            </span>
            <span className='transaction-text'>{incometransaction.incometext}</span>
            <span className='transaction-amount'>Rs.{incometransaction.incomeamount}</span>

        </li>
    )
}

export default IncomeTransaction
