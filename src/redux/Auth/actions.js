import { SET_AUTH_DATA_USER } from '../../utils/consts'


export function setAuthUserData(email, userId, isAuth, password) {
    return  {
        type: SET_AUTH_DATA_USER,
        data: {
            email,
            userId,
            isAuth,
            password
        }
    }
}

