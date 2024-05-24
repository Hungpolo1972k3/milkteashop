import React,{useState} from "react"
import { useNavigate } from 'react-router-dom';
import avatar from "./Avatar.png"
import "./TrangChuBenGiaoHang.css"
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
    return(
        <div className="TrangChuBenGiaoHang">
            <div>
                <div className="Heading">
                    <img  className="Img-logo" src={avatar} alt="Logo" />
                    <div className="Buttons">
                        <button className="Info" onClick={()=>handleTabClick('QLĐG')}>
                            Quản lý đơn giao
                        </button> 
                        <button className="Info" onClick={()=>handleTabClick('XemLichSuGiaoHang')}> 
                            Xem lịch sử giao hàng
                        </button> 
                </div>
                <div className="Icon">
                <i class="fa-solid fa-house" onClick={()=>{handleTabClick(null)}}></i>
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

            {activeTab === null && (
                <div className="DSĐHXacNhan">
                <h1 className="DSĐHXacNhan text">Danh Sách Đơn Hàng Xác Nhận</h1>
                <ul className="DSĐHXacNhan list">
                    <li>
                        <div className="DSĐHXacNhan element">
                            <div className="ThongTinDonHangXacNhan">
                                <h2 id="MaDH" className="ThongTinDonHangXacNhan-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangXacNhan-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangXacNhan-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangXacNhan-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                            <button className="XacNhanDonHangbtn">Xác Nhận</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐHXacNhan element">
                            <div className="ThongTinDonHangXacNhan">
                                <h2 id="MaDH" className="ThongTinDonHangXacNhan-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangXacNhan-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangXacNhan-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangXacNhan-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                            <button className="XacNhanDonHangbtn">Xác Nhận</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐHXacNhan element">
                            <div className="ThongTinDonHangXacNhan">
                                <h2 id="MaDH" className="ThongTinDonHangXacNhan-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangXacNhan-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangXacNhan-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangXacNhan-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                            <button className="XacNhanDonHangbtn">Xác Nhận</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐHXacNhan element">
                            <div className="ThongTinDonHangXacNhan">
                                <h2 id="MaDH" className="ThongTinDonHangXacNhan-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangXacNhan-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangXacNhan-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangXacNhan-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                            <button className="XacNhanDonHangbtn">Xác Nhận</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐHXacNhan element">
                            <div className="ThongTinDonHangXacNhan">
                                <h2 id="MaDH" className="ThongTinDonHangXacNhan-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangXacNhan-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangXacNhan-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangXacNhan-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                            <button className="XacNhanDonHangbtn">Xác Nhận</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐHXacNhan element">
                            <div className="ThongTinDonHangXacNhan">
                                <h2 id="MaDH" className="ThongTinDonHangXacNhan-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangXacNhan-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangXacNhan-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangXacNhan-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                            <button className="XacNhanDonHangbtn">Xác Nhận</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐHXacNhan element">
                            <div className="ThongTinDonHangXacNhan">
                                <h2 id="MaDH" className="ThongTinDonHangXacNhan-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangXacNhan-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangXacNhan-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangXacNhan-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                            <button className="XacNhanDonHangbtn">Xác Nhận</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐHXacNhan element">
                            <div className="ThongTinDonHangXacNhan">
                                <h2 id="MaDH" className="ThongTinDonHangXacNhan-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangXacNhan-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangXacNhan-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangXacNhan-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                            <button className="XacNhanDonHangbtn">Xác Nhận</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐHXacNhan element">
                            <div className="ThongTinDonHangXacNhan">
                                <h2 id="MaDH" className="ThongTinDonHangXacNhan-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangXacNhan-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangXacNhan-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangXacNhan-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                            <button className="XacNhanDonHangbtn">Xác Nhận</button>
                        </div>
                    </li>
                </ul>
            </div>
            )}
            {activeTab === 'QLĐG' && (
                <div className="DSĐHCanGiao">
                <h1 className="DSĐHCanGiao text">Danh Sách Đơn Hàng Chờ Giao</h1>
                <ul className="DSĐHCanGiao list">
                    <li>
                        <div className="DSĐHCanGiao element">
                            <div className="ThongTinDonHangCanGiao">
                                <h2 id="MaDH" className="ThongTinDonHangCanGiao-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangCanGiao-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangCanGiao-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangCanGiao-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                        <div className="DSĐHCanGiao-btn">
                            <button className="XacNhanDonHangDaGiao" >Xác Nhận Đã Giao</button>
                            <button className="HuyDonHang">Hủy Đơn Hàng</button>
                            <button className="XemChiTietDonHang-BGHbtn" onClick={()=>{handleTabClick('XemChiTietDonHangCanGiao')}}>Xem Chi Tiết</button>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐHCanGiao element">
                            <div className="ThongTinDonHangCanGiao">
                                <h2 id="MaDH" className="ThongTinDonHangCanGiao-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangCanGiao-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangCanGiao-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangCanGiao-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                        <div className="DSĐHCanGiao-btn">
                            <button className="XacNhanDonHangDaGiao" >Xác Nhận Đã Giao</button>
                            <button className="HuyDonHang">Hủy Đơn Hàng</button>
                            <button className="XemChiTietDonHang-BGHbtn" onClick={()=>{handleTabClick('XemChiTietDonHangCanGiao')}}>Xem Chi Tiết</button>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐHCanGiao element">
                            <div className="ThongTinDonHangCanGiao">
                                <h2 id="MaDH" className="ThongTinDonHangCanGiao-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangCanGiao-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangCanGiao-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangCanGiao-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                        <div className="DSĐHCanGiao-btn">
                            <button className="XacNhanDonHangDaGiao" >Xác Nhận Đã Giao</button>
                            <button className="HuyDonHang">Hủy Đơn Hàng</button>
                            <button className="XemChiTietDonHang-BGHbtn" onClick={()=>{handleTabClick('XemChiTietDonHangCanGiao')}}>Xem Chi Tiết</button>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐHCanGiao element">
                            <div className="ThongTinDonHangCanGiao">
                                <h2 id="MaDH" className="ThongTinDonHangCanGiao-info">Mã Đơn Hàng: {}</h2>
                                <h2 id="TenKH" className="ThongTinDonHangCanGiao-info">Tên Khách Hàng: {}</h2>
                                <h2 id="SĐTKH" className="ThongTinDonHangCanGiao-info">Số Điện Thoại: {} </h2>
                                <h2 id="DiaChiGiaoHang" className="ThongTinDonHangCanGiao-info">Địa chỉ Giao Hàng: {}</h2>
                            </div>
                        <div className="DSĐHCanGiao-btn">
                            <button className="XacNhanDonHangDaGiao" >Xác Nhận Đã Giao</button>
                            <button className="HuyDonHang">Hủy Đơn Hàng</button>
                            <button className="XemChiTietDonHang-BGHbtn" onClick={()=>{handleTabClick('XemChiTietDonHangCanGiao')}}>Xem Chi Tiết</button>
                        </div>
                        </div>
                    </li>
                
                </ul>
            </div>
            )}

            {/* Xem Chi Tiết Đơn Hàng */}
            {activeTab ==='XemChiTietDonHangCanGiao' &&(
                <div className="XemChiTietDonHangCanGiao">
                    <div className="ThongTinDonHang">
                        <h2 className="ĐH-info">Mã Đơn Hàng: {}</h2>
                        <h2 className="ĐH-info">Ngày Đặt Hàng: {} </h2>
                        <h2 className="ĐH-info">Thông tin Khách Hàng </h2>
                            <div className="ĐH-info-elements">
                                <h3 >Họ và tên: {}</h3>
                                <h3 >Số điện thoại: {}</h3>
                                <h3 >Địa Chỉ: {}</h3>
                            </div>    
                        <h2 className="ĐH-info">Địa chỉ Giao Hàng:{} </h2>
                        <h2 className="ĐH-info">Trạng thái Đơn Hàng: {} </h2>
                        <button 
                        className="XemHoaDonMuaHangbtn1" 
                        onClick={()=>{handleTabClick('XemHoaDonDonHangCanGiao')}}>
                            Xem hóa đơn
                        </button>
                        <button 
                        className="BackToDSĐHbtn" 
                        onClick={()=>{handleTabClick('QLĐG')}}>
                            Exit
                        </button>
                    </div>
                </div>
            )}

            {/* Xem Hóa Đơn Đơn Hàng Can Giao */}
            {activeTab ==='XemHoaDonDonHangCanGiao' && (
                <div className="HoaDon">
                    <h1 className="HoaDon-text">Hóa Đơn</h1>
                    <h2 className="HoaDon-info">Họ và Tên Khách Hàng: {}</h2>
                    <h2 className="HoaDon-info">Số Điện Thoại: {}</h2>
                    <h2 className="HoaDon-info">Địa Chỉ Nhận Hàng: {}</h2>
                    <table className="HoaDon-list">
                        <thead>
                            <tr>
                                <th className="HoaDon-list-info-2">STT</th>
                                <th className="HoaDon-list-info-1">Tên Sản Phẩm</th>
                                <th className="HoaDon-list-info-2">Size</th>
                                <th className="HoaDon-list-info-2">Phần Trăm Đá</th>
                                <th className="HoaDon-list-info-2">Phần Trăm Đường</th>
                                <th className="HoaDon-list-info-2">Số lượng</th>
                                <th className="HoaDon-list-info-2">Đơn Giá</th>
                                <th className="HoaDon-list-info-2">Thành Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Trà Sữa Trân Châu</td>
                                <td>L</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>1</td>
                                <td>30.000 VNĐ</td>
                                <td>30.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}%</td>
                                <td>{}%</td>
                                <td>{}</td>
                                <td>{}VNĐ</td>
                                <td>{}VNĐ</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}%</td>
                                <td>{}%</td>
                                <td>{}</td>
                                <td>{}VNĐ</td>
                                <td>{}VNĐ</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}%</td>
                                <td>{}%</td>
                                <td>{}</td>
                                <td>{}VNĐ</td>
                                <td>{}VNĐ</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}%</td>
                                <td>{}%</td>
                                <td>{}</td>
                                <td>{}VNĐ</td>
                                <td>{}VNĐ</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 className="HoaDon-info"> Tổng Tiền Đơn Hàng: {} </h2>
                    <h2 className="HoaDon-info">Tổng Ship: {}</h2>
                    <h2 className="HoaDon-info"> Tổng Tiền: {} </h2>
                    <button className="BackToQLDHbtn" onClick={()=>{handleTabClick('XemChiTietDonHangCanGiao')}}>Exit</button>
                </div>
                )}
            {/* Xem Lịch Sử Giao Hàng */}
             {activeTab=="XemLichSuGiaoHang"&&(
                <div className="XemLichSuGiaoHang">
                <h1 className="LSGH-text">Lịch Sử Giao Hàng</h1>
                <ul className="LichSuGiaoHang-list">
                    <li>
                        <div className="LichSuGiaoHang-list-elements">
                            <div className="LichSuGiaoHang-list-elements-info">
                                <h2>Mã Đơn Hàng: {}</h2>
                                <h2>Ngày Giao Hàng: {}</h2>
                                <h2>Tổng Tiền: {}</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleTabClick('XemChiTietDonHangDaGiao')}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                    <li>
                        <div className="LichSuGiaoHang-list-elements">
                            <div className="LichSuGiaoHang-list-elements-info">
                                <h2>Mã Đơn Hàng: {}</h2>
                                <h2>Ngày Giao Hàng: {}</h2>
                                <h2>Tổng Tiền: {}</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleTabClick('XemChiTietDonHangDaGiao')}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                    <li>
                        <div className="LichSuGiaoHang-list-elements">
                            <div className="LichSuGiaoHang-list-elements-info">
                                <h2>Mã Đơn Hàng: {}</h2>
                                <h2>Ngày Giao Hàng: {}</h2>
                                <h2>Tổng Tiền: {}</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleTabClick('XemChiTietDonHangDaGiao')}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                    <li>
                        <div className="LichSuGiaoHang-list-elements">
                            <div className="LichSuGiaoHang-list-elements-info">
                                <h2>Mã Đơn Hàng: {}</h2>
                                <h2>Ngày Giao Hàng: {}</h2>
                                <h2>Tổng Tiền: {}</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleTabClick('XemChiTietDonHangDaGiao')}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                    <li>
                        <div className="LichSuGiaoHang-list-elements">
                            <div className="LichSuGiaoHang-list-elements-info">
                                <h2>Mã Đơn Hàng: {}</h2>
                                <h2>Ngày Giao Hàng: {}</h2>
                                <h2>Tổng Tiền: {}</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleTabClick('XemChiTietDonHangDaGiao')}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                    <li>
                        <div className="LichSuGiaoHang-list-elements">
                            <div className="LichSuGiaoHang-list-elements-info">
                                <h2>Mã Đơn Hàng: {}</h2>
                                <h2>Ngày Giao Hàng: {}</h2>
                                <h2>Tổng Tiền: {}</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleTabClick('XemChiTietDonHangDaGiao')}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                </ul>
            </div>
             )}   
             {/* Xem Chi Tiết đơn hàng đã giao */}
             {activeTab ==='XemChiTietDonHangDaGiao' &&(
                <div className="XemChiTietDonHangDaGiao">
                    <div className="ThongTinDonHang">
                        <h2 className="ĐH-info">Mã Đơn Hàng: {}</h2>
                        <h2 className="ĐH-info">Ngày Đặt Hàng: {} </h2>
                        <h2 className="ĐH-info">Thông tin Khách Hàng </h2>
                            <div className="ĐH-info-elements">
                                <h3 >Họ và tên: {}</h3>
                                <h3 >Số điện thoại: {}</h3>
                                <h3 >Địa Chỉ: {}</h3>
                            </div>    
                        <h2 className="ĐH-info">Địa chỉ Giao Hàng:{} </h2>
                        <h2 className="ĐH-info">Trạng thái Đơn Hàng: {} </h2>
                        <button 
                        className="XemHoaDonMuaHangbtn1" 
                        onClick={()=>{handleTabClick('XemHoaDonDonHangDaGiao')}}>
                            Xem hóa đơn
                        </button>
                        <button 
                        className="BackToDSĐHbtn" 
                        onClick={()=>{handleTabClick('XemLichSuGiaoHang')}}>
                            Exit
                        </button>
                    </div>
                </div>
            )}
             {/* Xem Hóa Đơn Đơn Hàng Đã Giao*/}
            {activeTab ==='XemHoaDonDonHangDaGiao' && (
                <div className="HoaDon">
                    <h1 className="HoaDon-text">Hóa Đơn</h1>
                    <h2 className="HoaDon-info">Họ và Tên Khách Hàng: {}</h2>
                    <h2 className="HoaDon-info">Số Điện Thoại: {}</h2>
                    <h2 className="HoaDon-info">Địa Chỉ Nhận Hàng: {}</h2>
                    <table className="HoaDon-list">
                        <thead>
                            <tr>
                                <th className="HoaDon-list-info-2">STT</th>
                                <th className="HoaDon-list-info-1">Tên Sản Phẩm</th>
                                <th className="HoaDon-list-info-2">Size</th>
                                <th className="HoaDon-list-info-2">Phần Trăm Đá</th>
                                <th className="HoaDon-list-info-2">Phần Trăm Đường</th>
                                <th className="HoaDon-list-info-2">Số lượng</th>
                                <th className="HoaDon-list-info-2">Đơn Giá</th>
                                <th className="HoaDon-list-info-2">Thành Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Trà Sữa Trân Châu</td>
                                <td>L</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>1</td>
                                <td>30.000 VNĐ</td>
                                <td>30.000 VNĐ</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}%</td>
                                <td>{}%</td>
                                <td>{}</td>
                                <td>{}VNĐ</td>
                                <td>{}VNĐ</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}%</td>
                                <td>{}%</td>
                                <td>{}</td>
                                <td>{}VNĐ</td>
                                <td>{}VNĐ</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}%</td>
                                <td>{}%</td>
                                <td>{}</td>
                                <td>{}VNĐ</td>
                                <td>{}VNĐ</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>{}</td>
                                <td>{}</td>
                                <td>{}%</td>
                                <td>{}%</td>
                                <td>{}</td>
                                <td>{}VNĐ</td>
                                <td>{}VNĐ</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 className="HoaDon-info"> Tổng Tiền Đơn Hàng: {} </h2>
                    <h2 className="HoaDon-info">Tổng Ship: {}</h2>
                    <h2 className="HoaDon-info"> Tổng Tiền: {} </h2>
                    <button className="BackToQLDHbtn" onClick={()=>{handleTabClick('XemChiTietDonHangDaGiao')}}>Exit</button>
                </div>
                )}

        </div>
        
    )
}
export default TrangChuBenGiaoHang