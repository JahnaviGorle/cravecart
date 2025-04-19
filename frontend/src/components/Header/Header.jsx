import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <video autoPlay muted loop className='header-video'>
                <source src='/header.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='header-contents'>
                <h2>Order your favourite food here</h2>
                <p>
                    Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
                    Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
                </p>
                <a href="#explore-menu" className="view-menu-button">
  View Menu
</a>

            </div>
        </div>
    )
}

export default Header
