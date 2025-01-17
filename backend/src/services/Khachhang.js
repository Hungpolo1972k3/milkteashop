import db from "../models/index.js"
import bcrypt from 'bcryptjs'   
import jwt from 'jsonwebtoken'
require('dotenv').config()

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
export const registerService = ({username, password, fullname, address, phonenumber}) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.khachhang.findOrCreate({
            where: {username: username},  
            defaults: {
                username: username,
                password: hashPassword(password),
                fullname: fullname,
                address: address,
                phonenumber: phonenumber,
            }
        })
        const token = response[1] && jwt.sign({username: response[0].username},process.env.SECRET_KEY, {expiresIn: '7d'})
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Đăng ký tài khoản thành công !' : "Tài khoản đã tồn tại !",
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})

export const loginService = ({username, password}) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.khachhang.findOne({
            where: {username},
            raw: true
        })
        const isCorrectPassword = response && bcrypt.compareSync(password, response.password)
        const token = isCorrectPassword && jwt.sign({username: response.username}, process.env.SECRET_KEY, {expiresIn: '7d'})
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Đăng nhập thành công !' : response ? "Sai mật khẩu !" :"Tài khoản không tồn tại !",
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})

export const getUserInfo = (username) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.khachhang.findOne({
            where: {username: username},
            raw: true,
            attributes: {
                exclude: ['password']
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const getUserInfoById = (userId) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.khachhang.findOne({
            where: {id: userId},
            raw: true,
            attributes: {
                exclude: ['password']
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const getProductById = (sanphamId) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.sanpham.findOne({
            where: {id: sanphamId, status: 1},
            raw: true,
            attributes: ['productname', 'productprice'],
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const addProductToShoppingCart = (size,sugar,ice,quantity,topping,price,khachhang_id,sanpham_id) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.donhang.create({
            size: size,
            sugar: sugar,
            ice: ice,
            quantity: quantity,
            topping: topping,
            price: price,
            khachhang_id: khachhang_id, 
            sanpham_id: sanpham_id, 
        })
        resolve({
            err: 0 ,
            msg: 'Thêm sản phẩm vào giỏ hàng thành công !',
            response
        })

    } catch (error) {
        reject(error)
    }
})
export const getDonHangById = (donhangId) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.donhang.findOne({
            where: {id: donhangId},
            raw: true,
            attributes: ['sanpham_id', 'size', 'sugar', 'ice', 'quantity', 'topping', 'price'],
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed',
            response
        })
    } catch (error) {
        reject(error)
    }
})
export const deleteDonHang = (donhangId) => {
    return new Promise(async(resolve, reject) =>{
        try {
            let response = await db.donhang.destroy({
                where: { id: donhangId},
                raw: true
              });
            resolve({
                err: response === 1 ? 0 : 1,
                msg: response === 1 ? 'Xóa sản phẩm thành công!' : 'Xóa sản phẩm thất bại !',

              });
        } catch (error) {
            reject(error)
        }
    })
}
export const createHoaDon = (khachhang_id, nvgh_id, shippingcost, shippingaddress, shippingphone, listdonhang_id, trangthaidonhang, totalprice, listproductname) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await db.hoadon.create({
                khachhang_id: khachhang_id,
                nvgh_id: nvgh_id,
                shippingcost: shippingcost,
                shippingaddress: shippingaddress,
                shippingphone: shippingphone,
                listdonhang_id: listdonhang_id,
                trangthaidonhang: trangthaidonhang,
                totalprice: totalprice,
                listproductname: listproductname
            });
            resolve({
                err: 0,
                response
            }); 
        } catch (error) {
            reject(error); 
        }
    });
};

export const getHoaDonById = (hoadonId) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.hoadon.findOne({
            where: {id: hoadonId},
            raw: true,
            attributes: ['khachhang_id', 'nvgh_id', 'shippingcost', 'shippingaddress', 'shippingphone', 'listdonhang_id', 'trangthaidonhang', 'totalprice', 'listproductname'],
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const getNVGHById = (nvghId) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.bengiaohang.findOne({
            where: {id: nvghId},
            raw: true,
            attributes: ['fullname', 'phonenumber'],
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const getAllHoaDon = (khachhangId, trangthaidonhang) => new Promise(async (resolve, reject) => {
    try {
        let response = ''
        if(trangthaidonhang === "ALL"){
            response = await db.donhang.findAll(
                {
                    where: {khachhang_id: khachhangId}
                }
            )
        }else{
            if(khachhangId === 0) {
                response = await db.donhang.findAll(
                    {
                        where: {trangthaidonhang: trangthaidonhang}
                    }
                )
            }else{
                response = await db.hoadon.findAll({
                    where: {trangthaidonhang: trangthaidonhang, khachhang_id: khachhangId},
                    raw: true
                })
            }}
        resolve(response)
    } catch (error) {
        reject(error);
    }
});


export const getHoaDonByUserId = (userId) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.hoadon.findAll({
            where: {khachhang_id: userId},
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed',
            response
        })
    } catch (error) {
        reject(error)
    }
})