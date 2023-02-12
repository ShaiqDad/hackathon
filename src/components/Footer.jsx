import React from 'react'
import './Footer.css'
import HouseIcon from '@mui/icons-material/House';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
function Footer() {
  return (
    <>
    <br/><br/>
    <div className='footer'>
    <div> <HouseIcon/></div>
    <div> <ShoppingCartIcon/></div>
    <div><PersonIcon/></div>

    </div>
    </>
  )
}

export default Footer