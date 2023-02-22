import React from 'react'
import './header.css'

function Header ()  {
  return (
    <div className='elements'>
        <div className='title'>
            <h3>Rhombus Commerce</h3>
            <p>Finalized</p>
            <h3>#PO0003</h3>
            <br></br>
        </div>
        <hr></hr>
        <div className='main_section'>
            <div className='part1'>
              <form action="/action_page.php">
                  <label >Supplier*   </label>
                  <select  id="options">
                  <option >Head Office</option>
                  </select>
              </form>
              <form action="/action_page.php">
                  <label >Bill To*   </label>
                  <select  id="options">
                  <option >Primary Location</option>
                  </select>
              </form>
              <form action="/action_page.php">
                  <label >Ship To*   </label>
                  <select  id="options">
                  <option >Primary Location</option>
                  </select>
              </form>
            </div>
            <hr></hr> 
            <div className='part2'>
              <form action="/action_page.php">
                  <label >Issue date   </label>
                  <input type="date"/>  
              </form>
              <form action="/action_page.php">        
                  <label >Stock Due </label>
                  <input type="date"/>
              </form>
              <form action="/action_page.php">
                  <label >Payment Due </label>
                  <input type="date"/>
              </form>

              <form action="/action_page.php">
                  <label >Reference  </label>
                  <input type ="text"/>
              </form>
              <form action="/action_page.php">
                  <label >Email </label>
                  <input type ="text" placeholder='email-id'/>
              </form>
            </div>
            <hr></hr>
            <div className='part3'>
              <form action="/action_page.php">
                  <label >Currency </label>
                  <select  id="options">
                  <option >($)USD</option>
                  </select>
              </form>
              <form action="/action_page.php">
                  <label >Price Unit  </label>
                  <select  id="options">
                  <option >Buy</option>
                  </select>
              </form>
              <form action="/action_page.php">
                  <label >Totals are </label>
                  <select  id="options">
                  <option >Tax Exclucive</option>
                  </select>
              </form>
            </div>
        </div>
      <hr></hr>
    </div>
  )
}

export default Header
