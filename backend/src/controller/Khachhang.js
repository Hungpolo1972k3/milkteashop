import * as userService from "../services/Khachhang"
export const register = async(req, res) =>{
    const {username, password, fullname, address, phonenumber} = req.body
    try {
        if(!username || !password || !fullname || !phonenumber || !address){
            return res.status(400).json({
                err: 1,
                msg: "Missing input parameters !"
            })
        }
        const response = await userService.registerService(req.body)
        return res.status(200).json(response)       
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })
    }
}

export const login = async(req, res) =>{
    const { username, password } = req.body;
    try {
        const response = await userService.loginService(req.body)
    return res.status(200).json(response)       
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: ""+ error
        })
    }
}
export const handleGetUserInfo = async(req, res) =>{
    const username = req.query.username;
    try {
        const response = await userService.getUserInfo(username)
        return res.status(200).json({
            err: 0,
            msg: 'OK',
            response
    })       
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: ""+ error
        })
    }
}
export const handleGetUserInfoById = async(req, res) =>{
    const id = req.query.id;
    try {
        const response = await userService.getUserInfoById(id)
        return res.status(200).json({
            err: 0,
            msg: 'OK',
            response
    })       
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: ""+ error
        })
    }
}
export const handleGetProductById = async(req, res) =>{
    try {
        const id = req.query.id
    const response = await userService.getProductById(id)
    return res.status(200).json({
        err: 0,
        response
    })

    } catch (error) {
        return({
            err: -1,
            msg: "" + error
        })
    }
}
export const handleAddProductToShoppingCart = async(req, res) =>{
    const ice = req.query.ice
    const size = req.query.size
    const sugar = req.query.sugar
    const quantity = req.query.quantity
    const topping = req.query.topping
    const price = req.query.price
    const khachhang_id = req.query.khachhang_id
    const sanpham_id = req.query.sanpham_id
    try {
        const response = await userService.addProductToShoppingCart(size,sugar,ice,quantity,topping,price,khachhang_id,sanpham_id)
        return res.status(200).json({
            err: 0,
            response
    })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: ""+ error
        })
    }
}

export const handleGetDonHangById = async(req, res) =>{
    try {
        const id = req.query.id
    const response = await userService.getDonHangById(id)
    return res.status(200).json({
        err: 0,
        response
    })

    } catch (error) {
        return({
            err: -1,
            msg: "" + error
        })
    }
}
export const handleDeleteDonHang = async(req, res) =>{
    try {
        const id = req.query.id
        let response = await userService.deleteDonHang(id)
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

export const handleCreateHoaDon = async(req, res) =>{
    try {
        const khachhang_id = req.body.khachhang_id
        const nvgh_id = req.body.nvgh_id
        const shippingcost = req.body.shippingcost
        const shippingaddress = req.body.shippingaddress	
        const shippingphone = req.body.shippingphone	
        const listdonhang_id = req.body.listdonhang_id	
        const trangthaidonhang = req.body.trangthaidonhang	
        const totalprice = req.body.totalprice	
        const listproductname = req.body.listproductname
        const response = await userService.createHoaDon(khachhang_id,nvgh_id, shippingcost, shippingaddress, shippingphone,listdonhang_id, trangthaidonhang, totalprice, listproductname)
        return res.status(200).json(response) 
    } catch (error) {
        return({
            err: -1,
            msg: "" + error
        })
    }
}
export const handleGetHoaDonById = async(req, res) =>{
    try {
        const id = req.query.id
    const response = await userService.getHoaDonById(id)
    return res.status(200).json({
        err: 0,
        response
    })

    } catch (error) {
        return({
            err: -1,
            msg: "" + error
        })
    }
}
export const handleGetNVGHById = async(req, res) =>{
    try{
        const id = req.query.id
    const response = await userService.getNVGHById(id)
    return res.status(200).json({
        err: 0,
        response
    })

    } catch (error) {
        return({
            err: -1,
            msg: "" + error
        })
    }
}

export const handleGetAllHoaDon = async(req, res) =>{
        let khachhang_id = req.query.khachhang_id
        let trangthaidonhang = req.query.trangthaidonhang
        let hoadons = await userService.getAllHoaDon(khachhang_id,trangthaidonhang)
        return res.status(200).json({
            err: 0,
            msg: 'OK',
            hoadons
        })
    }
    
    export const handleGetHoaDonByUserId = async(req, res) =>{
        try {
            const id = req.query.id
        const response = await userService.getHoaDonByUserId(id)
        return res.status(200).json({
            err: 0,
            response
        })
    
        } catch (error) {
            return({
                err: -1,
                msg: "" + error
            })
        }
    }

