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

const Properties = () => {

    const { data } = useSelector(state => state.data)
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

    return (
        <>
            <div style={{ width: '100%' }}>
                <div style={{ width: '100%' }}>
                    <div style={{ height: '20px', width: '100%', textAlign: 'center' }} className='pt-3 pb-8'>
                        <img src={propsoch} />
                    </div>
                    <div style={{ width: '256px' }} className='justify-between grid-container pb-12'>{data?.data?.map((e, index) => {
                        return <div style={{ width: '256px', paddingLeft: '20px', paddingRight: '20px', outline:'none', userSelect: 'none' }} className='relative cursor-pointer pb-6'>
                            <Slider {...settings} className='scroll-container slider-container rounded-8'>
                                {e?.images?.map((image) => {
                                    return <img onClick={() => navigate(`/propertyDetails/${e._id}`)} style={{ width: '100%', height: 'auto', display: 'block', outline:'none', userSelect: 'none' }} alt="img" src={image} className='' />
                                })}
                            </Slider>
                            {e.typeOfRental != 'superhost' && <div style={{ top: 30, left: 30 }} className='mostLiked'>Most liked</div>}
                            <div style={{ position: 'absolute', top: 30, right: 30 }}>
                                <img style={{outline:'none', userSelect: 'none'}} alt="img" onClick={(e) => { e.stopPropagation(); liked.includes(index) ? setLiked(liked.filter((e) => e !== index)) : setLiked([...liked, index]) }} width={'30px'} src={liked.includes(index) ? pinkHeart : heart} />
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
                    })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Properties;
