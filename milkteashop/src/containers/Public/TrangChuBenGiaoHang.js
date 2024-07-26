import React,{useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import avatar from "../../assets/Avatar.png"
import "./TrangChuBenGiaoHang.css"
import {apiGetNVGHInfo, apiXacNhanNhanDonHang, apiGetAllHoaDonByKey, apiGiaoHangThanhCong, apiHuyDonHang} from "../../services/Bengiaohang"
import { apiGetUserInfoById, apiGetAllHoaDon, apiGetHoaDonById, apiGetDonHangById, apiGetProductById } from "../../services/Khachhang";
import { apiGetAllHoaDonByTTDH } from "../../services/Chucuahang";

function TrangChuBenGiaoHang(){
    const[activeTab,setActiveTab] = useState(null)
    const handleTabClick = (tabId) =>{
        setActiveTab(tabId);
    }


    // Đăng Xuất
    const [showModal, setShowModal] = useState(false);
    const DangXuatCCH = useNavigate()
    const handleLogout = () => {
        setShowModal(true);
      };
    
    const handleConfirmLogout = () => {
        DangXuatCCH('/');
    };

    // Hiển thị thông tin 
    const [thongtinNVGH, setThongtinNVGH] = useState({})
    const handleXemThongTinNVGH = async() =>{
        setActiveTab('XemThongTin')
        const value = localStorage.getItem('persist:nvgh');
        const parsedValue = JSON.parse(value);
        const nvghname = JSON.parse(parsedValue.nvghInfo)
        let nvghinfo = await apiGetNVGHInfo(nvghname)
        setThongtinNVGH(nvghinfo.data.response)
    }

    // Hiển thị danh sách đơn hàng cần xác nhận
    const [arrayDonHangXacNhan, setArrayDonHangXacNhan] = useState([]);
    const [arrayUsername, setArrayUsername] = useState([])
    
    const handleHienThiDonHangXacNhan = async () => {
        setActiveTab(null)
        let response = await apiGetAllHoaDonByTTDH('Đặt ship');
        setArrayDonHangXacNhan(response.data.hoadons);
        let khachhangs = response.data.hoadons.map(item => item.khachhang_id)
        let array = []
        for (let khachhang of khachhangs) {
            let response = await apiGetUserInfoById(khachhang);
            array.push(response.data.response.fullname);
        }
        setArrayUsername(array)
        const value = localStorage.getItem('persist:nvgh');
        const parsedValue = JSON.parse(value);
        const nvghname = JSON.parse(parsedValue.nvghInfo);
        let nvghinfo = await apiGetNVGHInfo(nvghname);
        setThongtinNVGH(nvghinfo.data.response)
    };
    useEffect(() => {
    handleHienThiDonHangXacNhan();
    }, []);

    //Xác nhận nhận đơn hàng
    const handleXacNhanDonHang = async (donhangId, nvgh_id) => {
        await apiXacNhanNhanDonHang(donhangId, nvgh_id);
      };

    // Quản lý đơn giao 
    const [arrayDonGiao,setArrayDonGiao] = useState([])
    const [arrayKhachHangName, setArrayKhachHangName] = useState([])
    const handleQuanLyDonGiao = async() =>{
        setActiveTab('QLĐG')
        const value = localStorage.getItem('persist:nvgh');
        const parsedValue = JSON.parse(value);
        const nvghname = JSON.parse(parsedValue.nvghInfo)
        let nvghinfo = await apiGetNVGHInfo(nvghname)
        let response = await apiGetAllHoaDonByKey(nvghinfo.data.response.id,'Shipper đã nhận đơn')
        setArrayDonGiao(response.data.response)
        let khachhangs = response.data.response.map(item => item.khachhang_id)
        let array = []
        for (let khachhang of khachhangs) {
            let response = await apiGetUserInfoById(khachhang);
            array.push(response.data.response.fullname);
        }
        setArrayKhachHangName(array)
    }

    // Xem chi tiết đơn giao
    const [khachHangFullName, setKhachHangFullName] = useState('')
    const [hoaDonInfo, setHoaDonInfo] = useState({})
    const [donHangInfo, setDonHangInfo] = useState([])
    const [productName, setProductName] = useState([])
    const handleXemHoaDonDonHangCanGiao = async(hoadonId, khachhangId, listdonhang) =>{
        setActiveTab("XemChiTietDonHangCanGiao")
        let khachhang = await apiGetUserInfoById(khachhangId)
        setKhachHangFullName(khachhang.data.response.fullname)
        let hoadon = await apiGetHoaDonById(hoadonId)
        setHoaDonInfo(hoadon.data.response.response)
        const array = []
        const array2 = []
        const donhangs = JSON.parse(listdonhang)
        for (let donhang of donhangs) {
            let response = await apiGetDonHangById(donhang)
            array.push(response.data.response.response)
            let response2 = await apiGetProductById(response.data.response.response.sanpham_id)
            array2.push(response2.data.response.response.productname)
        }
        setProductName(array2)
        setDonHangInfo(array)
    }

    // Xác nhận giao hàng thành công
    const handleGiaoHangThanhCong = async(donhangId) =>{
        await apiGiaoHangThanhCong(donhangId);
        window.location.reload();
        alert('Đơn hàng được giao thành công !');
    }

    const handleHuyDonHang = async( donhangId) =>{
        await apiHuyDonHang(donhangId)
        window.location.reload();
        alert('Hủy đơn hàng thành công !')
    }

    // Xem lịch sử giao hàng
    const [lichSuGiaoHang, setLichSuGiaoHang] = useState([])
    const handleXemLichSuGiaoHang = async() =>{
        setActiveTab("XemLichSuGiaoHang")
        const value = localStorage.getItem('persist:nvgh');
        const parsedValue = JSON.parse(value);
        const nvghname = JSON.parse(parsedValue.nvghInfo);
        let nvghinfo = await apiGetNVGHInfo(nvghname)
        let response1 = await apiGetAllHoaDonByKey(nvghinfo.data.response.id, 'Giao hàng thành công')
        let response2 = await apiGetAllHoaDonByKey(nvghinfo.data.response.id, 'Đã thanh toán')
        let response = response1.data.response.concat(response2.data.response)
        setLichSuGiaoHang(response)
    }

    const formatDateTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
        };
        const formattedDateTime = dateTime.toLocaleString('vi-VN', options);
        return formattedDateTime;
    }
    
    return(
        <div className="TrangChuBenGiaoHang">
            <div>
                <div className="Heading">
                    <img  className="Img-logo" src={avatar} alt="Logo" />
                    <div className="Buttons">
                        <button className="Info" onClick={handleQuanLyDonGiao}>
                            Quản lý đơn giao
                        </button> 
                        <button className="Info" onClick={handleXemLichSuGiaoHang}> 
                            Xem lịch sử giao hàng
                        </button> 
                </div>
                <div className="Icon">
                <i class="fa-solid fa-house" onClick={handleHienThiDonHangXacNhan}></i>
                <i class="fa-solid fa-user" onClick={handleXemThongTinNVGH}></i>
                <i class="fa-solid fa-right-from-bracket" onClick={()=>handleLogout()}></i>
                </div>
                </div>
            </div>
            {/* Xác Nhận Đăng Xuất */}
            {showModal && (
                <div className="XacNhanDangXuat">
                    <div className="XacNhanDangXuat-element">
                        <p>Bạn có chắc chắn muốn đăng xuất?</p>
                        <button className="ConfirmLogOut" onClick={handleConfirmLogout}>Đăng Xuất</button>
                        <button className="ConfirmLogOut" onClick={() => setShowModal(false)}>Hủy bỏ</button>
                    </div>
                </div>
            )}

            {/* Xem thong tin  */}
            {activeTab === "XemThongTin" &&(
                <div className="XemThongTin">
                    <h1 className="XemThongTin-Title">Thông Tin Tài Khoản</h1>
                    <div>
                        <h2 className="NVGH-Info"> Họ và Tên : {thongtinNVGH.fullname}</h2>
                        <h2 className="NVGH-Info"> Số Điện Thoại : {thongtinNVGH.phonenumber}</h2>
                        <h2 className="NVGH-Info"> Địa Chỉ Thường Trú : {thongtinNVGH.address}</h2>
                        <h2 className="NVGH-Info"> Tên Tài Khoản: {thongtinNVGH.username}</h2>
                        <h2 className="NVGH-Info"> Mã Nhân Viên : {thongtinNVGH.id}</h2>
                    </div>
                    <button className="ExitToHome" onClick={()=>handleTabClick(null)}>Exit</button>
                </div> 
            )}
            {activeTab === null && (
                <div className="DSĐHXacNhan">
                <h1 className="DSĐHXacNhan text">Danh Sách Đơn Hàng Xác Nhận</h1>
                <ul className="DSĐHXacNhan list">
                    {arrayDonHangXacNhan.map((a, index)=>(
                        <li key={index}>
                        <div className="DSĐHXacNhan element">
                            <div className="ThongTinDonHangXacNhan">
                                <h2 id="MaDH" className="ThongTinDonHangXacNhan-info">Mã Đơn Hàng: {a.id}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangXacNhan-info">Tên Khách Hàng: {arrayUsername[index]}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangXacNhan-info">Số Điện Thoại: {a.shippingphone} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangXacNhan-info">Địa chỉ Giao Hàng: {a.shippingaddress}</h2>
                                <h2 className="ThongTinDonHangXacNhan-info">Tổng Tiền: {a.totalprice} VNĐ (dong)</h2>
                            </div>
                            <button className="XacNhanDonHangbtn" onClick={() => handleXacNhanDonHang(a.id, thongtinNVGH.id)}>Xác Nhận</button>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            )}
            {activeTab === 'QLĐG' && (
                <div className="DSĐHCanGiao">
                <h1 className="DSĐHCanGiao text">Danh Sách Đơn Hàng Chờ Giao</h1>
                <ul className="DSĐHCanGiao list">
                    {arrayDonGiao.map((dongiao, index) =>(
                        <li key={index}>
                        <div className="DSĐHCanGiao element">
                            <div className="ThongTinDonHangCanGiao">
                                <h2 id="MaDH" className="ThongTinDonHangCanGiao-info">Mã Đơn Hàng: {dongiao.id}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangCanGiao-info">Tên Khách Hàng: {arrayKhachHangName[index]}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangCanGiao-info">Số Điện Thoại: {dongiao.shippingphone} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangCanGiao-info">Địa chỉ Giao Hàng: {dongiao.shippingaddress}</h2>
                                <h2  className="ThongTinDonHangCanGiao-info">Tổng Tiền: {dongiao.totalprice} VNĐ (dong)</h2>
                            </div>
                        <div className="DSĐHCanGiao-btn">
                            <button className="XacNhanDonHangDaGiao" onClick={() => {handleGiaoHangThanhCong(dongiao.id)}}>Xác Nhận Đã Giao</button>
                            <button className="HuyDonHang" onClick={() => {handleHuyDonHang(dongiao.id)}}>Hủy Đơn Hàng</button>
                            <button className="XemChiTietDonHang-BGHbtn" onClick={()=>{handleXemHoaDonDonHangCanGiao(dongiao.id,dongiao.khachhang_id, dongiao.listdonhang_id)}}>Xem Chi Tiết</button>
                        </div>
                        </div>
                    </li>
                    ))}
                    
                
                </ul>
            </div>
            )}

            {/* Xem Chi Tiết Đơn Hàng */}
            {activeTab ==='XemChiTietDonHangCanGiao' &&(
                <div className="XemHoaDonMuaHang">
                        <h1 className="HoaDon-text">Hóa Đơn</h1>
                        <h2 className="HoaDon-info">Họ và Tên Khách Hàng: {khachHangFullName}</h2>
                        <h2 className="HoaDon-info">Số Điện Thoại Nhận Hàng : {hoaDonInfo.shippingphone}</h2>
                        <h2 className="HoaDon-info">Địa Chỉ Nhận Hàng: {hoaDonInfo.shippingaddress}</h2>
                        <table className="HoaDon-list">
                            <thead>
                                <tr>
                                    <th className="HoaDon-list-info-2">STT</th>
                                    <th className="HoaDon-list-info-1">Tên Sản Phẩm</th>
                                    <th className="HoaDon-list-info-2">Size</th>
                                    <th className="HoaDon-list-info-2">Phần Trăm Đá</th>
                                    <th className="HoaDon-list-info-2">Phần Trăm Đường</th>
                                    <th className="HoaDon-list-info-1">Topping</th>
                                    <th className="HoaDon-list-info-2">Số lượng</th>
                                    <th className="HoaDon-list-info-1">Thành Tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donHangInfo.map((product, index)=>(
                                    <tr key = {index}>
                                    <td>{index + 1}</td>
                                    <td>{productName[index]}</td>
                                    <td>{donHangInfo[index].size}</td>
                                    <td>{donHangInfo[index].ice}</td>
                                    <td>{donHangInfo[index].sugar}</td>
                                    <td>{donHangInfo[index].topping}</td>
                                    <td>{donHangInfo[index].quantity}</td>
                                    <td>{donHangInfo[index].price} VNĐ</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        <h2 className="HoaDon-info">Tổng Tiền : {hoaDonInfo.totalprice - hoaDonInfo.shippingcost} VNĐ (đồng)</h2>
                        <h2 className="HoaDon-info">Tiền Ship: {hoaDonInfo.shippingcost} VNĐ (đồng)</h2>
                        <h2 className="HoaDon-info">Tổng Tiền Đơn Hàng : {hoaDonInfo.totalprice} VNĐ (đồng)</h2>
                        <button 
                        className="BackToDSĐHbtn1" 
                        onClick={()=>{handleTabClick('QLĐG')}}>
                            Back
                        </button>
                    </div>
            )}

            {/* Xem Lịch Sử Giao Hàng */}
             {activeTab === "XemLichSuGiaoHang"&&(
                <div className="XemLichSuGiaoHang">
                <h1 className="LSGH-text">Lịch Sử Giao Hàng</h1>
                <ul className="LichSuGiaoHang-list">
                {lichSuGiaoHang.map((donhang, index) =>(
                    <li key={index}>
                        <div className="LichSuGiaoHang-list-elements">
                            <div className="LichSuGiaoHang-list-elements-info">
                                <h2>Mã Đơn Hàng: {donhang.id}</h2>
                                <h2>Ngày Giao Hàng: {formatDateTime(donhang.updatedAt)}</h2>
                                <h2>Tổng Tiền: {donhang.totalprice} VNĐ (dong)</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleXemHoaDonDonHangCanGiao(donhang.id,donhang.khachhang_id, donhang.listdonhang_id)}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
             )}   

        </div>
        
    )
}
export default TrangChuBenGiaoHang