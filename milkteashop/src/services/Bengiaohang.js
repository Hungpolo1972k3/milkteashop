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