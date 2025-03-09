import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/navbar.css'

const NavBar = ({size,setShow}) => {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my_shop' onClick={()=> setShow(true)}>
                The Causey Factory
            </span>
            <div className='cart' onClick={()=> setShow(false)}>
                <span>
                    {/* <i className='fas fa-cart-plus'></i> */}
                    <img src="https://www.shutterstock.com/shutterstock/photos/1412378519/display_1500/stock-vector-shopping-cart-and-check-mark-icon-vector-completed-order-confirm-flat-sign-symbols-logo-1412378519.jpg" id='image-icon' />
                </span>
                <span id='zeroo'>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default NavBar