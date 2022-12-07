import SHOW_ONE_DEVICE from '../../utils/consts/'


export function showOneDevice(userId, isAuth, devId) {
    return {
        type: SHOW_ONE_DEVICE,
        data: {
            devId
        }
    }
}