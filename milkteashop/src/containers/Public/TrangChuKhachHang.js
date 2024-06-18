import {React, useState, useEffect} from "react"
import { json, useNavigate } from 'react-router-dom';
import "./TrangChuKhachHang.css"
import logo from "../../assets/Avatar.png"
import emptyshoppingcart from "../../assets/emptyshoppingcart.png"
import { apiGetUserInfo, apiAddProductToShoppingCart, apiDeleteDonHang, apiCreateHoaDon, apiGetAllHoaDon} from "../../services/Khachhang";
import { apiGetProductById, apiGetDonHangById, apiGetHoaDonById, apiGetNVGHById } from "../../services/Khachhang";
import {apiGetAllProducts, apiGetProductByKey} from "../../services/Chucuahang"
import { useDispatch } from 'react-redux';
import * as action from "../../store/actions"

function TrangChuKhachHang() {
    const [activeTab, setActiveTab]=useState(null)
    const handleTabClick = (tabID)=>{
        setActiveTab(tabID)
     }

     const [count, setCount] = useState(1); // Giá trị mặc định là 1

     const increaseCount = () => {
       setCount(count + 1)
     };
   
     const decreaseCount = () => {
       if (count > 1) {
         setCount(count - 1)
       }
    };

    const districts = ['Ba Đình','Hoàn Kiếm','Tây Hồ','Long Biên','Cầu Giấy','Đống Đa','Hai Bà Trưng','Hoàng Mai','Thanh Xuân','Nam Từ Liêm','Bắc Từ Liêm','Hà Đông','Sơn Tây','Ba Vì','Phúc Thọ','Đan Phượng','Hoài Đức','Thanh Trì','Gia Lâm','Đông Anh','Sóc Sơn','Thanh Oai','Mê Linh'];


    // Đăng Xuất
    const [showModal, setShowModal] = useState(false);
    const DangXuatCCH = useNavigate()
    const handleLogout = () => {
        setShowModal(true);
      };
    
    const handleConfirmLogout = () => {
        DangXuatCCH('/');
    };


    // Hien thi Menu
    const [arrProducts,setArrProducts] = useState({})
    useEffect(() => {
        const handleHienThiMenu = async () => {
          let response = await apiGetAllProducts();
          setArrProducts(response.data.products)
        };
        handleHienThiMenu();
      }, []);
    
    // Tìm Kiếm Sản Phẩm
    const dispatch = useDispatch()
    const [showTab, setShowTab] = useState(false)
    const [inputTimKiemSanPham, setInputTimKiemSanPham] = useState('')
    const handleGetInputTimKiemSanPham = (event) =>{
        setInputTimKiemSanPham(event.target.value)
    }
    const [errTimKiemSanPham, setErrTimKiemSanPham] = useState('')
    const [productInfo, setProductInfo] = useState({})
    const handleTimKiemSanPham = async(event) =>{
        event.preventDefault()
        if(!inputTimKiemSanPham){
            setErrTimKiemSanPham('Missing input parameter !')
        }else{
            let response = await apiGetProductByKey(inputTimKiemSanPham)
            if(response.data.product === null){
                setErrTimKiemSanPham("The product is not found !")
                setProductInfo({})
                setShowTab(false)
            }else{
                setProductInfo(response.data.product)
                setErrTimKiemSanPham("")
                setShowTab(true)
                dispatch(action.addproducttoshoppingcart(response.data.product))
                setCount(1)
            }
        }
    }

    //Mua ngay
    const handleMuaNgay = async(productname) =>{
        let response = await apiGetProductByKey(productname)
        setProductInfo(response.data.product)
        dispatch(action.addproducttoshoppingcart(response.data.product))
        setInputTimKiemSanPham(response.data.product.productname)
        setErrTimKiemSanPham("")
        setShowTab(true)
        setCount(1)
    }

     // Hien Thi THong TIn nguoi dung
     const [thongTinKhachHang, setThongTinKhachHang] = useState({})
     const handleXemThongTinKH = async() =>{
         setActiveTab('XemThongTinKhachHang')
         const value = localStorage.getItem('persist:auth');
         const parsedValue = JSON.parse(value);
         const username = JSON.parse(parsedValue.userInfo)
         let userinfo = await apiGetUserInfo(username)
         setThongTinKhachHang(userinfo.data.response)
     }

    // Them vao gio hang
    const [arrProductNames, setArrProductNames] = useState([])
    const [arrChoosenProducts, setArrChoosenProducts] = useState([])
    const [inputSize, setInputSize] = useState('')
    const [inputSugar, setInputSugar] = useState('')
    const [inputIce, setInputIce] = useState('')
    const handleGetInputSize = (event) =>{
        setInputSize(event.target.value)
    }
    const handleGetInputSugar = (event) =>{
        setInputSugar(event.target.value)
    }
    const handleGetInputIce = (event) =>{
        setInputIce(event.target.value)
    }
    const [inputToppings, setInputToppings] = useState([])
    const handleChooseTopping = (event) =>{
        const { checked, value } = event.target;
        if (checked) {
        setInputToppings([...inputToppings, value]);
        } else {
        setInputToppings(inputToppings.filter((topping) => topping !== value));
        }
    }
    const handleAddProductToShoppingCart = async(event) =>{
        if(!inputSize || !inputIce || !inputSize) {
            setErrTimKiemSanPham('Missing input parameters')
        }else{
            event.preventDefault()
            const value = localStorage.getItem('persist:product');
            const parsedValue = JSON.parse(value)
            const product = JSON.parse(parsedValue.productInfo)
            const sanpham_id = product.id
            const value2 = localStorage.getItem('persist:auth');
            const parsedValue2 = JSON.parse(value2);
            const username = JSON.parse(parsedValue2.userInfo)
            let userinfo = await apiGetUserInfo(username)
            setThongTinKhachHang(userinfo.data.response)
            const khachhang_id = userinfo.data.response.id
            const price = count * (product.productprice + 7000*inputToppings.length + (inputSize === 'S' ? 0 : (inputSize === 'L' ? 5000 : 10000)))
            const response = await apiAddProductToShoppingCart(inputSize,inputSugar,inputIce,count,inputToppings,price,khachhang_id,sanpham_id)
            setArrChoosenProducts(prev => [...prev, response.data.response.response]);
            setArrProductNames(prev =>[...prev, product.productname]);
            alert(response.data.response.msg)
            setInputToppings([]); setInputIce(""); setInputSize(""); setInputSugar("")
        }
    }

    // Hien thi giỏ hàng
    const [tongtien, setTongtien] = useState(0)
    const handleXemGioHang = (event) =>{
        event.preventDefault()
        setActiveTab("XemGioHang")
        let total = 0;
        arrChoosenProducts.forEach((product) => {
          total += Number(product.price);
        });
      
        setTongtien(total);
    }

    //Xóa sán phẩm khỏi giỏ hàng
    const handleXoaSP = async(a, b) =>{
        const updatedArrProductNames = arrProductNames.filter((item) => item !== a);
        setArrProductNames(updatedArrProductNames);
        const updatedArrChoosenProducts = arrChoosenProducts.filter((item) => item !== b);
        setArrChoosenProducts(updatedArrChoosenProducts);
        setTongtien(tongtien - b.price)
        await apiDeleteDonHang(b.id)
    }

    // Lưu đơn hàng và tạo hóa đơn
    const [hoaDonTamTinh, setHoaDonTamTinh] = useState({})
    const [errChonShip, setErrChonShip] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('Tại Cửa Hàng');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };
        const [inputQuanHuyen, setInputQuanHuyen] = useState('')
        const [inputDiaChiCuThe, setInputDiaChiCuThe] = useState('')
        const [inputShippingPhone, setInputShippingPhone] = useState('')
        const handleGetInputQuanHuyen = (event) =>{
            setInputQuanHuyen(event.target.value)
        }
        const handleGetInputDiaChiCuThe = (event) =>{
            setInputDiaChiCuThe(event.target.value)
        }
        const handleGetShippingPhone = (event) =>{
            setInputShippingPhone(event.target.value)
        }
    const handleCreateHoaDon = async(event) =>{
        event.preventDefault()
        const value2 = localStorage.getItem('persist:auth');
            const parsedValue2 = JSON.parse(value2);
            const username = JSON.parse(parsedValue2.userInfo)
            let userinfo = await apiGetUserInfo(username)
        const khachhang_id = userinfo.data.response.id
        const listdonhang_id = arrChoosenProducts.map(product => product.id);
        const listproductname = arrProductNames
        const nvgh_id = null
        if(paymentMethod === "Tại Cửa Hàng"){
            const shippingaddress = null
            const shippingcost = null
            const shippingphone = null
            const trangthaidonhang = "Tại Cửa Hàng"
        let response = await apiCreateHoaDon(khachhang_id, nvgh_id, shippingcost, shippingaddress, shippingphone, listdonhang_id, trangthaidonhang, tongtien, listproductname)
        setActiveTab('XacNhanThanhToan')
        setHoaDonTamTinh(response.data.response)
        }else{
            if(!inputQuanHuyen || !inputDiaChiCuThe || !inputShippingPhone){
                setErrChonShip('Missing input parameters !')
            }else{
            const shippingcost = (inputQuanHuyen === "Hà Đông" ? 0 : 20000)
            const shippingaddress = inputDiaChiCuThe +',' + inputQuanHuyen
            const trangthaidonhang = 'Đặt ship'
        let response = await apiCreateHoaDon(khachhang_id, nvgh_id, shippingcost, shippingaddress,inputShippingPhone , listdonhang_id, trangthaidonhang, tongtien + shippingcost, listproductname)
        setActiveTab('XacNhanThanhToan')
        setErrChonShip('')
        setHoaDonTamTinh(response.data.response)
        }
        }
        setInputDiaChiCuThe('')
        setInputQuanHuyen('')
        setInputShippingPhone('')
    }

    const handleExit = () =>{
        setActiveTab(null)
        setArrChoosenProducts([])
        setArrProductNames([])
    }
    // Hiển thị danh sách đơn hàng chờ giao
    const [arrDonHangChuaThanhToan, setArrDonHangChuaThanhToan] = useState([])
    const handleXemDonHangChuaThanhToan  = async() =>{
        setActiveTab("XemDSDonHangChoGiao")
        let response1 = await apiGetAllHoaDon('Tại Cửa Hàng')
        let response2 = await apiGetAllHoaDon('Đặt ship')
        let combinedArray = response1.data.hoadons.concat(response2.data.hoadons);
        setArrDonHangChuaThanhToan(combinedArray);
        const value2 = localStorage.getItem('persist:auth');
            const parsedValue2 = JSON.parse(value2);
            const username = JSON.parse(parsedValue2.userInfo)
            let userinfo = await apiGetUserInfo(username)
            setThongTinKhachHang(userinfo.data.response)
    }                                                                       
    
    // Xem chi tiết hóa đơn chưa thanh tán
    const [showNVGH, setShowNVGH] = useState(false)
    const [arrayHoaDon,setArrayHoaDon] = useState({})
    const [arrayDonHang,setArrayDonHang] = useState([])
    const [arraySanPham,setArraySanPham] = useState([])
    const [arrayNVGH,setArrayNVGH] = useState({})

    const handleXemHoaDonDonHangChuaThanhToan = async(a) =>{
        let response = await apiGetHoaDonById(a)
        setArrayHoaDon(response.data.response.response)
        const hoadon = response.data.response.response
        if(hoadon.nvgh_id === null){
            setShowNVGH(false)
        }else{
            setShowNVGH(true)
            let nvgh = await apiGetNVGHById(hoadon.nvgh_id)
            setArrayNVGH(nvgh.data.response.response)
        }
        setArraySanPham(JSON.parse(hoadon.listproductname))
        const list = JSON.parse(hoadon.listdonhang_id);
        const newArray = list.map(async (donhangId) => {
        try {
            const donhang = await apiGetDonHangById(donhangId);
            return donhang.data.response.response;
        } catch (error) {
            // Xử lý lỗi
        }
        });

        Promise.all(newArray)
        .then((resolvedArray) => {
            setArrayDonHang(resolvedArray);
        })
        .catch((error) => {
        });
        setActiveTab('XemHoaDonDonHangChoGiao')
    }

    // Xem Lịch sử mua hàng
    const [arrayDonHangDaMua, setArrayDonHangDaMua] = useState([])
    const handleXemLichSuMuaHang = async() =>{
        setActiveTab('XemLichSuMuaHang')
        const response = await apiGetAllHoaDon('Đã Thanh Toán')
        setArrayDonHangDaMua(response.data.hoadons)
    }
    // Xem hóa đơn đơn hàng đã mua
    const [donHangDaMua, setDonHangDaMua] = useState({})
    const [arrayXemDonHangDaMua, setArrayXemDonHangDaMua] = useState([])
    const [nvghDonHangDaMua, setNvghDonHangDaMua] = useState({})
    const [listproductnameDaMua, setListproductnameDaMua] = useState([])
    const handleXemHoaDonDaMua = async(a) =>{
        setActiveTab("XemHoaDonMuaHang")
        let response = await apiGetHoaDonById(a)
        setDonHangDaMua(response.data.response.response)
        let hoadon = response.data.response.response
        let donhangs = JSON.parse(hoadon.listdonhang_id)
        let array = []
        for (let donhang of donhangs) {
            let response = await apiGetDonHangById(donhang);
            array.push(response.data.response.response);
        }
        setArrayXemDonHangDaMua(array)
        if(hoadon.nvgh_id === null){
            setNvghDonHangDaMua({})
        }else{
            let nvgh = await apiGetNVGHById(hoadon.nvgh_id)
            setNvghDonHangDaMua(nvgh.data.response.response)
        }
        setListproductnameDaMua(JSON.parse(hoadon.listproductname))
    }
    console.log(arrayXemDonHangDaMua)
    return(
        <div>
            <div className="KHPage-Bar">
                <img className="Logo" src={logo}/>
                <i class="fa-solid fa-house" onClick={()=>handleTabClick(null)}></i>
                <i class="fa-solid fa-user" onClick={handleXemThongTinKH}></i>
                <i class="fa-solid fa-cart-shopping" onClick={handleXemGioHang}></i>
                <i class="fa-solid fa-truck-fast" onClick={handleXemDonHangChuaThanhToan} ></i>
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
                    {Array.isArray(arrProducts) &&
                        arrProducts.map((item, index) => (
                            <li key={index}>
                            <div className="KHPage-Menu-Products">
                                <img className="Products-Photo" src={item.productimageurl}/>
                                <div className="KHPage-Menu-Products-Info">
                                    <h2>Tên Sản Phẩm: {item.productname}</h2>
                                    <h3>Giá tiền: {item.productprice} VNĐ</h3>
                                    <p>Lưu ý: ( Giá tiền ứng với size S, tăng 5000 VNĐ khi tăng 1 size ) </p>
                                    <button className="KHPage-Menu-Products-Addbtn" onClick={() =>handleMuaNgay(item.productname)}>Mua Ngay</button>
                                </div>
                            </div>
                        </li>
                    ))}
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
                            value={inputTimKiemSanPham}
                            onChange={handleGetInputTimKiemSanPham}
                        />
                        <i class="fa-solid fa-magnifying-glass" onClick={handleTimKiemSanPham}></i>
                    </div>
                    <div className="errTimKiemSanPham">
                        <h2>{errTimKiemSanPham}</h2>
                    </div>
                    {showTab && (
                        <div className="KHPage-TKSP-Products">
                        <div className="KHPage-TKSP-Products-Info">
                            <img className="Products-Photo" src={productInfo.productimageurl}/>
                            <div className="KHPage-Menu-Products-Info">
                                <h2>Tên SP : {productInfo.productname}</h2>
                                <h3>Giá tiền : {productInfo.productprice} VNĐ</h3>
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
                                    <select className="SP-Option" value={inputSize} onChange={handleGetInputSize}>  
                                        <option></option>
                                        <option>S</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                <h2>Phần trăm đường </h2>
                                    <select className="SP-Option" value={inputSugar} onChange={handleGetInputSugar}> 
                                        <option></option>
                                        <option >100%</option>
                                        <option >70%</option>
                                        <option >50%</option>
                                    </select>
                                <h2>Phần trăm đá </h2>
                                    <select className="SP-Option" value={inputIce} onChange={handleGetInputIce}>
                                        <option></option>
                                        <option >100%</option>
                                        <option >50%</option>
                                        <option >0%</option>
                                    </select>
                            </div>
                            <h2>Topping </h2>
                            <div className="Topping-Checkbox">
                                <input type="checkbox" className="Checkbox" checked={inputToppings.includes('Trân Châu Đen')} value={'Trân Châu Đen'} onChange={handleChooseTopping}></input>
                                <h4>Trân Châu Đen(7.000đ)</h4>
                            </div>
                            <div className="Topping-Checkbox">
                                <input type="checkbox" className="Checkbox" checked={inputToppings.includes('Trân Châu Trắng')} value={'Trân Châu Trắng'} onChange={handleChooseTopping}></input>
                                <h4>Trân Châu Trắng(7.000đ)</h4>
                            </div>
                            <div className="Topping-Checkbox">
                                <input type="checkbox"  className="Checkbox" checked={inputToppings.includes('Kem Cheese')} value={'Kem Cheese'} onChange={handleChooseTopping}></input>
                                <h4>Kem Cheese(7.000đ)</h4>
                            </div>
                            <button className="ThemVaoGioHangbtn" onClick={handleAddProductToShoppingCart}>Thêm vào Giỏ Hàng</button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            )}
            {/* Hiển thị thông tin Khách Hàng */}
            {activeTab === "XemThongTinKhachHang" &&(
                <div className="XemThongTinKhachHang">
                    <h1 className="XemThongTinKhachHang-Title">Thông Tin Tài Khoản</h1>
                    <div className="KhachHang-Info">
                        <h2> Họ và Tên : {thongTinKhachHang.fullname}</h2>
                        <h2> Số Điện Thoại : {thongTinKhachHang.phonenumber}</h2>
                        <h2> Địa Chỉ Thường Trú : {thongTinKhachHang.address}</h2>
                        <h2> Tên Tài Khoản: {thongTinKhachHang.username}</h2>
                        <h2> Mã Tài Khoản : {thongTinKhachHang.id}</h2>
                    </div>
                    <button className="XemLichSuMuaHangbtn-KH" onClick={handleXemLichSuMuaHang}>Xem Lịch Sử Mua Hàng</button>
                </div> 
            )}

            {/* Xem lịch sử mua hàng */}
            {activeTab === 'XemLichSuMuaHang' &&(
                <div className="XemLichSuMuaHang">
                    <h1 className="XemLichSuMuaHang-Title">Lịch Sử Mua Hàng</h1>
                    <ul className="XemLichSuMuaHang-list">
                        {arrayDonHangDaMua.map((donhang, index)=>(
                        <li key={index}>
                            <div className="XemLichSuMuaHang-list-elements">
                                <div className="XemLichSuMuaHang-list-elements-info">
                                    <h2>Mã Đơn Hàng: {donhang.id}</h2>
                                    <h2>Ngày Đặt Hàng: {Date(donhang.createAt)}</h2>
                                    <h2>Hình Thức Thanh Toán: {donhang.nvgh_id === null ? "Trực tiếp tại cửa hàng" : "Đặt ship" }</h2>
                                    <h2>Tổng Tiền: {donhang.totalprice}</h2>
                                </div>
                                <button 
                                className="XemChiTietDonHangbtn"
                                onClick={() => {handleXemHoaDonDaMua(donhang.id)}}
                                >Xem hóa đơn</button>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Xem Hoa Don Mua Hàng */}
            {activeTab ==='XemHoaDonMuaHang' && (
                <div className="XemHoaDonMuaHang">
                    <h1 className="HoaDon-text">Hóa Đơn</h1>
                    <h2 className="HoaDon-info">Họ và Tên Khách Hàng: {thongTinKhachHang.fullname}</h2>
                    <h2 className="HoaDon-info">Số Điện Thoại: {donHangDaMua.nvgh_id === null ? thongTinKhachHang.phonenumber : donHangDaMua.shippingphone}</h2>
                    <h2 className="HoaDon-info">Địa Chỉ Nhận Hàng: {donHangDaMua.shippingaddress}</h2>
                    <table className="HoaDon-list">
                        <thead>
                            <tr>
                                <th className="HoaDon-list-info-2">STT</th>
                                <th className="HoaDon-list-info-1">Tên Sản Phẩm</th>
                                <th className="HoaDon-list-info-2">Size</th>
                                <th className="HoaDon-list-info-2">Phần Trăm Đá</th>
                                <th className="HoaDon-list-info-2">Phần Trăm Đường</th>
                                <th className="HoaDon-list-info-1">Thành Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrayXemDonHangDaMua.map((a, index)=>(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{listproductnameDaMua[index]}</td>
                                <td>{a.size}</td>
                                <td>{a.ice}</td>
                                <td>{a.sugar}</td>
                                <td>{a.price} VNĐ</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2 className="HoaDon-info">Tổng Tiền : {donHangDaMua.totalprice - donHangDaMua.shippingcost} VNĐ</h2>
                    <h2 className="HoaDon-info"> Hình thức thanh toán: {} </h2>
                    <h2 className="HoaDon-info">Tiền Ship: {donHangDaMua.shippingcost} VNĐ</h2>
                    <h2 className="HoaDon-info">Tổng Tiền Đơn Hàng : {donHangDaMua.totalprice} VNĐ</h2>
                    {donHangDaMua.nvgh_id !== null && (
                    <div>
                        <h2 className="HoaDon-info">Thông tin nhân viên giao hàng:</h2>
                        <h3 className="HoaDon-info">Mã nhân viên: {donHangDaMua.nvgh_id}</h3>
                        <h3 className="HoaDon-info">Họ và tên: {nvghDonHangDaMua.fullname}</h3>
                        <h3 className="HoaDon-info">Số điện thoại: {nvghDonHangDaMua.phonenumber} </h3>
                    </div>
                    )}

                    <button className="BackToQLDHbtn" onClick={()=>{handleTabClick('XemLichSuMuaHang')}}>Back</button>
                </div>
                )}

            {/* Xem Giỏ Hàng */}
            {activeTab === "XemGioHang" &&(
                <div className="XemVaChinhSuaGioHang">
                    <div className="XemGioHang">
                    <h1 className="XemGioHang-Title">Giỏ Hàng</h1>
                    <ul className="XemGioHang-List">   
                    {arrChoosenProducts.map((product, index) => (
                        <li key={index}>
                        <div className="XemGioHang-Products">
                            <img className="XemGioHang-Products-Photo" src={logo} />
                            <div className="XemGioHang-Products-Info">
                            <h2>Tên Sản Phẩm: {arrProductNames[index]}</h2>
                            <h3>Số Lượng: {arrChoosenProducts[index].quantity} (size: {arrChoosenProducts[index].size})</h3>
                            <h3>Đá: {arrChoosenProducts[index].ice} - Đường: {arrChoosenProducts[index].sugar}</h3>
                            <h3>Topping: {arrChoosenProducts[index].topping}</h3>
                            <h3>Tạm Tính: {arrChoosenProducts[index].price} (VNĐ)</h3>
                            </div>
                            <div>
                            <button className="XoaLuaChonbtn" onClick={()=> handleXoaSP(arrProductNames[index],arrChoosenProducts[index])}> Xóa Sản Phẩm </button>
                            </div>
                        </div>
                        </li>
                    ))}
                    </ul>
                        <h1 className="TongTien">Tổng tiền: {tongtien} VNĐ</h1>
                        <button className="ThanhToanbtn" onClick={()=>handleTabClick('ThanhToan')}> Thanh Toán</button>
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
                         <div style={{color: '#e80889', paddingLeft: '27%'}}>
                            <h2>{errChonShip}</h2>
                        </div>   
                        <h2>Địa Chỉ Giao Hàng</h2>
                        <h3 htmlFor="district">Quận/Huyện:</h3>
                        <select id="district" className="DiaChiGiaoHang" value={inputQuanHuyen} onChange={handleGetInputQuanHuyen} >
                            <option value="">Quận/Huyện</option>
                                {districts.map((district, index) => (
                            <option value={district} key={index}>
                                    {district}
                            </option>
                        ))}
                         </select>
                        <h3>Số nhà/Ngõ/Ngách/Thôn/Xóm/Tổ/Xã/Phường/Thị trấn:</h3>
                        <input className="DiaChiCuThe" type="text" value={inputDiaChiCuThe} onChange={handleGetInputDiaChiCuThe}/>
                        <h2>Số điện thoại</h2>
                        <input className="DiaChiCuThe" type="text" value={inputShippingPhone} onChange={handleGetShippingPhone} />
                        </div>
      )}
                    <button className="XemHoaDonbtn" onClick={handleCreateHoaDon}>Xác Nhận</button>
                </div> 
            )}

            {/* Xac Nhan Thanh Toan */}
            {activeTab ==='XacNhanThanhToan' && (
                <div className="XemHoaDonMuaHang">
                    <h1 className="HoaDon-text">Hóa Đơn</h1>
                    <h2 className="HoaDon-info">Họ và Tên Khách Hàng: {thongTinKhachHang.fullname}</h2>
                    <h2 className="HoaDon-info">Số Điện Thoại Nhận Hàng : {hoaDonTamTinh.shippingphone}</h2>
                    <h2 className="HoaDon-info">Địa Chỉ Nhận Hàng: {hoaDonTamTinh.shippingaddress}</h2>
                    <table className="HoaDon-list">
                        <thead>
                            <tr>
                                <th className="HoaDon-list-info-2">STT</th>
                                <th className="HoaDon-list-info-1">Tên Sản Phẩm</th>
                                <th className="HoaDon-list-info-2">Size</th>
                                <th className="HoaDon-list-info-2">Phần Trăm Đá</th>
                                <th className="HoaDon-list-info-2">Phần Trăm Đường</th>
                                <th className="HoaDon-list-info-2">Số lượng</th>
                                <th className="HoaDon-list-info-1">Thành Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrChoosenProducts.map((product, index)=>(
                                <tr key = {index}>
                                <td>{index + 1}</td>
                                <td>{arrProductNames[index]}</td>
                                <td>{arrChoosenProducts[index].size}</td>
                                <td>{arrChoosenProducts[index].ice}</td>
                                <td>{arrChoosenProducts[index].sugar}</td>
                                <td>{arrChoosenProducts[index].quantity}</td>
                                <td>{arrChoosenProducts[index].price} VNĐ</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2 className="HoaDon-info">Tổng Tiền : {hoaDonTamTinh.totalprice - hoaDonTamTinh.shippingcost } VNĐ (đồng)</h2>
                    <h2 className="HoaDon-info"> Hình thức thanh toán: {hoaDonTamTinh.trangthaidonhang}</h2>
                    <h2 className="HoaDon-info">Tiền Ship: {hoaDonTamTinh.shippingcost} VNĐ (đồng)</h2>
                    <h2 className="HoaDon-info">Tổng Tiền Đơn Hàng : {hoaDonTamTinh.totalprice} VNĐ (đồng)</h2>
                    <button className="BackToHomebtn" onClick={handleExit}>Exit</button>
                </div>
                )}

                {/* Xem Danh Sách Đơn hàng Chờ giao */}
                {activeTab === "XemDSDonHangChoGiao" && (
                    <div className="XemDSDonHangChoGiao">
                    <h1 className="XemDSDonHangChoGiao-Title">Danh Sách Đơn Hàng Chưa Thanh Toán</h1>
                    <ul className="XemDSDonHangChoGiao-list">
                    {arrDonHangChuaThanhToan.map((donhang, index) => {
                        return (
                            <li key={index}>
                            <div className="XemDSDonHangChoGiao-list-elements">
                                <div className="XemDSDonHangChoGiao-list-elements-info">
                                <h2>Mã Đơn Hàng: {arrDonHangChuaThanhToan[index].id}</h2>
                                <h2>Tổng Tiền: {arrDonHangChuaThanhToan[index].totalprice}</h2>
                                <h2>Trạng Thái Đơn Hàng: {arrDonHangChuaThanhToan[index].trangthaidonhang}</h2>
                                </div>
                                <button
                                className="XemChiTietDonHangbtn"
                                onClick={() => handleXemHoaDonDonHangChuaThanhToan(arrDonHangChuaThanhToan[index].id)}
                                >Xem hóa đơn</button>
                            </div>
                            </li>
                        );
                        })}
                    </ul>
                </div>
                )}
            {/* Xem Hoa Don Don Hang Cho Giao */}
            {activeTab ==='XemHoaDonDonHangChoGiao' && (
                <div className="XemHoaDonMuaHang">
                    <h1 className="HoaDon-text">Hóa Đơn</h1>
                    <h2 className="HoaDon-info">Họ và Tên Khách Hàng: {thongTinKhachHang.fullname}</h2>
                    <h2 className="HoaDon-info">Số Điện Thoại Nhận Hàng: {arrayHoaDon.shippingphone}</h2>
                    <h2 className="HoaDon-info">Địa Chỉ Nhận Hàng: {arrayHoaDon.shippingaddress || "Tại cửa hàng"}</h2>
                    <table className="HoaDon-list">
                        <thead>
                            <tr>
                                <th className="HoaDon-list-info-2">STT</th>
                                <th className="HoaDon-list-info-1">Tên Sản Phẩm</th>
                                <th className="HoaDon-list-info-2">Size</th>
                                <th className="HoaDon-list-info-2">Phần Trăm Đá</th>
                                <th className="HoaDon-list-info-2">Phần Trăm Đường</th>
                                <th className="HoaDon-list-info-2">Số lượng</th>
                                <th className="HoaDon-list-info-1">Thành Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                        {arrayDonHang.map((donhang, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{arraySanPham[index]}</td>
                                    <td>{arrayDonHang[index].size}</td>
                                    <td>{arrayDonHang[index].ice}</td>
                                    <td>{arrayDonHang[index].sugar}</td>
                                    <td>{arrayDonHang[index].quantity}</td>
                                    <td>{arrayDonHang[index].price} VNĐ</td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                    <h2 className="HoaDon-info">Tổng Tiền Đơn Hàng: {arrayHoaDon.totalprice - arrayHoaDon.shippingcost} VNĐ(dong)</h2>
                    <h2 className="HoaDon-info">Tiền Ship: {arrayHoaDon.shippingcost || 0} VNĐ(dong)</h2>
                    <h2 className="HoaDon-info">Tổng Tiền: {arrayHoaDon.totalprice} VNĐ(dong)</h2>
                    {showNVGH && (
                        <div>
                            <h2 className="HoaDon-info">Thông tin nhân viên giao hàng:</h2>
                            <h3 className="HoaDon-info">Mã nhân viên: {arrayHoaDon.nvgh_id}</h3>
                            <h3 className="HoaDon-info">Họ và tên: {arrayNVGH.fullname}</h3>
                            <h3 className="HoaDon-info">Số điện thoại: {arrayNVGH.phonenumber} </h3>
                        </div>    
                    )
                    }

                    <button className="BackToQLDHbtn" onClick={()=>{handleTabClick('XemDSDonHangChoGiao')}}>Exit</button>
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