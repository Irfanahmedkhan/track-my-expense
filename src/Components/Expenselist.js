import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Globalstate'
import ExpenseTransaction from './ExpenseTransaction'



const Expenselist = () => {

    const {expensetransaction} = useContext(GlobalContext)

    return (

        <div className='transactions transactions-expense'>

            <h2>Transaction History</h2>

            <ul className='transaction-list'>
                {expensetransaction.map
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
