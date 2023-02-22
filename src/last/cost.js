import React from 'react'
import './cost.css'

function Cost () {
  return (
    <div className='last_section'>
        <div>
            <button>Add Landed Costs</button>
            <br></br>
            <textarea className='desc' rows="10" cols="80"  >
                Normal
            </textarea>
            <br></br>
            <form action="/action_page.php">
                  <label >Tags </label>
                  <input type ="text" placeholder='e.g Summer Sale 2021'/>
              </form>
        </div>
        <div className='last-col2'>
                <h4 >
                Item Subtotal 
                <span style={{color: 'black'}}> $7,200.00 </span>
                <hr></hr>
                </h4>
                <h4 >
                Plus VAT (10%) 
                <span style={{color: 'black'}}> $720.00 </span>
                <hr></hr>
                </h4>
                <h4 >
                Total Units 
                <span style={{color: 'black'}}> 90 </span>
                <hr></hr>
                </h4>
                <h2>Total <br></br>$180.00</h2>
        </div>
      
    </div>
  )
}

export default Cost
