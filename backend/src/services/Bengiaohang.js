import db from "../models/index.js"
import bcrypt from 'bcryptjs'   
import jwt from 'jsonwebtoken'
require('dotenv').config()

export const loginnvghService = ({usernamenvgh, passwordnvgh}) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.bengiaohang.findOne({
            where: {username: usernamenvgh},
            raw: true
        })
        const isCorrectPassword = response && bcrypt.compareSync(passwordnvgh, response.password)
        const token = isCorrectPassword && jwt.sign({username: response.username}, process.env.SECRET_KEY, {expiresIn: '7d'})
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Login is successfully !' : response ? "Password is wrong !" :"Username is not found !",
            token: token || null
        })
    } catch (error) {
        reject(error)
    }
})

export const getNVGHInfo = (usernamenvgh) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.bengiaohang.findOne({
            where: {username: usernamenvgh},
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

export const getAllDonHangByKey = (inputId, trangthaidonhang) => new Promise(async(resolve, reject) => {
    try{
        const response = await db.hoadon.findAll({
            where: {nvgh_id: inputId, trangthaidonhang: trangthaidonhang },
            raw: true,
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

