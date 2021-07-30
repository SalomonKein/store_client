import {SHOW_ALL_DEVICE, SHOW_SELECT_DEVICE, SHOW_SELECT_BRAND, SET_TYPE, SET_BRAND, SET_DEVICE, SET_TOTALCOUNT, SET_PAGE} from '../../utils/consts'


export function showAll(type) {
    return {
        type: SHOW_ALL_DEVICE,
        data: {
            type
        }
    }
}

export function selectType(selectedType) {
    setPage(1)
    return {
        type: SHOW_SELECT_DEVICE,
        data: {
            selectedType

        }
    }
}

export function selectBrand(selectedBrand) {
    setPage(1)
    return {
        type: SHOW_SELECT_BRAND,
        data: {
            selectedBrand
        }
    }
}

export function setTypes(type) {    
    return {
        type: SET_TYPE,
        data: {
            type
        }
    }
}
export function setBrands(brands) {    
    return {
        type: SET_BRAND,
        data: {
            brands
        }
    }
}
export function setDevices(devices) {    
    return {
        type: SET_DEVICE,
        data: {
            devices
        }
    }
}
export function setTotalCount(count) {
    return {
        type: SET_TOTALCOUNT,
        data: {
            count
        }
    }
}
export function setPage(page) {
    return {
        type: SET_PAGE,
        data: {
            page
        }
    }
}