import { RAW } from "sequelize/lib/query-types"
import bcrypt from 'bcryptjs'   
import jwt from 'jsonwebtoken'
import db from "../models/index.js"
import { v4 } from 'uuid'
export const getAllUsers = (userId) => {
    return new Promise(async(resolve, reject) =>{
        try {
            let users = ''
            if(userId === 'ALL'){
                users = await db.khachhang.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            resolve(users)
        } catch (error) {
            reject(error)
        }
    })
} 
export const getUserByKey = (username) => {
    return new Promise(async(resolve, reject) =>{
        try {
            let user = ''
            user = await db.khachhang.findOne({
                where: {username: username},
                raw: true,
                attributes: {
                    exclude: ['password']
                }
            })
            resolve(user ? user : null)
        } catch (error) {
            reject(error)
        }
    })
}
export const deleteUser = (userId) => {
    return new Promise(async(resolve, reject) =>{
        try {
            let response = await db.khachhang.destroy({
                where: { id: userId},
                raw: true
              });
            resolve({
                err: response === 1 ? 0 : 1,
                msg: response === 1 ? 'Delete successfully!' : 'Failed to delete !',

              });
        } catch (error) {
            reject(error)
        }
    })
}

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
export const CreateNVGH = ({username, password, fullname, address, phonenumber}) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.bengiaohang.findOrCreate({
            where: {username: username},  
            defaults: {
                username: username,
                password: hashPassword(password),
                fullname: fullname,
                address: address,
                phonenumber: phonenumber,
                status: 1
            }
        })
        const token = response[1] && jwt.sign({username: response[0].username},process.env.SECRET_KEY, {expiresIn: '7d'})
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Thêm mới nhân viên giao hàng thành công !' : "Tài khoản đã tồn tại !",
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})
export const getNVGHByKey = (fullname) => {
    return new Promise(async(resolve, reject) =>{
        try {
            let nvgh = await db.bengiaohang.findOne({
                where: {fullname: fullname, status: 1},
                raw: true,
                attributes: {
                    exclude: ['password']
                }
            })
            resolve(nvgh ? nvgh : null)
        } catch (error) {
            reject(error)
        }
    })
}
export const getAllNVGH = () => {
    return new Promise(async(resolve, reject) =>{
        try {
            let nvghs = await db.bengiaohang.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            resolve(nvghs)
        } catch (error) {
            reject(error)
        }
    })
} 
export const deleteNVGH = (nvghId) => {
    return new Promise(async(resolve, reject) =>{
        try {
            let response = await db.bengiaohang.update({
                status: 0
            },{
                where: { id: nvghId},
                raw: true
              });
            resolve({
                err: response === 1 ? 0 : 1,
                msg: 'Xóa nhân viên giao hàng thành công!',
              });
        } catch (error) {
            reject(error)
        }
    })
}
export const editNVGH = (id, fullname, address, phonenumber,username ) => {
    return new Promise(async(resolve, reject) =>{
        try {
            await db.bengiaohang.update({
                fullname: fullname,
                address: address,
                phonenumber: phonenumber,
                username: username,
            }, {
                where: {id},
                raw: true
            })
            resolve({
                err: 0,
                msg: 'Chỉnh sửa thông tin nhân viên giao hàng thành công !'
            })
        } catch (error) {
            reject(error)
        }
    })
}


export const getAllProducts = () => {
    return new Promise(async(resolve, reject) =>{
        try {
            let products = await db.sanpham.findAll(
                {where: {status: 1}}
            )
            resolve(products)
        } catch (error) {
            reject(error)
        }
    })
} 
export const getProductByKey = (productname) => {
    return new Promise(async(resolve, reject) =>{
        try {
            let product = await db.sanpham.findOne({
                where: {productname: productname, status: 1},
                raw: true,
            })
            resolve(product ? product : null)
        } catch (error) {
            reject(error)
        }
    })
}
export const editProduct = (id, productname, productprice) => {
    return new Promise(async(resolve, reject) =>{
        try {
            await db.sanpham.update({
                productname: productname,
                productprice: productprice
            }, {
                where: {id},
                raw: true
            })
            resolve({
                err: 0,
                msg: 'Chỉnh sửa thông tin sản phẩm thành công !'
            })
        } catch (error) {
            reject(error)
        }
    })
}

export const CreateProduct = (productname,productprice) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.sanpham.findOrCreate({
            where: {productname},  
            defaults: {
                productname: productname,
                productprice: productprice,
                productimageurl: v4(),
                status: 1
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            msg: response[1] ? 'Create a new product successfully !' : 'The product is exist !'
        })

    } catch (error) {
        reject(error)
    }
})

export const deleteProduct = (productId) => {
    return new Promise(async(resolve, reject) =>{
        try {
            let response = await db.sanpham.update({
                status: 0},{
                where: { id: productId},
                raw: true
              });
            resolve({
                err: response === 1 ? 0 : 1,
                msg: 'Sản phẩm đã bị xóa!',

              });
        } catch (error) {
            reject(error)
        }
    })
}

export const editTTDHById = (hoadonid) => {
    return new Promise(async(resolve, reject) =>{
        try {
            await db.hoadon.update({
                trangthaidonhang: "Đã Thanh Toán"
            }, {
                where: {id : hoadonid},
                raw: true
            })
            resolve({
                err: 0,
                msg: 'Đơn hàng đã được thanh toán thành công!'
            })
        } catch (error) {
            reject(error)
        }
    })
}
export const editNVGHId = (hoadonid, newnvgh_id) => {
    return new Promise(async(resolve, reject) =>{
        try {
            await db.hoadon.update({
                nvgh_id: newnvgh_id
            }, {
                where: {id : hoadonid},
                raw: true
            })
            resolve({
                err: 0,
                msg: 'Đơn hàng đã được chọn nhân viên giao hàng !'
            })
        } catch (error) {
            reject(error)
        }
    })
}

export const getAllHoaDonByTTDH = (trangthaidonhang) => new Promise(async (resolve, reject) => {
    try {
            let response = await db.hoadon.findAll({
                    where: {trangthaidonhang: trangthaidonhang},
                    raw: true
                })
        resolve(response)
    } catch (error) {
        reject(error);
    }
});
