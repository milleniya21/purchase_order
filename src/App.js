import './App.css';
import React from 'react' ;
import Header from './header/header';

function App ()  {
  return (
    <div className='app'>
        <h2 >
          Purchase Orders
          <span style={{color: 'black'}}> / Create New </span>
        </h2>
        <div className='container'>
            <Header/>
        </div>
    </div>
  );
};

export default App;