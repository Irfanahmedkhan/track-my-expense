import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Globalstate'
import ExpenseTransaction from './ExpenseTransaction'



const Expenselist = () => {

    const {expensetransactions} = useContext(GlobalContext)

    return (

        <div className='transactions transactions-expense'>

            <h2>Expense History</h2>

            <ul className='transaction-list'>
                {expensetransactions.map
                (expensetransaction => (
                <ExpenseTransaction
                key={expensetransaction.id}
                expensetransaction = {expensetransaction}
                    />
                ))}

            </ul>
        </div>
    )
}

export default Expenselist
