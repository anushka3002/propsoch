import axios from "axios"
import { GET_PRODUCTS, GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_FAIL, GET_SINGLE_PRODUCT_SUCCESS } from "../Constant/constant"

export const getData = () => async (dispatch) =>{
    try{
        dispatch({
            type: GET_PRODUCTS
        })
        const data = await axios.get(process.env.REACT_APP_API_URL)
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_PRODUCTS_FAIL,
            payload: error
        })
    }
}

export const getSingleData = (id) => async (dispatch) =>{
    try{
        dispatch({
            type: GET_SINGLE_PRODUCT
        })
        const data = await axios.get(`${process.env.REACT_APP_API_URL}/${id}`)
        dispatch({
            type: GET_SINGLE_PRODUCT_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: GET_SINGLE_PRODUCT_FAIL,
            payload: error
        })
    }
}