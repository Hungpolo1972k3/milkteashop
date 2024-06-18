
import userRouter from "../route/Khachhang"
import chucuahangRouter from '../route/Chucuahang'
import bengiaohangRouter from "../route/BenGiaoHang"


let initWebRoutes = (app) =>{

    app.use('/api/milkteashop', userRouter)
    app.use('/api/milkteashop', chucuahangRouter)
    app.use('/api/milkteashop', bengiaohangRouter)

    return app.use('/', (req, res)=>{
        res.send ("server on ...")
    })

}

module.exports = initWebRoutes