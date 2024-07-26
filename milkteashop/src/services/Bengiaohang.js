import axiosConfig from "../axiosConfig"
export const apiLoginnvgh = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/milkteashop/login-nvgh',
            data: payload
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetNVGHInfo= (usernameNVGH) =>{
    return axiosConfig.get(`api/milkteashop/get-nvgh-info?username=${usernameNVGH}`)
}

export const apiGetAllHoaDonByKey= (inputId, inputtrangthaidonhang) =>{
    return axiosConfig.get(`api/milkteashop/get-all-don-hang-by-key?nvgh_id=${inputId}&trangthaidonhang=${inputtrangthaidonhang}`)
}

export const apiXacNhanNhanDonHang = (donhangId,nvghId) => {
    return axiosConfig.put(`/api/milkteashop/xac-nhan-nhan-don-hang?id=${donhangId}&nvgh_id=${nvghId}`)
}

export const apiGiaoHangThanhCong = (donhangId) => {
    return axiosConfig.put(`/api/milkteashop/giao-hang-thanh-cong?id=${donhangId}`)
}

export const apiHuyDonHang = (donhangId) => {
    return axiosConfig.put(`/api/milkteashop/huy-don-hang?id=${donhangId}`)
}