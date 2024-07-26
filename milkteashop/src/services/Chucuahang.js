import axiosConfig from "../axiosConfig"
//Quan ly khach hang
export const apiGetAllUsers = (userid) => {
    return axiosConfig.get(`api/milkteashop/get-all-users?id=${userid}`)
}
export const apiGetUserByKey = (username) => {
    return axiosConfig.get(`api/milkteashop/get-user-by-key?username=${username}`)
}
export const apiDeleteUser = (userId) => {
    return axiosConfig.delete(`/api/milkteashop/delete-user?id=${userId}`);
  };


//Quan ly ben giao hang
export const apiCreateNVGH = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/milkteashop/create-nvgh',
            data: payload
        })
        resolve(response)     
    } catch (error) {
        reject(error)
    }
})

export const apiGetNVGHByKey = (fullname) => {
    return axiosConfig.get(`api/milkteashop/get-nvgh-by-key?fullname=${fullname}`)
}
export const apiGetAllNVGH = () => {
    return axiosConfig.get("api/milkteashop/get-all-nvghs")
}
export const apiDeleteNVGH = (nvghId) => {
    return axiosConfig.put(`/api/milkteashop/delete-nvgh?id=${nvghId}`);
  };
export const apiEditNVGH = (id, fullname, address, phonenumber,username) => {
    return axiosConfig.put(`api/milkteashop/edit-nvgh?id=${id}&fullname=${fullname}&address=${address}&phonenumber=${phonenumber}&username=${username}`);
};

//Quan ly san pham  
export const apiGetAllProducts = () => {
    return axiosConfig.get("api/milkteashop/get-all-products")
}

export const apiGetProductByKey = (productname) => {
    return axiosConfig.get(`api/milkteashop/get-product-by-key?productname=${productname}`)
}

export const apiEditProduct = (id, productname, productprice) => {
    return axiosConfig.put(`api/milkteashop/edit-product?id=${id}&productname=${productname}&productprice=${productprice}`);
};

export const apiCreateProduct = (productname, productprice) => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/milkteashop/create-product',
            data: {productname, productprice}
        })
        resolve(response)     
    } catch (error) {
        reject(error)
    }
})
export const apiDeleteProduct = (productId) => {
    return axiosConfig.put(`/api/milkteashop/delete-product?id=${productId}`);
};
export const apiEditTTDHById = (hoadonid) => {
    return axiosConfig.put(`api/milkteashop/thanh-toan?id=${hoadonid}`);
};
export const apiEditNVGHId = (hoadonid, newnvgh_id) => {
    return axiosConfig.put(`api/milkteashop/edit-nvgh-id?id=${hoadonid}&nvgh_id=${newnvgh_id}`);
};
export const apiGetAllHoaDonByTTDH = (trangthaidonhangId) =>{
    return axiosConfig.get(`api/milkteashop/get-all-hoa-don-by-ttdh?trangthaidonhang=${trangthaidonhangId}`)
}