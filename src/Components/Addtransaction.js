import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GlobalContext } from '../Context/Globalstate';


const Addtransaction = () => {

    const { addincome, addexpense } = useContext(GlobalContext)

    const [income, setincome] = useState({
        incometext: "",
        incomeamount: 0,
    });

    const { incometext, incomeamount } = income;

    const onchangeincome = (e) => {
        setincome({ ...income, [e.target.name]: e.target.value });
    };

    const onsubmitincome = (e) => {
        e.preventDefault();

        }
    }



    return (

        <div className='input-group'>
            <form onSubmit={onsubmitincome}>
                <div className='income'>
                    <input type='text'
                        placeholder='Add Income...' autoComplete='off'
                        name='incometext'
                        value={incometext}
                        onChange={onchangeincome}>
                    </input>
                    <br />

                    <input type='number'
                        placeholder='Amount...' autoComplete='off'
                        name='incomeamount'
                        value={incomeamount}
                        onChange={onchangeincome}>
                    </input>
                    <input type='submit' value='submit'></input>
                </div>
            </form>
            <form onSubmit={onsubmitexpense}>
                <div className='expense'>

                    <input type='text'
                        placeholder='Add Expense...' autoComplete='off'
                        name='expensetext'
                        value={expensetext}
                        onChange={onchangeexpense}>
                    </input>
                    <br />
                    <input type='number'
                        placeholder='Amount...' autoComplete='off'
                        name='expenseamount'
                        value={expenseamount}
                        onChange={onchangeexpense}>
                    </input>

                    <input type='submit' value='submit'></input>
                </div>
            </form>
        </div>
    )
}

export default Addtransaction;
