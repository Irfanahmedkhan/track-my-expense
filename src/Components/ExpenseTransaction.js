import React from 'react'

const ExpenseTransaction = ({expensetransaction}) => {
    
    return (

        <li className='transaction'>
            <span className='transaction-text'>{expensetransaction.expensetext}</span>
            <span className='transaction-amount'>{expensetransaction.expenseamount}</span>
            <button className='delete-btn' />
            <i className='fas fa-trash'></i>
        </li>
    )
}

export default ExpenseTransaction
