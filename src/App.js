import './App.css';
import React from 'react' ;
import Header from './header/header';
import Table from './table/table';
import Cost from './last/cost';

function App ()  {
  return (
    <div className='app'>
        <h2 >
          Purchase Orders
          <span style={{color: 'black'}}> / Create New </span>
        </h2>
        <div className='container'>
            <Header/>
            <Table/>
            <Cost/>
        </div>
    </div>
  );
};

export default App;