import express from "express"
import * as bengiaohangController from "../controller/Bengiaohang"
const router = express.Router();

router.post("/login-nvgh", bengiaohangController.loginnvgh)
router.get("/get-nvgh-info", bengiaohangController.handleGetNVGHInfo)
router.get('/get-all-don-hang-by-key', bengiaohangController.handleGetAllDonHangByKey)

module.exports = router