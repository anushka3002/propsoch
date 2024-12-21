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
import 'react-loading-skeleton/dist/skeleton.css'

const Properties = () => {

    const { data } = useSelector(state => state.data)
    let existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
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
        if (existingWishlist.some(existingItem => existingItem._id === item._id)) {
            existingWishlist = existingWishlist.filter(existingItem => existingItem._id !== item._id);
        } else {
            existingWishlist.push(item);
        }
        localStorage.setItem('wishlist', JSON.stringify(existingWishlist));
    };

    const isItemInWishlist = (item) => {
        const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        return existingWishlist.some(existingItem => existingItem._id === item._id);
      };

    return (
        <>
            <div style={{ width: '100%' }}>
                <div style={{ width: '100%' }}>
                    <div
                        style={{
                            height: '20px',
                            width: '100%',
                            textAlign: 'center',
                            zIndex: 10,
                            top: 0,
                        }}
                        className='header-fixed py-6'
                    >
                        <img src={propsoch} alt="Propsoch Logo" />
                    </div>

                    <div
                    className='mt-20 pb-10'
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '20px',
                            justifyContent: 'space-between',
                        }}
                    >
                        {data?.data?.length > 0 ? (
                            data?.data?.map((e, index) => {
                                return(
                                <div
                                    key={e._id}
                                    style={{
                                        paddingLeft: '20px',
                                        paddingRight: '20px',
                                        outline: 'none',
                                        userSelect: 'none',
                                    }}
                                    className='relative cursor-pointer pb-6 property-container'
                                >
                                    <Slider {...settings} className='scroll-container slider-container rounded-8'>
                                        {e?.images?.map((image) => (
                                            <img
                                                key={image}
                                                onClick={() => navigate(`/propertyDetails/${e._id}`)}
                                                style={{ width: '40%', height: 'auto', display: 'block' }}
                                                alt="img"
                                                src={image}
                                            />
                                        ))}
                                    </Slider>

                                    {e.typeOfRental !== 'superhost' && (
                                        <div style={{ top: 10, left: 30 }} className='mostLiked'>
                                            Most liked
                                        </div>
                                    )}

                                    <div style={{ position: 'absolute', top: 10, right: 30 }}>
                                        <img
                                            style={{ outline: 'none', userSelect: 'none' }}
                                            alt="wishlist"
                                            onClick={(el) => {
                                                handleWishlist(e);
                                                el.stopPropagation();
                                                liked.includes(index)
                                                    ? setLiked(liked.filter((el) => el !== index))
                                                    : setLiked([...liked, index]);
                                            }}
                                            width={'30px'}
                                            src={isItemInWishlist(e) ? pinkHeart : heart}
                                        />
                                    </div>

                                    <div className='flex justify-between items-end pt-2'>
                                        <div className='flex my-auto'>
                                            <img className='' width={'20px'} height={'20px'} src={eye} />
                                            <span className='ml-2'>{e.views}</span>
                                        </div>
                                        <div className='flex my-auto'>
                                            <img width={'20px'} height={'20px'} src={e.ratings == 5.0 ? greenStar : orangeStar} />
                                            <span className='ml-2 mt-2'>{e.ratings == 5 ? '5.0' : e.ratings}</span>
                                        </div>
                                    </div>

                                    <p className='location my-auto pt-2'>{e.location}</p>
                                    <p className='date my-auto pt-1'>Apr 4 - 12</p>
                                </div>)
})
                        ) : (
                            <div
                                className='title'
                                style={{
                                    width: '100vw',
                                    height: '90vh',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                Loading data...
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Properties;
