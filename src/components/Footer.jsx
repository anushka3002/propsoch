import React from 'react'
import explore from '../images/explore.webp'
import wishlists from '../images/wishlists.png'
import map from '../images/map.png'
import login from '../images/login.png'

const Footer = () => {
    return (
        <div style={{ bottom: 0, width: '100%' }} className='py-8 footer-fixed'>
            <div className='flex justify-between px-10'>
                <div>
                    <img className='mx-auto' width={'30px'} src={explore} />
                    <p className='my-auto'>Explore</p>
                </div>
                <div>
                    <img width={'30px'} src={wishlists} />
                    <p className='my-auto'>Wishlists</p>
                </div>
                <div>
                    <img width={'30px'} src={map} />
                    <p className='my-auto'>Show map</p>
                </div>
                <div>
                    <img width={'30px'} src={login} />
                    <p className='my-auto'>Log in</p>
                </div>
            </div>
        </div>
    )
}

export default Footer