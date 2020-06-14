import React from 'react'

const IncomeTransaction = ({incometransaction}) => {
    return (
        
        <li className='transaction'>
            <span className='transaction-text'>{incometransaction.incometext}</span>
            <span className='transaction-amount'>{incometransaction.incomeamount}</span>
            <button className='delete-btn' />
            <i className='fas fa-trash'></i>
        </li>
    )
}

export default IncomeTransaction
