import React from 'react'
import explore from '../images/explore.webp'
import wishlists from '../images/wishlists.png'
import map from '../images/map.png'
import login from '../images/login.png'

const Footer = () => {
    return (
        <div style={{ bottom: -1, left:0, width: '100%', zIndex:20 }} className='py-4 footer-fixed'>
            <div className='flex justify-between px-10'>
                <div>
                    <img className='mx-auto' width={'26px'} src={explore} />
                    <p className='my-auto text-14 pt-1'>Explore</p>
                </div>
                <div>
                    <img width={'26px'} src={wishlists} />
                    <p className='my-auto text-14 pt-1'>Wishlists</p>
                </div>
                <div>
                    <img width={'26px'} src={map} />
                    <p className='my-auto text-14 pt-1'>Show map</p>
                </div>
                <div>
                    <img width={'26px'} src={login} />
                    <p className='my-auto text-14 pt-1'>Log in</p>
                </div>
            </div>
        </div>
    )
}

export default Footer