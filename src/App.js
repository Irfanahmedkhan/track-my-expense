import React from 'react';
import Balance from './Components/Balance'
import Income from './Components/Income'
import Addtransaction from './Components/Addtransaction'
import './App.css';
import Incomelist from './Components/Incomelist';
import Expenselist from './Components/Expenselist';
import { GlobalContextProvider } from './Context/Globalstate';

function App() {
  return (

    <GlobalContextProvider>

      <div className='container'>
        <div className='header'><h1>My Expense Tracker</h1> </div>
        <div className='center'>
          <div className='sidebar'><><Balance /></></div>
          <div className='main'>
            <div className='input'>
              <><Addtransaction /></>
            </div>
            <div className='history'>
              <div className='income-history'><Incomelist /></div>
              <div className='expense-history'><Expenselist /></div>
            </div>
          </div>
        </div>
      </div>

    </GlobalContextProvider>

  );
}

export default App;
