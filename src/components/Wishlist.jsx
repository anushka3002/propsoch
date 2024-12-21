import React, { useEffect, useState } from 'react'
import './properties.css'
import propsoch from '../images/propsoch.png'
import eye from '../images/eye.webp'
import heart from '../images/heart.png'
import orangeStar from '../images/orange-star.png'
import greenStar from '../images/green-star.png'
import pinkHeart from '../images/pink-heart.png'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Actions/action'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer'
import { useNavigate } from 'react-router'
import { CustomNextArrow, CustomPrevArrow } from './commonComponent'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Wishlist = () => {

    const data = JSON.parse(localStorage.getItem('wishlist')) || []
    const [liked, setLiked] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getData())
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    const handleWishlist = (item) => {
        let existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        existingWishlist = existingWishlist?.filter(existingItem => existingItem._id !== item._id);
        localStorage.setItem('wishlist', JSON.stringify(existingWishlist));
    };

    return (
        <>
            <div style={{ width: '100%' }}>
                <div style={{ width: '100%' }}>
                    <div style={{ height: '20px', width: '100%', textAlign: 'center', zIndex: 10, top: 0 }} className='header-fixed py-6'>
                        <img src={propsoch} />
                    </div>
                    <div style={{ width: '100%' }} className='justify-between grid-container pb-12 mt-8'>{data?.length > 0 ? data?.map((e, index) => {
                        return <div style={{ width: '256px', paddingLeft: '20px', paddingRight: '20px', outline: 'none', userSelect: 'none' }} className='relative cursor-pointer pb-6'>
                            <Slider {...settings} className='scroll-container slider-container rounded-8'>
                                {e?.images?.map((image) => {
                                    return <img onClick={() => navigate(`/propertyDetails/${e._id}`)} style={{ width: '100%', height: 'auto', display: 'block', outline: 'none', userSelect: 'none' }} alt="img" src={image} className='' />
                                })}
                            </Slider>
                            {e.typeOfRental != 'superhost' && <div style={{ top: 10, left: 30 }} className='mostLiked'>Most liked</div>}
                            <div style={{ position: 'absolute', top: 10, right: 30 }}>
                                <img style={{ outline: 'none', userSelect: 'none' }} alt="img" onClick={(el) => { handleWishlist(e); el.stopPropagation(); liked.includes(index) ? setLiked(liked.filter((el) => el !== index)) : setLiked([...liked, index]) }} width={'30px'} src={liked.includes(index) ? heart : pinkHeart} />
                            </div>
                            <div className='flex justify-between items-end pt-2'>
                                <div className='flex my-auto'>
                                    <img className='' width={'20px'} height={'20px'} src={eye} />
                                    <span className='ml-2'>8,213</span>
                                </div>
                                <div className='flex my-auto'>
                                    <img width={'20px'} height={'20px'} src={orangeStar} />
                                    <span className='ml-2'>3.2</span>
                                </div>
                            </div>
                            <p className='location my-auto pt-2'>{e.location}</p>
                            <p className='date my-auto pt-1'>Apr 4 - 12</p>
                        </div>
                    }) : <div className='title'
                        style={{
                            width: '100vw',
                            height: '90vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        No data in wishlist
                    </div>
                    }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Wishlist;
