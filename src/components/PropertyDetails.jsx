import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleData } from '../Actions/action'
import { useParams } from 'react-router'
import locationBlue from '../images/location-blue.png'
import locationOrange from '../images/location-orange.png'
import MapComponent from './MapComponent'
import propsoch from '../images/propsoch.png'
import Footer from './Footer'
import Slider from 'react-slick'
import { CustomNextArrow, CustomPrevArrow } from './commonComponent'

const PropertyDetails = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const { details } = useSelector(state => state.details)
    const [text, setText] = useState(false)

    useEffect(() => {
        dispatch(getSingleData(id))
    }, [id])

    const truncateText = (text, maxLength) => {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength) + '...';
    }

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
            <div style={{ height: '20px', width: '100%', textAlign: 'center', zIndex:10, top:0 }} className='header-fixed py-4'>
                <img src={propsoch} />
            </div>
            <div className='mx-6 pt-2 pb-12 mt-6'>
                <div className='relative'>
                <Slider {...settings} className='scroll-container slider-container rounded-4'>
                    {details?.data?.images?.map((image) => {
                        return <img  alt="img" src={image} />
                    })}
                </Slider>
                {details?.data?.typeOfRental != 'superhost' && <div style={{ top: 10, left: 10 }} className='mostLiked'>Most liked</div>}
                </div>
                <div className='flex justify-between pt-6'>
                    <p onClick={()=>setText(!text)} className='title my-auto cursor-pointer'>{text ? details?.data?.name : truncateText(details?.data?.name, 20)}</p>
                    <p className='title my-auto'>5.2 Cr</p>
                </div>
                <div className='flex justify-between my-auto subTitle'>
                    <div className='flex'>
                        <img width={'14px'} src={locationBlue} />
                        <p className='my-auto ml-1'>{details?.data?.location}</p>
                    </div>
                    <p className='my-auto'>EMI Available</p>
                </div>
                <p>Location</p>
                <div className='flex my-auto pb-6'>
                    <div className='my-auto' style={{ width: '70px' }}>
                        <img width={'100%'} src={locationOrange} />
                    </div>
                    <p className='my-auto address pl-4'>Jl. Gerungsari, Bulusan, Kec. Tembalang, Kota Semarang, Jawa Tengah 50277</p>
                </div>
                <MapComponent location={details?.data?.location}/>
                <div className='flex pt-2 nowrap'>
                    <p className='amenitiesTile'>2 Hospitals</p>
                    <p className='amenitiesTile ml-4'>4 Gas stations</p>
                    <p className='amenitiesTile ml-4'>2 Schools</p>
                </div>
                <p className='my-auto propertyTitle pt-3'>Property Amenities</p>
                <div className='flex'>
                    <p className='amenitiesTile bg-tile'>House</p>
                    <p className='amenitiesTile ml-4'>Apartment</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PropertyDetails