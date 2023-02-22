import React from 'react'
import './table.css'
import logo1 from './white.jpg';
import logo2 from './hoodie.jpg';
import logo3 from './dress.jpg';

function Table () {
  return (
    <div className='cart_table'>
         <table >
            <tr>
                <th>Item Name</th>
                <th>SKU</th>
                <th>Quantity </th>
                <th>After</th>
                <th>Cost per Unit </th>
                <th>Tax</th>
                <th>Total ($) </th>
                <th>   </th>
            </tr>
            <tr>
                <td>
                    <div className='item'>
                        <img src={logo1} className="white-image" alt="item-1" />
                        <div className='white-desc'>
                            <p>Cotton t-shirt- White/ Medium</p>
                            <p className='violet'>Add a note </p>
                        </div>
                    </div>
                </td>
                <td>T001-W-L</td>
                <td>45</td>
                <td>75</td>
                <td>40</td>
                <td>10%</td>
                <td>$46.00</td>
                <td><button > <i class="material-icons">delete</i></button> </td>
            </tr>
            <tr>
                <td>
                <div className='item'>
                        <img src={logo2} className="white-image" alt="item-2" />
                        <div className='white-desc'>
                            <p>Sweetshirt Hoodie - White/ Medium</p>
                            <p className='violet'>Add a note </p>
                        </div>
                    </div>
                </td>
                <td>S001-W-L</td>
                <td>90</td>
                <td>100</td>
                <td>600</td>
                <td>10%</td>
                <td>$124.00</td>
                <td><button > <i class="material-icons">delete</i></button> </td>
            </tr>
            <tr>
                <td>
                <div className='item'>
                        <img src={logo3} className="white-image" alt="item-3" />
                        <div className='white-desc'>
                            <p>Cocktail Dress - White/ Medium</p>
                            <p className='violet'>Add a note </p>
                        </div>
                    </div>
                </td>
                <td>T001-W-L</td>
                <td>64</td>
                <td>129</td>
                <td>19</td>
                <td>10%</td>
                <td>$140.00</td>
                <td><button > <i class="material-icons">delete</i></button> </td>
            </tr>
            <tr>
                <td><input type ="text" placeholder='Type item name'/></td>
                <td><input type ="text" placeholder='SKU'/></td>
                <td><input type ="text" placeholder='20.00'/></td>
                <td><input type ="text"placeholder='20.00'/></td>
                <td><input type ="text"placeholder='20.00'/></td>
                <td><input type ="text"placeholder='20.00'/></td>
                <td><input type ="text"placeholder='20.00'/></td>                
                <td><i class="fa fa-close"></i> </td>
            </tr>
  
        </table>
        <hr></hr>
        <div >
            <h3 className='variant'> Save as a new variant </h3>
        </div>
      <hr></hr>
    </div>
  )
}

export default Table


   