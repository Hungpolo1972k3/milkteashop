import axiosConfig from "../axiosConfig"

export const apiLogin = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/milkteashop/login',
            data: payload
        })
        resolve(response)
        
    } catch (error) {
        reject(error)
    }
})
export const apiRegister= (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/milkteashop/register',
            data: payload
        })
        resolve(response)
        
    } catch (error) {
        reject(error)
    }
})

export const apiGetUserInfo= (username) =>{
    return axiosConfig.get(`api/milkteashop/get-user-info?username=${username}`)
}
export const apiGetUserInfoById= (userId) =>{
    return axiosConfig.get(`api/milkteashop/get-user-info-by-id?id=${userId}`)
}

export const apiAddProductToShoppingCart = (size,sugar,ice,quantity,topping,price,khachhang_id,sanpham_id) =>{
    return axiosConfig.post(`api/milkteashop/add-product-to-shopping-cart?size=${size}&sugar=${sugar}&ice=${ice}&quantity=${quantity}&topping=${topping}&price=${price}&khachhang_id=${khachhang_id}&sanpham_id=${sanpham_id}`)
}
export const apiDeleteDonHang = (donhangId) => {
    return axiosConfig.delete(`/api/milkteashop/delete-donhang?id=${donhangId}`);
};
export const apiCreateHoaDon = (khachhang_id, nvgh_id, shippingcost, shippingaddress, shippingphone, listdonhang_id, trangthaidonhang, totalprice, listproductname) => {
    const params = {
        khachhang_id: khachhang_id,
        nvgh_id: nvgh_id,
        shippingcost: shippingcost,
        shippingaddress: shippingaddress,
        shippingphone: shippingphone,
        listdonhang_id: listdonhang_id,
        trangthaidonhang: trangthaidonhang,
        totalprice: totalprice,
        listproductname: listproductname

    };
    return axiosConfig.post('/api/milkteashop/create-hoadon', params);
};
export const apiGetProductById = (productId) => {
    return axiosConfig.get(`api/milkteashop/get-product-by-id?id=${productId}`)
}
export const apiGetDonHangById = (donhangId) => {
    return axiosConfig.get(`api/milkteashop/get-don-hang-by-id?id=${donhangId}`)
}
export const apiGetHoaDonById = (hoadonId) => {
    return axiosConfig.get(`api/milkteashop/get-hoa-don-by-id?id=${hoadonId}`)
}
export const apiGetNVGHById = (nvghId) => {
    return axiosConfig.get(`api/milkteashop/get-nvgh-by-id?id=${nvghId}`)
}

export const apiGetAllHoaDon = (khachhangId, trangthaidonhangId) =>{
    return axiosConfig.get(`api/milkteashop/get-all-hoadons?khachhang_id=${khachhangId}&trangthaidonhang=${trangthaidonhangId}`)
}
export const apiGetHoaDonByUserId = (userId) => {
    return axiosConfig.get(`api/milkteashop/get-hoa-don-by-user-id?khachhang_id=${userId}`)
}