import * as bengiaohangService from "../services/Bengiaohang"

export const loginnvgh = async(req, res) =>{
    const { username, password } = req.body;
    try {
        const response = await bengiaohangService.loginnvghService(req.body)
    return res.status(200).json(response)       
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: ""+ error
        })
    }
}

export const handleGetNVGHInfo = async(req, res) =>{
    const username = req.query.username;
    try {
        const response = await bengiaohangService.getNVGHInfo(username)
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
export const handleGetAllDonHangByKey = async(req, res) =>{
    const nvgh_id = req.query.nvgh_id;
    const trangthaidonhang = req.query.trangthaidonhang
    try {
        const response = await bengiaohangService.getAllDonHangByKey(nvgh_id, trangthaidonhang)
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

export const handleXacNhanNhanDonHang = async(req, res) =>{
    let id = req.query.id
    let nvgh_id = req.query.nvgh_id
    try {
        let response = await bengiaohangService.xacNhanNhanDonHang(id, nvgh_id)
            return res.status(200).json({
                err: 0,
                msg: 'OK',
                response
            })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })     
    }
}

export const handleGiaoHangThanhCong = async(req, res) =>{
    let id = req.query.id
    try {
        let response = await bengiaohangService.giaoHangThanhCong(id)
            return res.status(200).json({
                err: 0,
                msg: 'OK',
                response
            })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })     
    }
}
export const handleHuyDonHang = async(req, res) =>{
    let id = req.query.id
    try {
        let response = await bengiaohangService.huyDonHang(id)
            return res.status(200).json({
                err: 0,
                msg: 'OK',
                response
            })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: " " + error
        })     
    }
}

