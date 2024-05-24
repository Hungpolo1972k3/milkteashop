import {React, useState} from "react"
import { useNavigate } from 'react-router-dom';
import "./TrangChuKhachHang.css"
import logo from "./Avatar.png"
import Photo from "./Photo.png"

function TrangChuKhachHang() {
    const [activeTab, setActiveTab]=useState(null)
    const handleTabClick = (tabID)=>{
        setActiveTab(tabID)
     }

     const [count, setCount] = useState(1); // Giá trị mặc định là 1

     const increaseCount = () => {
       setCount(count + 1);
     };
   
     const decreaseCount = () => {
       if (count > 1) {
         setCount(count - 1);
       }
    };

    const districts = ['Ba Đình','Hoàn Kiếm','Tây Hồ','Long Biên','Cầu Giấy','Đống Đa','Hai Bà Trưng','Hoàng Mai','Thanh Xuân','Nam Từ Liêm','Bắc Từ Liêm','Hà Đông','Sơn Tây','Ba Vì','Phúc Thọ','Đan Phượng','Hoài Đức','Thanh Trì','Gia Lâm','Đông Anh','Sóc Sơn','Thanh Oai','Mê Linh'];

    const [paymentMethod, setPaymentMethod] = useState('Tại Cửa Hàng');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

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
        <div>
            <div className="KHPage-Bar">
                <img className="Logo" src={logo}/>
                <i class="fa-solid fa-house" onClick={()=>handleTabClick(null)}></i>
                <i class="fa-solid fa-user" onClick={()=>handleTabClick('XemThongTinKhachHang')}></i>
                <i class="fa-solid fa-cart-shopping" onClick={()=>handleTabClick('XemGioHang')}></i>
                <i class="fa-solid fa-truck-fast" onClick={()=>handleTabClick('XemDSDonHangChoGiao')} ></i>
                <i class="fa-solid fa-right-from-bracket" onClick={()=>handleLogout()}></i>
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
                <div className="KHPage">
                <div className="KHPage-Menu">
                    <h1 className="KHPage-Menu-Title">MENU CỬA HÀNG</h1>
                    <ul className="KHPage-Menu-List">
                        <li>
                            <div className="KHPage-Menu-Products">
                                <img className="Products-Photo" src={logo}/>
                                <div className="KHPage-Menu-Products-Info">
                                    <h2>Tên Sản Phẩm: {}</h2>
                                    <h3>Giá tiền: {}</h3>
                                    <button className="KHPage-Menu-Products-Addbtn">Mua Ngay</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="KHPage-Menu-Products">
                                <img className="Products-Photo" src={logo}/>
                                <div className="KHPage-Menu-Products-Info">
                                    <h2>Tên Sản Phẩm: {}</h2>
                                    <h3>Giá tiền: {}</h3>
                                    <button className="KHPage-Menu-Products-Addbtn">Mua Ngay</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="KHPage-Menu-Products">
                                <img className="Products-Photo" src={logo}/>
                                <div className="KHPage-Menu-Products-Info">
                                    <h2>Tên Sản Phẩm: {}</h2>
                                    <h3>Giá tiền: {}</h3>
                                    <button className="KHPage-Menu-Products-Addbtn">Mua Ngay</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="KHPage-Menu-Products">
                                <img className="Products-Photo" src={logo}/>
                                <div className="KHPage-Menu-Products-Info">
                                    <h2>Tên Sản Phẩm: {}</h2>
                                    <h3>Giá tiền: {}</h3>
                                    <button className="KHPage-Menu-Products-Addbtn">Mua Ngay</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="KHPage-Menu-Products">
                                <img className="Products-Photo" src={logo}/>
                                <div className="KHPage-Menu-Products-Info">
                                    <h2>Tên Sản Phẩm: {}</h2>
                                    <h3>Giá tiền: {}</h3>
                                    <button className="KHPage-Menu-Products-Addbtn">Mua Ngay</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="KHPage-Menu-Products">
                                <img className="Products-Photo" src={logo}/>
                                <div className="KHPage-Menu-Products-Info">
                                    <h2>Tên Sản Phẩm: {}</h2>
                                    <h3>Giá tiền: {}</h3>
                                    <button className="KHPage-Menu-Products-Addbtn">Mua Ngay</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="KHPage-Menu-Products">
                                <img className="Products-Photo" src={logo}/>
                                <div className="KHPage-Menu-Products-Info">
                                    <h2>Tên Sản Phẩm: {}</h2>
                                    <h3>Giá tiền: {}</h3>
                                    <button className="KHPage-Menu-Products-Addbtn">Mua Ngay</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="KHPage-TimKiemSP">
                    <h1 className="KHPage-TimKiemSP-Title">TÌM KIẾM SẢN PHẨM </h1>
                    <div>
                        <input 
                            id="TimKiemSanPham"
                            className="KHPage-TimKiemSP-SearchBar"
                            name="TimKiemSanPham"
                            placeholder="Tên Sản Phẩm"
                        />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="KHPage-TKSP-Products">
                        <div className="KHPage-TKSP-Products-Info">
                            <img className="Products-Photo" src={logo}/>
                            <div className="KHPage-Menu-Products-Info">
                                <h2>Tên SP: {}</h2>
                                <h3>Giá tiền: {}</h3>
                            </div>
                        </div>
                        <div className="LuaChonThongSoSP">
                            <div>
                                <div className="SoLuongSP">
                                    <h2>Số Lượng: {count}</h2>
                                    <button className="SoLuongSP-Tang-Giambtn" onClick={increaseCount}>+</button>
                                    <button className="SoLuongSP-Tang-Giambtn" onClick={decreaseCount}>-</button>
                                </div>
                                <h2>Size</h2>
                                    <select className="SP-Option">
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                <h2>Phần trăm đường </h2>
                                    <select className="SP-Option">
                                        <option value="100">100%</option>
                                        <option value="70">70%</option>
                                        <option value="50">50%</option>
                                    </select>
                                <h2>Phần trăm đá </h2>
                                    <select className="SP-Option">
                                    <option value="100">100%</option>
                                    <option value="50">50%</option>
                                    </select>
                            </div>
                            <h2>Topping </h2>
                            <div className="Topping-Checkbox">
                                <input type="checkbox" className="Checkbox"></input>
                                <h4>Trân Châu Đen(7.000đ)</h4>
                            </div>
                            <div className="Topping-Checkbox">
                                <input type="checkbox"  className="Checkbox"></input>
                                <h4>Trân Châu Trắng(7.000đ)</h4>
                            </div>
                            <div className="Topping-Checkbox">
                                <input type="checkbox"  className="Checkbox"></input>
                                <h4>Kem Cheese(10.000đ)</h4>
                            </div>
                            <h2>Tạm Tính: {} (VNĐ)</h2>
                            <button className="ThemVaoGioHangbtn">Thêm vào Giỏ Hàng</button>
                        </div>
                    </div>
                </div>
            </div>
            )}
            {/* Hiển thị thông tin Khách Hàng */}
            {activeTab === "XemThongTinKhachHang" &&(
                <div className="XemThongTinKhachHang">
                    <h1 className="XemThongTinKhachHang-Title">Thông Tin Tài Khoản</h1>
                    <div className="KhachHang-Info">
                        <h2> Họ và Tên: {}</h2>
                        <h2> Ngày Sinh: {}</h2>
                        <h2> Số Điện Thoại: {}</h2>
                        <h2> Địa Chỉ Thường Trú: {}</h2>
                        <h2> Tên Tài Khoản: {}</h2>
                    </div>
                    <button className="XemLichSuMuaHangbtn-KH" onClick={()=>handleTabClick('XemLichSuMuaHang')}>Xem Lịch Sử Mua Hàng</button>
                </div> 
            )}

            {/* Xem lịch sử mua hàng */}
            {activeTab === 'XemLichSuMuaHang' &&(
                <div className="XemLichSuMuaHang">
                    <h1 className="XemLichSuMuaHang-Title">Lịch Sử Mua Hàng</h1>
                    <ul className="XemLichSuMuaHang-list">
                        <li>
                            <div className="XemLichSuMuaHang-list-elements">
                                <div className="XemLichSuMuaHang-list-elements-info">
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
                            <div className="XemLichSuMuaHang-list-elements">
                                <div className="XemLichSuMuaHang-list-elements-info">
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
                            <div className="XemLichSuMuaHang-list-elements">
                                <div className="XemLichSuMuaHang-list-elements-info">
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
                            <div className="XemLichSuMuaHang-list-elements">
                                <div className="XemLichSuMuaHang-list-elements-info">
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
                            <div className="XemLichSuMuaHang-list-elements">
                                <div className="XemLichSuMuaHang-list-elements-info">
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

            {/* Xem Chi Tiết Đơn Hàng Đã Mua*/}
            {activeTab ==='XemChiTietDonHangDaMua' &&(
                <div className="XemChiTietDonHangDaMua">
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
                        onClick={()=>{handleTabClick('XemHoaDonMuaHang')}}>
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
            {/* Xem Hoa Don Mua Hàng */}
            {activeTab ==='XemHoaDonMuaHang' && (
                <div className="XemHoaDonMuaHang">
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

            {/* Xem Giỏ Hàng */}
            {activeTab === "XemGioHang" && (
                <div className="XemVaChinhSuaGioHang">
                    <div className="XemGioHang">
                    <h1 className="XemGioHang-Title">Giỏ Hàng</h1>
                    <ul className="XemGioHang-List">
                        <li>
                            <div className="XemGioHang-Products">
                                <img className="XemGioHang-Products-Photo" src={Photo}/>
                                <div className="XemGioHang-Products-Info">
                                    <h2>Tên Sản Phẩm: {}</h2>
                                    <h3>Số Lượng: {}</h3>
                                    <h3>Phần Trăm Đá: {}</h3>
                                    <h3>Phần Trăm Đường: {}</h3>
                                    <h3>Topping: {}</h3>
                                    <h3>Tạm Tính: {} (VNĐ)</h3>
                                </div>
                                <div>
                                    <button className="XoaLuaChonbtn"> Xóa Sản Phẩm </button>
                                    <button className="ChinhSuaLuaChonbtn">Chỉnh Sửa</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="XemGioHang-Products">
                                <img className="XemGioHang-Products-Photo" src={Photo}/>
                                <div className="XemGioHang-Products-Info">
                                    <h2>Tên Sản Phẩm: {}</h2>
                                    <h3>Số Lượng: {}</h3>
                                    <h3>Phần Trăm Đá: {}</h3>
                                    <h3>Phần Trăm Đường: {}</h3>
                                    <h3>Topping: {}</h3>
                                    <h3>Tạm Tính: {} (VNĐ)</h3>
                                </div>
                                <div>
                                    <button className="XoaLuaChonbtn"> Xóa Sản Phẩm </button>
                                    <button className="ChinhSuaLuaChonbtn">Chỉnh Sửa</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="XemGioHang-Products">
                                <img className="XemGioHang-Products-Photo" src={Photo}/>
                                <div className="XemGioHang-Products-Info">
                                    <h2>Tên Sản Phẩm: {}</h2>
                                    <h3>Số Lượng: {}</h3>
                                    <h3>Phần Trăm Đá: {}</h3>
                                    <h3>Phần Trăm Đường: {}</h3>
                                    <h3>Topping: {}</h3>
                                    <h3>Tạm Tính: {} (VNĐ)</h3>
                                </div>
                                <div>
                                    <button className="XoaLuaChonbtn"> Xóa Sản Phẩm </button>
                                    <button className="ChinhSuaLuaChonbtn">Chỉnh Sửa</button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="XemGioHang-Products">
                                <img className="XemGioHang-Products-Photo" src={Photo}/>
                                <div className="XemGioHang-Products-Info">
                                    <h2>Tên Sản Phẩm: {}</h2>
                                    <h3>Số Lượng: {}</h3>
                                    <h3>Phần Trăm Đá: {}</h3>
                                    <h3>Phần Trăm Đường: {}</h3>
                                    <h3>Topping: {}</h3>
                                    <h3>Tạm Tính: {} (VNĐ)</h3>
                                </div>
                                <div>
                                    <button className="XoaLuaChonbtn"> Xóa Sản Phẩm </button>
                                    <button className="ChinhSuaLuaChonbtn">Chỉnh Sửa</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                        <button className="ThanhToanbtn" onClick={()=>handleTabClick('ThanhToan')}> Thanh Toán</button>
                    </div>
                    <div>
                    <div className="ChinhSuaGioHang">
                    <h1 className="ChinhSuaGioHang-Title">Chỉnh Sửa Sản Phẩm </h1>
                    <div className="ChinhSuaGioHang-Products">
                        <div className="ChinhSuaGioHang-Products-Info">
                            <img className="Products-Photo" src={logo}/>
                            <div className="KHPage-Menu-Products-Info">
                                <h2>Tên SP: {}</h2>
                            </div>
                        </div>
                        <div className="LuaChonThongSoSP">
                            <div>
                                <div className="SoLuongSP">
                                    <h2>Số Lượng: {count}</h2>
                                    <button className="SoLuongSP-Tang-Giambtn" onClick={increaseCount}>+</button>
                                    <button className="SoLuongSP-Tang-Giambtn" onClick={decreaseCount}>-</button>
                                </div>
                                <h2>Size</h2>
                                    <select className="SP-Option">
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                <h2>Phần trăm đường </h2>
                                    <select className="SP-Option">
                                        <option value="100">100%</option>
                                        <option value="70">70%</option>
                                        <option value="50">50%</option>
                                    </select>
                                <h2>Phần trăm đá </h2>
                                    <select className="SP-Option">
                                    <option value="100">100%</option>
                                    <option value="50">50%</option>
                                    </select>
                            </div>
                            <h2>Topping </h2>
                            <div className="Topping-Checkbox">
                                <input type="checkbox" className="Checkbox"></input>
                                <h4>Trân Châu Đen(7.000đ)</h4>
                            </div>
                            <div className="Topping-Checkbox">
                                <input type="checkbox"  className="Checkbox"></input>
                                <h4>Trân Châu Trắng(7.000đ)</h4>
                            </div>
                            <div className="Topping-Checkbox">
                                <input type="checkbox"  className="Checkbox"></input>
                                <h4>Kem Cheese(10.000đ)</h4>
                            </div>
                            <h2>Tạm Tính: {} (VNĐ)</h2>
                            <button className="XacNhanChinhSuabtn">Cập Nhật Giỏ Hàng</button>
                        </div>
                            </div>
                        </div>
                    </div>  
                 </div>    
            )}

            {/* Thanh Toán */}
            {activeTab === 'ThanhToan'&&(
                <div className="ThanhToan">
                   <h1 className="ThanhToan-Title">Vui lòng lựa chọn hình thức Thanh Toán</h1>
                   <h1>Hình thức Thanh Toán</h1>
                   <select className="HinhThucThanhToan" value={paymentMethod} onChange={handlePaymentMethodChange}>
                        <option>Tại Cửa Hàng</option>
                        <option>Giao Hàng Trực Tuyến</option>
                   </select>
                   {paymentMethod === 'Giao Hàng Trực Tuyến' && (
                        <div className="GiaoHangTrucTuyen">
                        <h2>Địa Chỉ Giao Hàng</h2>
                        <h3 htmlFor="district">Quận/Huyện:</h3>
                        <select id="district" className="DiaChiGiaoHang">
                            <option value="">Quận/Huyện</option>
                                {districts.map((district, index) => (
                            <option value={district} key={index}>
                                    {district}
                            </option>
                        ))}
                         </select>
                        <h3>Số nhà/Ngõ/Ngách/Thôn/Xóm/Tổ/Xã/Phường/Thị trấn:</h3>
                        <input className="DiaChiCuThe" type="text" />
                        </div>
      )}
                    <button className="XemHoaDonbtn" onClick={()=>handleTabClick("XacNhanThanhToan")}>Xác Nhận</button>
                </div> 
            )}

            {/* Xac Nhan Thanh Toan */}
            {activeTab ==='XacNhanThanhToan' && (
                <div className="XemHoaDonMuaHang">
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
                    <button className="XacNhanbtn">Thanh Toán</button>
                    <button className="BackToThanhToanbtn" onClick={()=>{handleTabClick('ThanhToan')}}>Exit</button>
                </div>
                )}

                {/* Xem Danh Sách Đơn hàng Chờ giao */}
                {activeTab === "XemDSDonHangChoGiao" && (
                    <div className="XemDSDonHangChoGiao">
                    <h1 className="XemDSDonHangChoGiao-Title">Danh Sách Đơn Hàng Chờ Giao</h1>
                    <ul className="XemDSDonHangChoGiao-list">
                        <li>
                            <div className="XemDSDonHangChoGiao-list-elements">
                                <div className="XemDSDonHangChoGiao-list-elements-info">
                                    <h2>Mã Đơn Hàng: {}</h2>
                                    <h2>Hình Thức Thanh Toán: {}</h2>
                                    <h2>Tổng Tiền: {}</h2>
                                    <h2>Trạng Thái Đơn Hàng: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietDonHangbtn"
                                onClick={()=>{handleTabClick('XemChiTietDonHangChoGiao')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="XemDSDonHangChoGiao-list-elements">
                                <div className="XemDSDonHangChoGiao-list-elements-info">
                                    <h2>Mã Đơn Hàng: {}</h2>
                                    <h2>Hình Thức Thanh Toán: {}</h2>
                                    <h2>Tổng Tiền: {}</h2>
                                    <h2>Trạng Thái Đơn Hàng: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietDonHangbtn"
                                onClick={()=>{handleTabClick('XemChiTietDonHangChoGiao')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="XemDSDonHangChoGiao-list-elements">
                                <div className="XemDSDonHangChoGiao-list-elements-info">
                                    <h2>Mã Đơn Hàng: {}</h2>
                                    <h2>Hình Thức Thanh Toán: {}</h2>
                                    <h2>Tổng Tiền: {}</h2>
                                    <h2>Trạng Thái Đơn Hàng: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietDonHangbtn"
                                onClick={()=>{handleTabClick('XemChiTietDonHangChoGiao')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                        <li>
                            <div className="XemDSDonHangChoGiao-list-elements">
                                <div className="XemDSDonHangChoGiao-list-elements-info">
                                    <h2>Mã Đơn Hàng: {}</h2>
                                    <h2>Hình Thức Thanh Toán: {}</h2>
                                    <h2>Tổng Tiền: {}</h2>
                                    <h2>Trạng Thái Đơn Hàng: {}</h2>
                                </div>
                                <button 
                                className="XemChiTietDonHangbtn"
                                onClick={()=>{handleTabClick('XemChiTietDonHangChoGiao')}}
                                >Xem chi tiết</button>
                            </div>
                        </li>
                    </ul>
                </div>
                )}
                {/* Xem Chi Tiết Đơn Hàng Chờ Giao */}
                {activeTab ==='XemChiTietDonHangChoGiao' &&(
                <div className="XemChiTietDonHangDaMua">
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
                        onClick={()=>{handleTabClick('XemHoaDonDonHangChoGiao')}}>
                            Xem hóa đơn
                        </button>
                        <button 
                        className="BackToDSĐHbtn" 
                        onClick={()=>{handleTabClick('XemDSDonHangChoGiao')}}>
                            Exit
                        </button>
                    </div>
                </div>
            )}

            {/* Xem Hoa Don Don Hang Cho Giao */}
            {activeTab ==='XemHoaDonDonHangChoGiao' && (
                <div className="XemHoaDonMuaHang">
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
                    <button className="BackToQLDHbtn" onClick={()=>{handleTabClick('XemChiTietDonHangChoGiao')}}>Exit</button>
                </div>
                )}
            <div className="PageInfo">
                <div>
                    <h1>Liên hệ chủ cửa hàng</h1>
                    <h3>Số điện thoại: 0702124299</h3>
                    <h3>Email: hungnguyen1972k3@gmail.com</h3>
                    <h3>Địa Chỉ Cửa Hàng: Số 24, tổ 7, Phú Lương, Hà Đông, Hà Nội</h3>
                </div>
            </div>

          </div>  
    

    )
}
export default TrangChuKhachHang