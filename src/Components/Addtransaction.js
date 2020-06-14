import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Addtransaction = () => {

    const [income, setincome] = useState({
        incometext: '',
        incomeamount: 0,
    })



    const onchangeincome = e => {
        setincome({[e.target.name]: e.target.value})

        console.log(income);
        
            }

    return (
        <div className='form-wrapper'>
            <form>
                <div className='input-group income'>
                    
                    <input type='text'
                        placeholder='Add income...'
                        name='incometext'
                        autoComplete='off'
                        onChange={onchangeincome}></input>

                    <input type='number'
                        placeholder='Amount...'
                        name='incomeamount'
                        autoComplete='off'
                        onChange={onchangeincome}></input>

                    <input type='submit'
                        value='submit'
                    ></input>

                </div>
            </form>
            <form>
                <div className='input-group expense'>
                    <input type='text' placeholder='Add Expense...' autoComplete='off'></input>
                    <input type='number' placeholder='Amount...' autoComplete='off'></input>
                    <input type='submit' value='submit'></input>
                </div>
            </form>
        </div>
    )
}

export default Addtransaction
