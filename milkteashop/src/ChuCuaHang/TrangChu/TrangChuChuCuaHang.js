import React,{useState} from "react"
import { useNavigate } from 'react-router-dom';
import logo from "./Avatar.png"
import anhtrasua from "./TraSuaTranChauDuongDen.jpg"
import "./TrangChuChuCuaHang.css"

function TrangChuChuCuaHang(){

    const [activeTab, setActiveTab] = useState(null)
    const handleTabClick = (tabId) =>{
        setActiveTab(tabId);
    }
    const [lockShipper,setLockShipper] = useState(false)

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
        <div className="TrangChuChuCuaHang">
            <div className="Heading">
            <img  className="Img-logo" src={logo} alt="Logo" />
            <div className="Buttons">
                <button className="Info" onClick={() => handleTabClick('QLKH')}>
                    Quản lý khách hàng
                </button>
                <button className="Info" onClick={() => handleTabClick('QLBGH')}>
                    Quản lý bên giao hàng
                </button>
                <button className="Info" onClick={() => handleTabClick('QLSP')}>
                    Quản lý sản phẩm
                </button>
                <button className="Info" onClick={() => handleTabClick('QLĐH')}>
                    Quản lý đơn hàng
                </button> 
            </div>
            <div className="Icon">
            <i class="fa-solid fa-house" onClick={()=>handleTabClick(null)}></i>
            <i class="fa-solid fa-right-from-bracket" onClick={()=>handleLogout()}></i>
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
            {/* Trang Chủ Bán Hàng */}
            {activeTab === null &&(
                <div>
                    <h1 className="TrangChuBanHang">Cửa Hàng Bán Trà Sữa NTH MilkTea</h1>
                    <button className="AtShop" onClick={()=>{handleTabClick(null)}} >Tại Cửa Hàng</button>
                    <button className="Ship"onClick={()=>{handleTabClick('DanhSachDonHangShip')}} >Đơn Hàng Ship</button>
                    <ul className="DSĐH-AtShop-List">
                        <li>
                            <div className="DSĐH-AtShop">
                                <div className="DSĐH-AtShop-Info">
                                    <h2>Mã Đơn Hàng:{}</h2>
                                    <h2>Tổng Tiền:{}</h2>
                                    <h2>Họ Và Tên Khách Hàng:{}</h2>
                                    <h2>Số Điện Thoại:{}</h2>
                                </div>
                                <div>
                                    <button className="XemChiTietDonHangAtShopbtn" onClick={()=>{handleTabClick('XemChiTietDonHangAtShop')}} >Xem Chi Tiết</button>
                                    <button className="ThanhToanAtShop1">Thanh Toán</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="DSĐH-AtShop">
                                <div className="DSĐH-AtShop-Info">
                                    <h2>Mã Đơn Hàng:{}</h2>
                                    <h2>Tổng Tiền:{}</h2>
                                    <h2>Họ Và Tên Khách Hàng:{}</h2>
                                    <h2>Số Điện Thoại:{}</h2>
                                </div>
                                <div>
                                    <button className="XemChiTietDonHangAtShopbtn" onClick={()=>{handleTabClick('XemChiTietDonHangAtShop')}} >Xem Chi Tiết</button>
                                    <button className="ThanhToanAtShop1">Thanh Toán</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="DSĐH-AtShop">
                                <div className="DSĐH-AtShop-Info">
                                    <h2>Mã Đơn Hàng:{}</h2>
                                    <h2>Tổng Tiền:{}</h2>
                                    <h2>Họ Và Tên Khách Hàng:{}</h2>
                                    <h2>Số Điện Thoại:{}</h2>
                                </div>
                                <div>
                                    <button className="XemChiTietDonHangAtShopbtn" onClick={()=>{handleTabClick('XemChiTietDonHangAtShop')}} >Xem Chi Tiết</button>
                                    <button className="ThanhToanAtShop1">Thanh Toán</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="DSĐH-AtShop">
                                <div className="DSĐH-AtShop-Info">
                                    <h2>Mã Đơn Hàng:{}</h2>
                                    <h2>Tổng Tiền:{}</h2>
                                    <h2>Họ Và Tên Khách Hàng:{}</h2>
                                    <h2>Số Điện Thoại:{}</h2>
                                </div>
                                <div>
                                    <button className="XemChiTietDonHangAtShopbtn" onClick={()=>{handleTabClick('XemChiTietDonHangAtShop')}} >Xem Chi Tiết</button>
                                    <button className="ThanhToanAtShop1">Thanh Toán</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="DSĐH-AtShop">
                                <div className="DSĐH-AtShop-Info">
                                    <h2>Mã Đơn Hàng:{}</h2>
                                    <h2>Tổng Tiền:{}</h2>
                                    <h2>Họ Và Tên Khách Hàng:{}</h2>
                                    <h2>Số Điện Thoại:{}</h2>
                                </div>
                                <div>
                                    <button className="XemChiTietDonHangAtShopbtn" onClick={()=>{handleTabClick('XemChiTietDonHangAtShop')}} >Xem Chi Tiết</button>
                                    <button className="ThanhToanAtShop1">Thanh Toán</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            )}


            {/* Xem Chi Tiết Hóa Đơn Hàng Thanh Toán Tại Cửa Hàng */}
            {activeTab=== 'XemChiTietDonHangAtShop'&&(
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
                <h2 className="HoaDon-info">Tổng Tiền: {}</h2>
                <h2 className="HoaDon-info"> Hình thức thanh toán: </h2>
                <button className="ThanhToanAtShop2">Thanh Toán</button>
                <button className="BackToDSĐH-AtShopbtn" onClick={()=>{handleTabClick(null)}}>Exit</button>
            </div>
            )}

            {/* Danh Sách Đơn Hàng Ship Cần Xác Nhận */}
            {activeTab === 'DanhSachDonHangShip'&&(
                <div>
                <h1 className="TrangChuBanHang">Cửa Hàng Bán Trà Sữa NTH MilkTea</h1>
                <button className="AtShop" onClick={()=>{handleTabClick(null)}} >Tại Cửa Hàng</button>
                <button className="Ship"onClick={()=>{handleTabClick('DanhSachDonHangShip')}} >Đơn Hàng Ship</button>
                <ul className="DSĐH-Ship-List">
                    <li>
                        <div className="DSĐH-Ship">
                            <div className="DSĐH-Ship-Info">
                                <h2>Mã Đơn Hàng:{}</h2>
                                <h2>Tổng Tiền:{}</h2>
                                <h2>Họ Và Tên Khách Hàng:{}</h2>
                                <h2>Số Điện Thoại:{}</h2>
                                <h2> Địa Chỉ Giao Hàng:{}</h2>
                                <h2> Trạng Thái Đơn Hàng:{}</h2>
                            </div>
                            <div className="DSĐH-Ship-btn">
                                <div className="Shipper-LuaChon">
                                    <select 
                                        className="Shipper-LuaChon-Select">
                                            <option>Chọn Nhân Viên Giao Hàng</option>
                                            <option>Nguyễn Văn A</option>
                                            <option>Nguyễn Văn B</option>
                                            <option>Nguyễn Thị C</option>
                                            <option>{}</option>
                                    </select>
                                    <i className={lockShipper ? "fa-solid fa-lock" : "fa-solid fa-unlock"}
                                    onClick={()=>setLockShipper(!lockShipper)}></i>
                                </div>
                                <button className="XemChiTietDonHangShipbtn" onClick={()=>{handleTabClick('XemChiTietDonHangShip')}} >Xem Chi Tiết</button>
                                <button className="ThanhToanShip">Thanh Toán</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐH-Ship">
                            <div className="DSĐH-Ship-Info">
                                <h2>Mã Đơn Hàng:{}</h2>
                                <h2>Tổng Tiền:{}</h2>
                                <h2>Họ Và Tên Khách Hàng:{}</h2>
                                <h2>Số Điện Thoại:{}</h2>
                                <h2> Địa Chỉ Giao Hàng:{}</h2>
                                <h2> Trạng Thái Đơn Hàng:{}</h2>
                            </div>
                            <div className="DSĐH-Ship-btn">
                                <div className="Shipper-LuaChon">
                                    <select 
                                        className="Shipper-LuaChon-Select">
                                            <option>Chọn Nhân Viên Giao Hàng</option>
                                            <option>Nguyễn Văn A</option>
                                            <option>Nguyễn Văn B</option>
                                            <option>Nguyễn Thị C</option>
                                            <option>{}</option>
                                    </select>
                                    <i className={lockShipper ? "fa-solid fa-lock" : "fa-solid fa-unlock"}
                                    onClick={()=>setLockShipper(!lockShipper)}></i>
                                </div>
                                <button className="XemChiTietDonHangShipbtn" onClick={()=>{handleTabClick('XemChiTietDonHangShip')}} >Xem Chi Tiết</button>
                                <button className="ThanhToanShip">Thanh Toán</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="DSĐH-Ship">
                            <div className="DSĐH-Ship-Info">
                                <h2>Mã Đơn Hàng:{}</h2>
                                <h2>Tổng Tiền:{}</h2>
                                <h2>Họ Và Tên Khách Hàng:{}</h2>
                                <h2>Số Điện Thoại:{}</h2>
                                <h2> Địa Chỉ Giao Hàng:{}</h2>
                                <h2> Trạng Thái Đơn Hàng:{}</h2>
                            </div>
                            <div className="DSĐH-Ship-btn">
                                <div className="Shipper-LuaChon">
                                    <select 
                                        className="Shipper-LuaChon-Select">
                                            <option>Chọn Nhân Viên Giao Hàng</option>
                                            <option>Nguyễn Văn A</option>
                                            <option>Nguyễn Văn B</option>
                                            <option>Nguyễn Thị C</option>
                                            <option>{}</option>
                                    </select>
                                    <i className={lockShipper ? "fa-solid fa-lock" : "fa-solid fa-unlock"}
                                    onClick={()=>setLockShipper(!lockShipper)}></i>
                                </div>
                                <button className="XemChiTietDonHangShipbtn" onClick={()=>{handleTabClick('XemChiTietDonHangShip')}} >Xem Chi Tiết</button>
                                <button className="ThanhToanShip">Thanh Toán</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            )}
            {/* Xem Chi Tiết Hóa Đơn Hàng Đặt Ship */}
            {activeTab=== 'XemChiTietDonHangShip'&&(
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
                <h2 className="HoaDon-info">Tổng Tiền: {}</h2>
                <h2 className="HoaDon-info"> Hình thức thanh toán: </h2>
                <button className="ThanhToanAtShop2">Thanh Toán</button>
                <button className="BackToDSĐH-Shipbtn" onClick={()=>{handleTabClick('DanhSachDonHangShip')}}>Exit</button>
            </div>
            )}

            {/* Quản lý Khách Hàng */}
            {activeTab === 'QLKH' && (
                <div className="QLKH-div">
                    <h1 className="QLKH-text">Quản lý khách hàng</h1>
                    <div>
                        <h2 className="TKKH-text">Tìm Kiếm Khách Hàng</h2>
                        <input 
                            id="TimKiemKhachHang"
                            className="SearchBar"
                            name="TimKiemKhachHang"
                            placeholder="Họ và tên/Số Điện Thoại"
                        />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div>
                        <h2 className="KH-info">Họ Và Tên: {}</h2>
                        <h2 className="KH-info">Số Điện Thoại:{} </h2>
                        <h2 className="KH-info">Ngày Sinh: {} </h2>
                        <h2 className="KH-info">Địa Chỉ:{} </h2>
                        <h2 className="KH-info">Tên Tài Khoản: {} </h2>
                        <h2 className="KH-info">Mật Khẩu: {} </h2>
                    </div>
                    <div className="QLKHbtn">
                        <button className="XemLichSuMuaHangbtn" onClick={()=>{handleTabClick('XemLichSuMuaHang')}}>
                            Xem lịch sử mua hàng
                        </button>
                        <button className="XoaKHbtn">
                            Xóa Khách Hàng
                        </button>
                    </div> 
                    <button className="XemDanhSachKHbtn" onClick={()=> {handleTabClick('XemDanhSachKH')}}>
                        Xem Danh Sách Khách Hàng
                    </button>
                </div> 
            )}

            {/* Xem lịch sử mua hàng */}
            {activeTab === 'XemLichSuMuaHang' &&(
                <div className="XemLichSuMuaHang-CCH">
                    <h1 className="LSMH-text">Lịch Sử Mua Hàng</h1>
                    <ul className="LichSuMuaHang-list">
                        <li>
                            <div className="LichSuMuaHang-list-elements">
                                <div className="LichSuMuaHang-list-elements-info">
                                    <h2>Mã Đơn Hàng: {}</h2>
                                    <h2>Ngày Đặt Hàng: {}</h2>
                                    <h2>Hình Thức Thanh Toán: {}</h2>
                                    <h2>Tổng Tiền: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietDonHangbtn"
                                onClick={()=>{handleTabClick('XemChiTietDonHangDaMua')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="LichSuMuaHang-list-elements">
                                <div className="LichSuMuaHang-list-elements-info">
                                    <h2>Mã Đơn Hàng: {}</h2>
                                    <h2>Ngày Đặt Hàng: {}</h2>
                                    <h2>Hình Thức Thanh Toán: {}</h2>
                                    <h2>Tổng Tiền: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietDonHangbtn"
                                onClick={()=>{handleTabClick('XemChiTietDonHangDaMua')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="LichSuMuaHang-list-elements">
                                <div className="LichSuMuaHang-list-elements-info">
                                    <h2>Mã Đơn Hàng: {}</h2>
                                    <h2>Ngày Đặt Hàng: {}</h2>
                                    <h2>Hình Thức Thanh Toán: {}</h2>
                                    <h2>Tổng Tiền: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietDonHangbtn"
                                onClick={()=>{handleTabClick('XemChiTietDonHangDaMua')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="LichSuMuaHang-list-elements">
                                <div className="LichSuMuaHang-list-elements-info">
                                    <h2>Mã Đơn Hàng: {}</h2>
                                    <h2>Ngày Đặt Hàng: {}</h2>
                                    <h2>Hình Thức Thanh Toán: {}</h2>
                                    <h2>Tổng Tiền: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietDonHangbtn"
                                onClick={()=>{handleTabClick('XemChiTietDonHangDaMua')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="LichSuMuaHang-list-elements">
                                <div className="LichSuMuaHang-list-elements-info">
                                    <h2>Mã Đơn Hàng: {}</h2>
                                    <h2>Ngày Đặt Hàng: {}</h2>
                                    <h2>Hình Thức Thanh Toán: {}</h2>
                                    <h2>Tổng Tiền: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietDonHangbtn"
                                onClick={()=>{handleTabClick('XemChiTietDonHangDaMua')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                    </ul>
                </div>
            )}

            
            {/* Xem Danh Sách Khách Hàng */}
            {activeTab === 'XemDanhSachKH' &&(
                <div className="DanhSachKH">
                    <h1 className="DSKH-text">Danh Sách Khách Hàng</h1>
                    <ul className="DSKH-list">
                        <li>
                            <div className="DSKH-list-elements">
                                <div className="DSKH-list-elements-info">
                                    <h2>Tên Tài Khoản: {}</h2>
                                    <h2>Họ Và Tên Khách Hàng: {}</h2>
                                    <h2>Số Điện Thoại: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietKHbtn"
                                onClick={()=>{handleTabClick('XemChiTietKH')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="DSKH-list-elements">
                                <div className="DSKH-list-elements-info">
                                    <h2>Tên Tài Khoản: {}</h2>
                                    <h2>Họ Và Tên Khách Hàng: {}</h2>
                                    <h2>Số Điện Thoại: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietKHbtn"
                                onClick={()=>{handleTabClick('XemChiTietKH')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="DSKH-list-elements">
                                <div className="DSKH-list-elements-info">
                                    <h2>Tên Tài Khoản: {}</h2>
                                    <h2>Họ Và Tên Khách Hàng: {}</h2>
                                    <h2>Số Điện Thoại: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietKHbtn"
                                onClick={()=>{handleTabClick('XemChiTietKH')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="DSKH-list-elements">
                                <div className="DSKH-list-elements-info">
                                    <h2>Tên Tài Khoản: {}</h2>
                                    <h2>Họ Và Tên Khách Hàng: {}</h2>
                                    <h2>Số Điện Thoại: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietKHbtn"
                                onClick={()=>{handleTabClick('XemChiTietKH')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                    </ul>
                </div>
            )}

            {/* Xem Chi Tiết Đơn Hàng Đã Mua*/}
            {activeTab ==='XemChiTietDonHangDaMua' &&(
                <div className="XemChiTietDonHangDaMua-CCH">
                    <div className="ThongTinDonHang">
                        <h2 className="ĐH-info">Mã Đơn Hàng: {}</h2>
                        <h2 className="ĐH-info">Ngày Đặt Hàng: {} </h2>
                        <h2 className="ĐH-info">Thông tin Nhân Viên Giao Hàng </h2>
                            <div className="ĐH-info-elements">
                                <h3 >Họ và tên: {}</h3>
                                <h3 >Số điện thoại: {}</h3>
                                <h3 >Mã NVGH: {}</h3>
                            </div>    
                        <h2 className="ĐH-info">Địa chỉ Giao Hàng:{} </h2>
                        <h2 className="ĐH-info">Trạng thái Đơn Hàng: {} </h2>
                        <button 
                        className="XemHoaDonMuaHangbtn1" 
                        onClick={()=>{handleTabClick('XemHoaDonMuaHang-CCH')}}>
                            Xem hóa đơn
                        </button>
                        <button 
                        className="BackToDSĐHbtn" 
                        onClick={()=>{handleTabClick('XemLichSuMuaHang')}}>
                            Exit
                        </button>
                    </div>
                </div>
            )}
            {/* Xem Hóa Đơn Đơn Hàng Của KhachHang */}
            {activeTab ==='XemHoaDonMuaHang-CCH' && (
                <div className="XemHoaDonMuaHang-CCH">
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
                    <h2 className="HoaDon-info">Tổng Tiền Đơn Hàng: {}</h2>
                    <h2 className="HoaDon-info"> Hình thức thanh toán: </h2>
                    <h2 className="HoaDon-info">Tiền Ship: {}</h2>
                    <h2 className="HoaDon-info">Tổng Tiền: {}</h2>
                    <button className="BackToQLDHbtn" onClick={()=>{handleTabClick('XemChiTietDonHangDaMua')}}>Exit</button>
                </div>
                )}

            {/* Xem Chi Tiết Khách Hàng */}
            {activeTab ==='XemChiTietKH' && (
                <div className="XemChiTietKH">
                    <h2 className="ThongTinKH-info">Họ Và Tên: {}</h2>
                    <h2 className="ThongTinKH-info">Số Điện Thoại:{} </h2>
                    <h2 className="ThongTinKH-info">Ngày Sinh: {} </h2>
                    <h2 className="ThongTinKH-info">Địa Chỉ:{} </h2>
                    <h2 className="ThongTinKH-info">Tên Tài Khoản: {} </h2>
                    <h2 className="ThongTinKH-info">Mật Khẩu: {} </h2>
                    <button 
                    className="BackToDSKHbtn"
                    onClick={()=>{handleTabClick('XemDanhSachKH')}}
                    >Exit</button>
                </div>
            )}

            {/* Quản lý bên giao hàng */}
            { activeTab === 'QLBGH' && (
                <div>
                    <h1 className="QLBGH-text">Quản lý bên giao hàng</h1>
                    <div>
                        <h2 className="TKNVGH-text">Tìm Kiếm Nhân Viên Giao Hàng</h2>
                        <input 
                            id="TimKiemBenGiaoHang"
                            className="SearchBar"
                            name="TimKiemBenGiaoHang"
                            placeholder="Họ và tên/Số Điện Thoại/Mã Nhân Viên"
                        />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div>
                        <h2 className="NVGH-info">Họ Và Tên: {}</h2>
                        <h2 className="NVGH-info">Số Điện Thoại:{} </h2>
                        <h2 className="NVGH-info">Ngày Sinh: {} </h2>
                        <h2 className="NVGH-info">Địa chỉ:{} </h2>
                        <h2 className="NVGH-info">Tên tài khoản: {} </h2>
                        <h2 className="NVGH-info">Mã Nhân Viên: {} </h2>
                        <button className="XemLichSuGiaoHangbtn" onClick={()=> handleTabClick('XemLichSuGiaoHang')}>
                            Xem lịch sử giao hàng
                        </button>
                    </div>
                    <div className="XoaThemNVGH">
                        <button className="XoaNVGHbtn">
                            Xóa NVGH
                        </button>
                        <button className="ThemNVGHbtn" onClick={() => handleTabClick('ThemNVGH')}>
                            Thêm NVGH
                        </button>
                        <button className="ChinhSuaNVGHbtn" onClick={() => handleTabClick('ChinhSuaNVGH')}>
                            Chỉnh Sửa NVGH
                        </button>
                        <button className="XemDSNVGHbtn" onClick={() => handleTabClick('XemDSNVGH')}>
                            Danh Sách NVGH
                        </button>
                    </div>
                </div>
            )}

            {/* Xem Lịch Sử Giao Hàng */}
            {activeTab === 'XemLichSuGiaoHang' && (
                <div className="LichSuGiaoHang">
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

            {/* Xem Chi Tiết Đơn Hàng đã giao */}
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
                        onClick={()=>{handleTabClick('XemHoaDonDaGiao-CCH')}}>
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

            {/* Xem Hóa Đơn Đơn Hàng Của KhachHang */}
            {activeTab ==='XemHoaDonDaGiao-CCH' && (
                <div className="XemHoaDonMuaHang-CCH">
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
                    <h2 className="HoaDon-info">Tổng Tiền Đơn Hàng: {}</h2>
                    <h2 className="HoaDon-info"> Hình thức thanh toán: </h2>
                    <h2 className="HoaDon-info">Tiền Ship: {}</h2>
                    <h2 className="HoaDon-info">Tổng Tiền: {}</h2>
                    <button className="BackToQLDHbtn" onClick={()=>{handleTabClick('XemChiTietDonHangDaGiao')}}>Exit</button>
                </div>
                )}


            {/* Thêm NVGH */}
            {activeTab === 'ThemNVGH' && (
                <div>
                   <h1 className="ThemNVGH-text">Thêm Nhân Viên Giao Hàng</h1>
                    <form>
                         <div>
                             <label htmlFor='NVFullname' className='nvform-label'>
                                 Họ và tên
                            </label>
                            <input
                                id='NVFullname'
                                className='nvform-text'
                                type='text'
                                name='NVFullname'
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <label htmlFor='NVPhonenumber' className='nvform-label'>
                                Số điện thoại
                            </label>
                            <input
                                id='NVPhonenumber'
                                className='nvform-text'
                                type='text'
                                name='NVPhonenumber'
                                placeholder="Phone Number"
                            />
                        </div>
                        <div>
                            <label htmlFor='NVBirthday' className='nvform-label'>
                                Ngày sinh
                            </label>
                            <input
                                id='NVBirthday'
                                className='nvform-text'
                                type='date'
                                name='NVBirthday'
                                placeholder="Birthday"
                            />
                        </div>
                        <div>
                            <label htmlFor='NVAddress' className='nvform-label'>
                                Địa chỉ
                            </label>
                            <input
                                id='NVAddress'
                                className='nvform-text'
                                type='text'
                                name='NVAddress'
                                placeholder="Address"
                            />
                        </div>
                        <div>
                            <label htmlFor='Username' className='nvform-label'>
                                Tên Tài Khoản
                            </label>
                            <input
                                id='NVUsername'
                                className='nvform-text'
                                type='text'
                                name='NVUsername'
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor='NVPassword' className='nvform-label'>
                                Mật Khẩu
                            </label>
                            <input
                                id='NVPassword'
                                className='nvform-text'
                                type='text'
                                name='NVPassword'
                                placeholder="Password"
                            />
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <div>
                            <label htmlFor='ConfirmPassword' className='nvform-label'>
                                Xác nhận Mật Khẩu
                            </label>
                            <input
                                id='NVConfirmPassword'
                                className='nvform-text'
                                type='text'
                                name='NVConfirmPassword'
                                placeholder="Confirm Password"
                            />
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <div>
                            <label htmlFor='MaNVGH' className='nvform-label'>
                                Mã Nhân Viên
                            </label>
                            <input
                                id='MaNVGH'
                                className='nvform-text'
                                type='text'
                                name='MaNVGH'
                                placeholder="Mã Nhân Viên"
                            />
                        </div>
                        <button className="ConfirmThemNVGH">
                            Xác Nhận
                        </button>
                    </form>
                </div>
            )}
            
            {/* Chỉnh Sửa NVGH */}
            {activeTab === 'ChinhSuaNVGH' && (
                <div>
                    <div>
                        <div>
                            <h2 className="XemChiTietNVGH-info">Họ Và Tên: {}</h2>
                        </div>
                        <h2 className="XemChiTietNVGH-info">Số Điện Thoại:{} </h2>
                        <h2 className="XemChiTietNVGH-info">Ngày Sinh: {} </h2>
                        <h2 className="XemChiTietNVGH-info">Địa chỉ:{} </h2>
                        <h2 className="XemChiTietNVGH-info">Tên tài khoản: {} </h2>
                        <h2 className="XemChiTietNVGH-info">Mã Nhân Viên: {} </h2>
                        <button className="ConfirmChinhSuaNVGHbtn" >
                            Xác Nhận 
                        </button>
                        <button 
                        className="BackToQLBGHbtn" 
                        onClick={()=>{handleTabClick('QLBGH')}}>
                            Exit
                        </button>
                    </div>
                    
                </div>
            )}

            {/* Xem Danh Sách NVGH */}
            {activeTab === 'XemDSNVGH' && (
                <div className="DanhSachNVGH">
                    <h1 className="DSNVGH-text">Danh Sách Nhân Viên Giao Hàng</h1>
                    <ul className="DSNVGH-list">
                        <li>
                            <div className="DSNVGH-list-elements">
                                <div className="DSNVGH-list-elements-info">
                                    <h2>Mã NVGH: {}</h2>
                                    <h2>Họ và Tên: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietNVGHbtn"
                                onClick={()=>{handleTabClick('XemChiTietNVGH')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="DSNVGH-list-elements">
                                <div className="DSNVGH-list-elements-info">
                                    <h2>Mã NVGH: {}</h2>
                                    <h2>Họ và Tên: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietNVGHbtn"
                                onClick={()=>{handleTabClick('XemChiTietNVGH')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="DSNVGH-list-elements">
                                <div className="DSNVGH-list-elements-info">
                                    <h2>Mã NVGH: {}</h2>
                                    <h2>Họ và Tên: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietNVGHbtn"
                                onClick={()=>{handleTabClick('XemChiTietNVGH')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="DSNVGH-list-elements">
                                <div className="DSNVGH-list-elements-info">
                                    <h2>Mã NVGH: {}</h2>
                                    <h2>Họ và Tên: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietNVGHbtn"
                                onClick={()=>{handleTabClick('XemChiTietNVGH')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="DSNVGH-list-elements">
                                <div className="DSNVGH-list-elements-info">
                                    <h2>Mã NVGH: {}</h2>
                                    <h2>Họ và Tên: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietNVGHbtn"
                                onClick={()=>{handleTabClick('XemChiTietNVGH')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="DSNVGH-list-elements">
                                <div className="DSNVGH-list-elements-info">
                                    <h2>Mã NVGH: {}</h2>
                                    <h2>Họ và Tên: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietNVGHbtn"
                                onClick={()=>{handleTabClick('XemChiTietNVGH')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        </ul>
                    </div>
            )}

            {/* Xem Chi Tiết NVGH */}
            {activeTab === 'XemChiTietNVGH' && (
                <div>
                    <div>
                        <h2 className="XemChiTietNVGH-info">Họ Và Tên: {}</h2>
                        <h2 className="XemChiTietNVGH-info">Số Điện Thoại:{} </h2>
                        <h2 className="XemChiTietNVGH-info">Ngày Sinh: {} </h2>
                        <h2 className="XemChiTietNVGH-info">Địa chỉ:{} </h2>
                        <h2 className="XemChiTietNVGH-info">Tên tài khoản: {} </h2>
                        <h2 className="XemChiTietNVGH-info">Mã Nhân Viên: {} </h2>
                        <button className="XemLichSuGiaoHangbtn" onClick={()=> handleTabClick('XemLichSuGiaoHang')}>
                            Xem lịch sử giao hàng
                        </button>
                        <button 
                        className="BackToDSNVGHbtn" 
                        onClick={()=>{handleTabClick('XemDSNVGH')}}>
                            Exit
                        </button>
                    </div>
                    
                </div>
            )}

            {/* Quản lý sản phẩm */}
            {activeTab === 'QLSP' && (
                <div>
                    <h1 className="QLSP-text">Quản lý Sản Phẩm</h1>
                    <div>
                        <h2 className="TKSP-text">Tìm Kiếm Sản Phẩm</h2>
                        <input 
                            id="TimKiemSanPham"
                            className="SearchBar"
                            name="TimKiemSanPham"
                            placeholder="Tên sản phẩm"
                        />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="SP">
                        <img src={anhtrasua} className="SP-img"/>
                        <div className="SP-info">
                                <h1 id="TenSP" className="SP-text-name" >Tên Sản Phẩm: {}</h1>
                                <h2 id="GiaSP" className="SP-text" >Giá tiền: {}</h2>
                                <h2 id="SizeSP" className="SP-text">Size: M, L, XL</h2>
                                <h2 id="PhanTramDuongSP" className="SP-text">Phần Trăm Đường: 50%, 70%, 100% </h2>
                                <h2 id="PhanTramDaSP" className="SP-text">Phần trăm đá: 0%, 50%, 100%</h2>
                                <h2 id="ToppingSP" className="SP-text">Các loại Topping: Trân châu trắng, Trân châu đen, Trân châu sợi, Thạch Đào,...</h2>
                        </div>
                    </div>
                    <button className="XemMenubtn" onClick={()=>{handleTabClick('XemMenu')}}>
                            Xem MENU
                    </button>
                    <div>
                        <button className="XoaSPbtn">
                            Xóa Sản Phẩm
                        </button>
                        <button 
                            className="ThemSPbtn" 
                            onClick={()=>{handleTabClick('ThemSP')}}
                        >Thêm Sản Phẩm
                        </button>
                        <button 
                            className="ChinhSuaSanPham1btn"
                            onClick={()=>{handleTabClick('ChinhSuaSanPham')}}
                        >Chỉnh Sửa Sản Phẩm</button>
                    </div>
                </div>
            )}

            {/* Xem Menu cửa hàng */}
            {activeTab === 'XemMenu' &&(
                <div className="MenuCuaHang">
                    <h1 className="MenuCuaHang-text">MENU CỬA HÀNG</h1>
                    <ul className="MenuCuaHang-list">
                        <li>
                            <div className="MenuCuaHang-list-elements">
                                <img src={anhtrasua} className="MenuCuaHang-SP-img" />
                                <div className="MenuCuaHang-SP-info">
                                    <h1 id="TenSP" className="MenuCuaHang-text-name" >Tên Sản Phẩm: {}</h1>
                                    <h2 id="GiaSP" className="MenuCuaHang-SP-text" >Giá tiền: {}</h2>
                                    <h2 id="SizeSP" className="MenuCuaHang-SP-text">Size: M, L, XL</h2>
                                    <h2 id="PhanTramDuongSP" className="MenuCuaHang-SP-text">Phần Trăm Đường: 50%, 70%, 100% </h2>
                                    <h2 id="PhanTramDaSP" className="MenuCuaHang-SP-text">Phần trăm đá: 0%, 50%, 100%</h2>
                                    <h2 id="ToppingSP" className="MenuCuaHang-SP-text">Các loại Topping: Trân châu trắng, Trân châu đen, Trân châu sợi, Thạch Đào,...</h2>
                                </div>
                                <button 
                                    className="ChinhSuaSanPham2btn"
                                    onClick={()=>{handleTabClick('ChinhSuaSanPham')}}
                                >Chỉnh Sửa</button>
                            </div>
                        </li>
                        <li>
                            <div className="MenuCuaHang-list-elements">
                                <img src={anhtrasua} className="MenuCuaHang-SP-img" />
                                <div className="MenuCuaHang-SP-info">
                                    <h1 id="TenSP" className="MenuCuaHang-text-name" >Tên Sản Phẩm: {}</h1>
                                    <h2 id="GiaSP" className="MenuCuaHang-SP-text" >Giá tiền: {}</h2>
                                    <h2 id="SizeSP" className="MenuCuaHang-SP-text">Size: M, L, XL</h2>
                                    <h2 id="PhanTramDuongSP" className="MenuCuaHang-SP-text">Phần Trăm Đường: 50%, 70%, 100% </h2>
                                    <h2 id="PhanTramDaSP" className="MenuCuaHang-SP-text">Phần trăm đá: 0%, 50%, 100%</h2>
                                    <h2 id="ToppingSP" className="MenuCuaHang-SP-text">Các loại Topping: Trân châu trắng, Trân châu đen, Trân châu sợi, Thạch Đào,...</h2>
                                </div>
                                <button 
                                    className="ChinhSuaSanPham2btn"
                                    onClick={()=>{handleTabClick('ChinhSuaSanPham')}}
                                >Chỉnh Sửa</button>
                            </div>
                        </li>
                        <li>
                            <div className="MenuCuaHang-list-elements">
                                <img src={anhtrasua} className="MenuCuaHang-SP-img" />
                                <div className="MenuCuaHang-SP-info">
                                    <h1 id="TenSP" className="MenuCuaHang-text-name" >Tên Sản Phẩm: {}</h1>
                                    <h2 id="GiaSP" className="MenuCuaHang-SP-text" >Giá tiền: {}</h2>
                                    <h2 id="SizeSP" className="MenuCuaHang-SP-text">Size: M, L, XL</h2>
                                    <h2 id="PhanTramDuongSP" className="MenuCuaHang-SP-text">Phần Trăm Đường: 50%, 70%, 100% </h2>
                                    <h2 id="PhanTramDaSP" className="MenuCuaHang-SP-text">Phần trăm đá: 0%, 50%, 100%</h2>
                                    <h2 id="ToppingSP" className="MenuCuaHang-SP-text">Các loại Topping: Trân châu trắng, Trân châu đen, Trân châu sợi, Thạch Đào,...</h2>
                                </div>
                                <button 
                                    className="ChinhSuaSanPham2btn"
                                    onClick={()=>{handleTabClick('ChinhSuaSanPham')}}
                                >Chỉnh Sửa</button>
                            </div>
                        </li>
                    </ul>
                </div>
            )}

            {/* Chỉnh sửa sản phẩm */}
            {activeTab === 'ChinhSuaSanPham' && (
                <div>
                    <h1 className="ChinhSuaSanPham-text">Chỉnh Sửa Sản Phẩm</h1>
                    <div className="SP">
                        <div className="SP-upload-img">
                                <img src={anhtrasua} className="SP-img" />
                                <i class="fa-solid fa-upload"></i>
                                <span className="fa-upload-decribe">Upload Product Imagine</span>
                            </div>
                        <div className="SP-info">
                                <div id="TenSP" className="SP-text-name">
                                    <h1 id="TenSP" className="SP-text-name" >Tên Sản Phẩm: {}</h1>
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </div>
                                <h2 id="GiaSP" className="SP-text" >Giá tiền: {}</h2>
                                <h2 id="SizeSP" className="SP-text">Size: M, L, XL</h2>
                                <h2 id="PhanTramDuongSP" className="SP-text">Phần Trăm Đường: 50%, 70%, 100% </h2>
                                <h2 id="PhanTramDaSP" className="SP-text">Phần trăm đá: 0%, 50%, 100%</h2>
                                <h2 id="ToppingSP" className="SP-text">Các loại Topping: Trân châu trắng, Trân châu đen, Kem Cheese</h2>
                        </div>
                    </div>
                    <button className="XacNhanChinhSuaSPbtn">
                            Xác Nhận
                    </button>
                    <button className="XoaSanPhambtn">
                            Xóa Sản Phẩm
                    </button>
                    <button 
                        className="BackToMenubtn"
                        onClick={()=>{handleTabClick('QLSP')}}    
                    >Exit
                    </button>
                </div>
            )}

            {/* Thêm Sản Phẩm */}
                {activeTab ==='ThemSP' &&(
                    <div className="ThemSP">
                        <h1 className="ThemSP-text">Thêm Sản Phẩm</h1>
                        <div className="ThemSP-info">
                            <div className="Upload-SP-img">
                                <i class="fa-solid fa-cloud-arrow-up"></i>
                                <label className="Upload-SP-img text">Upload Imagine</label>
                            </div>
                                <div className="ThemSP-info-form">
                                    <div id="TenSP">
                                        <h1>Tên Sản Phẩm</h1>
                                        <input 
                                            id="TenSPMoi"
                                            className="TenSPMoi"
                                            name="TenSPMoi"
                                            placeholder="Nhập Tên Sản Phẩm"
                                            />
                                    <div id="TenSP" className="DienGiaSanPham">
                                        <h2>Giá tiền: {}</h2>
                                        <input 
                                            id="GiaSPMoi"
                                            className="GiaSPMoi"
                                            name="GiaSPMoi"
                                            placeholder="VNĐ"
                                    />       
                                    </div>
                                        <h2 id="SizeSP" className="SP-text">Size: M, L, XL</h2>
                                        <h2 id="PhanTramDuongSP" className="SP-text">Phần Trăm Đường: 50%, 70%, 100% </h2>
                                        <h2 id="PhanTramDaSP" className="SP-text">Phần trăm đá: 0%, 50%, 100%</h2>
                                        <h2 id="ToppingSP" className="SP-text">Các loại Topping: Trân châu trắng, Trân châu đen, Kem Cheese</h2>
                                    </div>
                            </div>
                        </div>
                        <button className="Confirm-ThemSP">Cập Nhật</button>
                    </div>
                )}

            {/* Quản lý đơn hàng */}
            {activeTab === 'QLĐH' && (
                <div className="QLĐH">
                    <h1 className="QLĐH-text">Quản lý Đơn Hàng</h1>
                    <div>
                        <input 
                            id="TimKiemDonHang"
                            className="QLĐH-SearchBar"
                            name="TimKiemKDonHang"
                            placeholder="Họ và tên/Số Điện Thoại/Mã Đơn Hàng"
                        />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="ThongTinDonHang">
                        <h2 className="ĐH-info">Mã Đơn Hàng: {}</h2>
                        <h2 className="ĐH-info">Ngày Đặt Hàng: {} </h2>
                        <h2 className="ĐH-info">Thông tin Nhân Viên Giao Hàng </h2>
                            <div className="ĐH-info-elements">
                                <h3 >Họ và tên: {}</h3>
                                <h3 >Số điện thoại: {}</h3>
                                <h3 >Mã NVGH: {}</h3>
                            </div>    
                        <h2 className="ĐH-info">Địa chỉ Giao Hàng:{} </h2>
                        <h2 className="ĐH-info">Trạng thái Đơn Hàng: {} </h2>
                        <button className="XemHoaDonDonHangbtn" onClick={()=>{handleTabClick('XemHoaDonDonHang')}}>
                            Xem hóa đơn
                        </button>
                        <button className="XemDanhSachDonHangbtn" onClick={()=>{handleTabClick('XemDanhSachDonHang')}}>
                            Danh Sách Đơn Hàng
                        </button>
                    </div>
                </div>
            )}


            {/* Xem Hóa Đơn Đon Hàng*/}
            {activeTab ==='XemHoaDonDonHang' && (
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
                    <h2 className="HoaDon-info">Tổng Tiền Đơn Hàng: {}</h2>
                    <h2 className="HoaDon-info"> Hình thức thanh toán: </h2>
                    <h2 className="HoaDon-info">Tiền Ship: {}</h2>
                    <h2 className="HoaDon-info">Tổng Tiền: {}</h2>
                    <button className="BackToQLDHbtn" onClick={()=>{handleTabClick('QLĐH')}}>Exit</button>
                </div>
                )}

        {/* Xem Danh Sách Đơn Hàng */}
        {activeTab === 'XemDanhSachDonHang' && (
            <div className="XemDanhSachDonHang">
                <h1 className="DSDH-text">Danh Sách Đơn Hàng</h1>
                <div className="XemDanhSachDonHang-Filter">
                    <input 
                        className="XemDanhSachDonHang-Filter-By-Day"
                        type="date"/>
                    <i class="fa-solid fa-filter"></i>
                </div>   
                <ul className="DSDH-list">
                    <li>
                        <div className="DSDH-list-elements">
                            <div className="DSDH-list-elements-info">
                                <h2>Mã Đơn Hàng: {}</h2>
                                <h2>Ngày Giao Hàng: {}</h2>
                                <h2>Tổng Tiền: {}</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleTabClick('XemChiTietDonHang')}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSDH-list-elements">
                            <div className="DSDH-list-elements-info">
                                <h2>Mã Đơn Hàng: {}</h2>
                                <h2>Ngày Giao Hàng: {}</h2>
                                <h2>Tổng Tiền: {}</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleTabClick('XemChiTietDonHang')}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSDH-list-elements">
                            <div className="DSDH-list-elements-info">
                                <h2>Mã Đơn Hàng: {}</h2>
                                <h2>Ngày Giao Hàng: {}</h2>
                                <h2>Tổng Tiền: {}</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleTabClick('XemChiTietDonHang')}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSDH-list-elements">
                            <div className="DSDH-list-elements-info">
                                <h2>Mã Đơn Hàng: {}</h2>
                                <h2>Ngày Giao Hàng: {}</h2>
                                <h2>Tổng Tiền: {}</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleTabClick('XemChiTietDonHang')}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                    <li>
                        <div className="DSDH-list-elements">
                            <div className="DSDH-list-elements-info">
                                <h2>Mã Đơn Hàng: {}</h2>
                                <h2>Ngày Giao Hàng: {}</h2>
                                <h2>Tổng Tiền: {}</h2>
                            </div>
                            <button 
                            className="XemChiTietDonHangbtn"
                            onClick={()=>{handleTabClick('XemChiTietDonHang')}}
                            >Xem chi tiết</button>
                        </div>
                    </li>
                </ul>
            </div>
        )}

        {/* Xem Chi Tiết Đơn Hàng */}
        {activeTab ==='XemChiTietDonHang' &&(
                <div className="XemChiTietDonHang">
                    <div className="ThongTinDonHang">
                        <h2 className="ĐH-info">Mã Đơn Hàng: {}</h2>
                        <h2 className="ĐH-info">Ngày Đặt Hàng: {} </h2>
                        <h2 className="ĐH-info">Thông tin Khách Hàng </h2>
                            <div className="ĐH-info-elements">
                                <h3 >Họ và tên: {}</h3>
                                <h3 >Số điện thoại: {}</h3>
                                <h3 >Địa Chỉ: {}</h3>
                            </div>    
                        <h2 className="ĐH-info">Hình thức Thanh Toán: {}</h2>
                        <h2 className="ĐH-info">Thông tin Nhân Viên Giao Hàng </h2>
                            <div className="ĐH-info-elements">
                                <h3 >Họ và tên: {}</h3>
                                <h3 >Số điện thoại: {}</h3>
                                <h3 >Mã NVGH: {}</h3>
                            </div>     
                        <h2 className="ĐH-info">Địa chỉ Giao Hàng:{} </h2>
                        <h2 className="ĐH-info">Trạng thái Đơn Hàng: {} </h2>
                        <button 
                        className="XemHoaDonMuaHangbtn1" 
                        onClick={()=>{handleTabClick('XemHoaDonDonHang')}}>
                            Xem hóa đơn
                        </button>
                        <button 
                        className="BackToDSĐHbtn" 
                        onClick={()=>{handleTabClick('XemDanhSachDonHang')}}>
                            Exit
                        </button>
                    </div>
                </div>
            )}
        </div>    
    )
}

export default TrangChuChuCuaHang