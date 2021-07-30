import { SET_BRAND, SET_DEVICE, SET_PAGE, SET_TOTALCOUNT, SET_TYPE, SHOW_ALL_DEVICE, SHOW_SELECT_BRAND, SHOW_SELECT_DEVICE } from '../../utils/consts';

// initial state
const initialState = {
    types : [],
    brands : [],
    devices : [],
    selectedType : {},
    selectedBrand : {},
    curentPage: 1,
    totalCount: 0,
    limit: 3
    
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALL_DEVICE: {
            return {
                ...state,
                ...action.data
            }
        }
        case SHOW_SELECT_DEVICE: {
            return {
                ...state,
                ...action.data
            }
        }
        case SHOW_SELECT_BRAND: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_TYPE: {            
            return {
                ...state,
                types: [...action.data.type]
            }
        }
        case SET_BRAND: {                      
            return {
                ...state,
                brands: [...action.data.brands]
            }
        }
        case SET_DEVICE: {                                 
            return {
                ...state,
                devices: [...action.data.devices.rows]
            }
        }
        case SET_TOTALCOUNT: { 
            return {
                ...state,
                totalCount: action.data.count
            }
        }
        case SET_PAGE: { 
            return {
                ...state,
                curentPage: action.data.page
            }
        }
        default: {
            return state
        }
    }
}