import { SHOW_ONE_DEVICE } from '../../utils/consts';

// initial state
const initialState = {
    devId: 1,
    
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_ONE_DEVICE: {
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