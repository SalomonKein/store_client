import { SET_AUTH_DATA_USER } from '../../utils/consts';

// initial state
const initialState = {
    email: null,
    userId: null,
    isAuth: true,
    password: null,
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_DATA_USER: {            
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return state
        }
    }
}