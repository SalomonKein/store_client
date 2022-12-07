import { $authHost, $host } from "./index";
import initialState from '../utils/initialState';

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand')
    return data
}

export const createDevices = async (device) => {

    const { data } = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
    // const {data} = await $host.get('api/device', {params:{typeId, brandId, page, limit}})
    let data = initialState.devices;
    (typeId) ? data = data.filter(item => item.typeId === typeId) : data = data;
    (brandId) ? data = data.filter(item => item.brandId === brandId) : data = data;
    return data
}

export const fetchOneDevices = async (id) => {
    const { data } = await $host.get('api/device/' + id)
    return data
}