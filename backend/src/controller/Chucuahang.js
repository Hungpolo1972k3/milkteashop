import * as chucuahangService from "../services/Chucuahang"

export const handleGetAllUsers = async(req, res) =>{
    let id = req.query.id
    let users = await chucuahangService.getAllUsers(id)
    return res.status(200).json({
        err: 0,
        msg: 'OK',
        users
    })
}

export const handleGetUserByKey = async(req, res) =>{
    let username = req.query.username
    try {
        let user = await chucuahangService.getUserByKey(username)
        return res.status(200).json({
                err: 0,
                msg: 'OK',
                user
            })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })     
    }
}

export const handleDeleteUser = async(req, res) =>{
    try {
        const id = req.query.id
        let response = await chucuahangService.deleteUser(id)
        return res.status(200).json(
        { 
            err: 0,
            msg: 'OKE',
            response
        })
    }catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })
}}

export const handleGetAllHoaDonByTTDH = async(req, res) =>{
    let trangthaidonhang = req.query.trangthaidonhang
    let hoadons = await chucuahangService.getAllHoaDonByTTDH(trangthaidonhang)
    return res.status(200).json({
        err: 0,
        msg: 'OK',
        hoadons
    })
}
//NVGH
export const handleCreateNVGH = async(req, res) =>{
    const {username, password, fullname, address, phonenumber} = req.body
    try {
        const response = await chucuahangService.CreateNVGH(req.body)
        return res.status(200).json(response)       
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })
    }
}
export const handleGetNVGHByKey = async(req, res) =>{
    let fullname = req.query.fullname
    try {
        let nvgh = await chucuahangService.getNVGHByKey(fullname)
        return res.status(200).json({
                err: 0,
                msg: 'OK',
                nvgh
            })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })     
    }
}

export const handleGetAllNVGH = async(req, res) =>{
    let nvghs = await chucuahangService.getAllNVGH()
    return res.status(200).json({
        err: 0,
        msg: 'OK',
        nvghs
    })
}
export const handleDeleteNVGH = async(req, res) =>{
    try {
        const id = req.query.id
        let response = await chucuahangService.deleteNVGH(id)
        return res.status(200).json(
        { 
            err: 0,
            msg: 'OKE',
            response
        })
    }catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })
}}

export const handleEditNVGH = async(req, res) =>{
    let id = req.query.id
    let fullname = req.query.fullname
    let address = req.query.address
    let phonenumber = req.query.phonenumber
    let username = req.query.username
    try {
        let newnvgh = await chucuahangService.editNVGH(id, fullname, address, phonenumber,username)
            return res.status(200).json({
                err: 0,
                msg: 'OK',
                newnvgh
            })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })     
    }
}



// San Pham
export const handleGetAllProducts = async(req, res) =>{
    let products = await chucuahangService.getAllProducts()
    return res.status(200).json({
        err: 0,
        msg: 'OK',
        products
    })
}

export const handleGetProductByKey = async(req, res) =>{
    let productname = req.query.productname
    try {
        let product = await chucuahangService.getProductByKey(productname)
            return res.status(200).json({
                err: 0,
                msg: 'OK',
                product
            })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })     
    }
}
export const handleEditProduct = async(req, res) =>{
    let id = req.query.id
    let productname = req.query.productname
    let productprice = req.query.productprice
    try {
        let newproduct = await chucuahangService.editProduct(id, productname, productprice)
            return res.status(200).json({
                err: 0,
                msg: 'OK',
                newproduct
            })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })     
    }
}

export const handleCreateProduct = async(req, res) =>{
    let productname = req.body.productname
    let productprice = req.body.productprice
    try {
        const response = await chucuahangService.CreateProduct(productname, productprice)
        return res.status(200).json(response)       
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })
    }
}

export const handleDeleteProduct = async(req, res) =>{
    try {
        const id = req.query.id
        let response = await chucuahangService.deleteProduct(id)
        return res.status(200).json(
        { 
            err: 0,
            msg: 'OKE',
            response
        })
    }catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })
}}

export const handleEditTTDHById = async(req, res) =>{
    let id = req.query.id
    try {
        let response = await chucuahangService.editTTDHById(id)
            return res.status(200).json({
                err: 0,
                response
            })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })     
    }
}

export const handleEditNVGHId = async(req, res) =>{
    let id = req.query.id
    let nvgh_id = req.query.nvgh_id
    try {
        let response = await chucuahangService.editNVGHId(id, nvgh_id)
            return res.status(200).json({
                err: 0,
                response
            })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })     
    }
}