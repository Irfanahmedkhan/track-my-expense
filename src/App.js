import React from 'react';
import Balance from './Components/Balance'
import Income from './Components/Income'
import Addtransaction from './Components/Addtransaction'
import './2.css';
import Incomelist from './Components/Incomelist';
import Expenselist from './Components/Expenselist';
import { GlobalContextProvider } from './Context/Globalstate';

function App() {
  return (
    <div className='container'>

      <div className='header'>Header</div>


      <div className='center'>
        <div className='sidebar'>sidebar</div>

        <div className='main'>

          <div className='balance'>
            <><Balance/></>
            <><Income /></>
            {/* <div className='minus'> expence taransaction balance</div> */}
          </div>

          <div className='input'>
            <></>
            <><Addtransaction /></>
          </div>
          
          <div className='history'>
            <div className='income-history'><Incomelist /></div>
            <div className='expense-history'><Expenselist /></div>
          
          </div>
          
        </div>


      </div>


      <div className='footer'> Footer  </div>
      {/* <div className='header'> Expense Tracker </div>
      <div className='sidebar'> Sidebar </div>
      <div className='box1'> box 1 </div>
      <div className='box2'> box 2 </div>
      <div className='box3'> box 3 </div>
      <> <Balance /> </>
      <div className='i-transaction'> Inc </div>
      <div className='e-transaction'> Exp </div>

    
      <div className='footer'> footer </div> */}
    </div>

    // <GlobalContextProvider>
    //   <div className="App">
    //     
    //     
    //     <Income />
    //     
    //   </div>
    // </GlobalContextProvider>

  );
}

export default App;
