import React, { useEffect, useState } from 'react'
import './properties.css'
import propsoch from '../images/propsoch.png'
import heart from '../images/heart.png'
import pinkHeart from '../images/pink-heart.png'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Actions/action'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Properties = () => {
 
  const { data } = useSelector(state => state.data)
  const [liked, setLiked] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])

  const CustomNextArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "50%",
        right: "10px", 
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
      onClick={onClick}
    />)

  const CustomPrevArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
      onClick={onClick}
    />);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToScroll: 1,
    autoplay:false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <div className='border-b pb-6'>
        <div className='mx-6'>
            <div style={{height:'30px', zIndex:10, top:0, width:'100%'}} className='fixed py-8'>
                <img src={propsoch}/>
            </div>
          <div className='flex justify-between grid-container mt-20'>{data?.data?.map((e, index) => {
            return <div style={{width:'300px'}} className='relative cursor-pointer'>

              <Slider {...settings} style={{width:'100%'}} className='scroll-container slider-container'>
                {e?.images?.map((image) => {
                  return <img alt="img" width={'100%'} height={'100%'} src={image} className='rounded-xl' />
                })}
              </Slider>

              <div style={{top:20, left:20}} className='mostLiked'>Most liked</div>
              <div style={{position: 'absolute' ,top:20, right:20}}>
                <img div alt="img" onClick={(e) =>{e.stopPropagation(); liked.includes(index) ? setLiked(liked.filter((e) => e !== index)) : setLiked([...liked, index])}} width={'21px'} src={liked.includes(index) ? pinkHeart : heart} />
              </div>
            </div>
          })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Properties;
