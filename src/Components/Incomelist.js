import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Globalstate'
import IncomeTransaction from './IncomeTransaction'



const Incomelist = () => {

    const { incometransactions } = useContext(GlobalContext)



    return (

        <div className='transactions transactions-income'>

            <h2>Income History</h2>


            <ul className='transaction-list'>
                {incometransactions.map
                    (incometransaction => (
                        <IncomeTransaction
                            key={incometransaction.id}
                            incometransaction={incometransaction}
                        />
                    ))}

            </ul>

        </div>
    )
}

export default Incomelist
