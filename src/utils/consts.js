import conditioner from '../assets/conditioner.jpg';
import laptop from '../assets/laptop.jpg';
import phone from '../assets/phone.jpg';
import refregirator from '../assets/refregirator.jpg';





export const ADMIN_ROUTE = '/admin'
export const LOGIN_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/registration'
export const SHOP_ROUTE = '/'
export const BASKET_ROUTE = '/basket'
export const DEVICE_ROUTE = '/device'


export const SET_AUTH_DATA_USER = 'AUTH/SET_AUTH_DATA_USER'
export const SHOW_ONE_DEVICE = 'DEVICE/SHOW_ONE_DEVICE'
export const SHOW_ALL_DEVICE = 'SHOP/SHOW_ALL_DEVICE'
export const SHOW_SELECT_DEVICE = 'SHOP/SHOW_SELECT_DEVICE'
export const SHOW_SELECT_BRAND = 'SHOP/SHOW_SELECT_BRAND'
export const SET_TYPE = 'SHOP/SET_TYPE'
export const SET_BRAND = 'SHOP/SET_BRAND'
export const SET_DEVICE = 'SHOP/SET_DEVICE'
export const SET_TOTALCOUNT = 'SHOP/SET_TOTALCOUNT'
export const SET_PAGE = 'SHOP/SET_PAGE'



export const imgArray = [{img:conditioner, id:3}, {img:laptop, id:5}, {img:laptop, id:4},  {img:phone, id:2} ,{img:refregirator, id:1} ]
console.log(imgArray, 'imgArray')