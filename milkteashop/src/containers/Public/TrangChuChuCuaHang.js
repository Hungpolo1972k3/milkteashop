import React,{useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import avatar from "../../assets/Avatar.png"
import {apiCreateNVGH, apiGetAllUsers, apiGetUserByKey,apiDeleteUser, apiGetNVGHByKey, apiGetAllNVGH,apiDeleteNVGH, apiGetAllProducts, apiGetProductByKey, apiEditProduct, apiCreateProduct, apiDeleteProduct, apiEditNVGH, apiEditTTDHById, apiEditNVGHId} from '../../services/Chucuahang'
import {apiGetAllHoaDon, apiGetUserInfoById, apiGetDonHangById, apiGetProductById} from "../../services/Khachhang"
import "./TrangChuChuCuaHang.css"
import { useDispatch } from 'react-redux';
import * as action from "../../store/actions"


function TrangChuChuCuaHang(){

    const [activeTab, setActiveTab] = useState(null)
    const handleTabClick = (tabId) =>{
        setActiveTab(tabId);
    }

    // Hien thi danh sách đon hàng lấy tại cửa hàng tại trang chủ
    const [arrayDonHangAtShop, setArrayDonHangAtShop] = useState([]);
    const [arrayUsername, setArrayUsername] = useState([])
    const [arrayPhoneNumber, setArrayPhoneNumber] = useState([])
    const handleGetListDonHangAtShop = async () => {
    try {
        let response = await apiGetAllHoaDon("Tại Cửa Hàng");
        setArrayDonHangAtShop(response.data.hoadons);
        const ids = response.data.hoadons.map((item) => item.khachhang_id);
        const array = [];
        const array2 = []
        for (let id of ids) {
            let response = await apiGetUserInfoById(id);
            array.push(response.data.response.fullname);
            array2.push(response.data.response.phonenumber)
        }
        setArrayUsername(array)
        setArrayPhoneNumber(array2)
    } catch (error) {
    }
    };
    useEffect(() => {
    handleGetListDonHangAtShop();
    }, []);

    // Xem chi tiết đơn hàng tại cửa hàng
    const [arrayDonHangChiTiet, setArrayDonHangChiTiet] = useState([])
    const [usernameXemChiTiet, setUsernameXemChiTiet] = useState('')
    const [phonenumberXemChiTiet, setPhonenumberXemChiTiet] = useState('')
    const [productnameXemChiTiet, setProductnameXemChiTiet] = useState([])
    const [hoadonXemChiTiet, setHoadonXemChiTiet] = useState({})
    const handleXemChiTietDonHangAtShop = async(a) =>{
        setActiveTab('XemChiTietDonHangAtShop')
        const ids = JSON.parse(arrayDonHangAtShop[a].listdonhang_id)
        const array = []
        for (let id of ids) {
            let response = await apiGetDonHangById(id);
            array.push(response.data.response.response);
        }
        
        const array1 = array.map((item) => item.sanpham_id); 
        const array2 = []
        for (let i of array1) {
            let response = await apiGetProductById(i);
            array2.push(response.data.response.response.productname);
        }
        setHoadonXemChiTiet(arrayDonHangAtShop[a])
        setProductnameXemChiTiet(array2)
        setArrayDonHangChiTiet(array)
        setUsernameXemChiTiet(arrayUsername[a])
        setPhonenumberXemChiTiet(arrayPhoneNumber[a])
    }

    // Thanh toán đơn hàng
    const handleThanhToan = async(a) =>{
        let response = await apiEditTTDHById(a)
        alert(response.data.response.msg)
        window.location.reload();
    }
    const handleThanhToanShip = async(a) =>{
        let response = await apiEditTTDHById(a)
        alert(response.data.response.msg)
        window.location.reload();
        setActiveTab('DanhSachDonHangShip')
    }

    // Danh sách đơn hàng cần ship
    const [arrayDonHangShip, setArrayDonHangShip] = useState([]);
    const [arrayUsernameShip, setArrayUsernameShip] = useState([])
    const [nvghList, setNvghList] = useState([])
    const handleGetListDonHangShip = async () => {
        handleTabClick('DanhSachDonHangShip')
    try {
        let response = await apiGetAllHoaDon("Đặt ship");
        setArrayDonHangShip(response.data.hoadons);
        const ids = response.data.hoadons.map((item) => item.khachhang_id);
        const array = [];
        const array2 = []
        for (let id of ids) {
            let response = await apiGetUserInfoById(id);
            array.push(response.data.response.fullname);
            array2.push(response.data.response.phonenumber)
        }
        setArrayUsernameShip(array)
        let nvghs = await apiGetAllNVGH()
        setNvghList(nvghs.data.nvghs)
    } catch (error) {
    }
    };
    useEffect(() => {
    handleGetListDonHangShip();
    }, []);

    // Chọn NVGH
    const [showNVGH, setShowNVGH] = useState(false)
    const [inputNVGHFullnameList, setInputNVGHFullnameList] = useState([])
    const handleGetInputNVGHFullname = (value, index) => {
        setInputNVGHFullnameList((prevList) => {
          const newList = [...prevList];
          newList[index] = value;
          return newList;
        });
      };
    const [nvghChoosen, setNvghChoosen] = useState([])
    const handleXacNhanChonNVGH = async (donhangId, index) => {
        let response = await apiGetNVGHByKey(inputNVGHFullnameList[index]);
        setNvghChoosen(response.data.nvgh);
        let newnvgh_id = await apiEditNVGHId(donhangId, response.data.nvgh.id);
        alert(newnvgh_id.data.response.msg);
        setShowNVGH(true);
      };

    // Xem chi tiết đơn hàng ship
    const handleXemChiTietDonHangShip = async(a) =>{
        setActiveTab('XemChiTietDonHangShip')
        const ids = JSON.parse(arrayDonHangShip[a].listdonhang_id)
        const array = []
        for (let id of ids) {
            let response = await apiGetDonHangById(id);
            array.push(response.data.response.response);
        }
        
        const array1 = array.map((item) => item.sanpham_id); 
        const array2 = []
        for (let i of array1) {
            let response = await apiGetProductById(i);
            array2.push(response.data.response.response.productname);
        }
        setHoadonXemChiTiet(arrayDonHangShip[a])
        setProductnameXemChiTiet(array2)
        setArrayDonHangChiTiet(array)
        setUsernameXemChiTiet(arrayUsernameShip[a])
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

    // Hien thi danh sach khach hang
    const [arrUsers,setArrUsers] = useState({})
    const handleXemDanhSachKH = async() =>{
        setActiveTab('XemDanhSachKH')
        let response = await apiGetAllUsers('ALL')
        setArrUsers(response.data.users)
    }

    // Tim kiem khach hang
    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState({})
    const [errTimKiem, setErrTimKiem] = useState()
    const [inputTimKiemKH, setInputTimKiemKH] = useState('')
    const handleGetInputTimKiemKH = (event) =>{
        setInputTimKiemKH(event.target.value)
    }
    const handleTimKiemKH = async() =>{
        if(inputTimKiemKH === ''){
            setErrTimKiem('Missing input parameter !')
        }else{
        let responses = await apiGetUserByKey(inputTimKiemKH)
        if(responses.data.user === null){
            setErrTimKiem('User is not found !')
            setUserInfo({})
        }else{
        setErrTimKiem('')
        setUserInfo(responses.data.user)
        dispatch(action.getUSerByKey(responses.data.user))
        }
    }
    }

    // Xoa Khach Hang
    const handleXoaKH = async(event)=>{
        event.preventDefault()
        let response= await apiDeleteUser(userInfo.id)
        alert(response.data.response.msg)
        setUserInfo({})
        setInputTimKiemKH('')
    }

    // Them NVGH
    const [fullname, setFullname] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [address, setAddress] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordcf, setPasswordcf] = useState('')
    const handleSetfullname = (event)=>{
        setFullname(event.target.value)
    }
    const handleSetphonenumber = (event)=>{
        setPhonenumber(event.target.value)
    }
    const handleSetaddress = (event)=>{
        setAddress(event.target.value)
    }
    const handleSetusername = (event)=>{
        setUsername(event.target.value)
    }
    const handleSetpassword= (event)=>{
        setPassword(event.target.value)
    }
    const handleSetpasswordcf = (event)=>{
        setPasswordcf(event.target.value)
    }
    const [errMessage, setErrMessage] = useState('')
    const handleSubmit = async(event) =>{
        event.preventDefault()
        if(!fullname || !phonenumber || !address || !username || !password || !passwordcf){
            setErrMessage('Missing input parameters !')
        }else{
        if(passwordcf !== password){
            setErrMessage('Wrong Password !')
        }else{
            let data = await apiCreateNVGH({username, password, fullname, address, phonenumber})
            console.log(data)
            if(data.data.err === 0){
                setActiveTab('QLBGH')
                alert('Create a new account successfully !')
                setFullname(''); setPassword(''); setPasswordcf(''); setUsername('');setAddress(''); setPhonenumber(''); setErrMessage('')
            }   
            if(data.data.err !==0){
                setErrMessage(data.data.msg) 
            }
        }
    }
    }

    // Tim kiem NVGH
    const [inputTimKiemNVGH, setInputTimKiemNVGH] = useState('')
    const [errTimKiemNVGH, setErrTimKiemNVGH] = useState('')
    const [nvghInfo, setNvghInfo] = useState({})

    const handleGetInputTimKiemNVGH = (event) =>{
        setInputTimKiemNVGH(event.target.value)
    }
    const handleTimKiemNVGH = async(event)=>{
        event.preventDefault()
        if(inputTimKiemNVGH === ''){
            setErrTimKiemNVGH('Missing input parameter !')
        }else{
        let nvghInfo = await apiGetNVGHByKey(inputTimKiemNVGH)
        if(nvghInfo.data.nvgh === null){
            setErrTimKiemNVGH('The account is not found !')
            setNvghInfo({})
        }else{
        setNvghInfo(nvghInfo.data.nvgh)
        setErrTimKiemNVGH('')
        }}
    }

    //Hien Thi Danh Sach NVGH
    const [arrNVGHs,setArrNVGHs] = useState({})
    const handleXemDanhSachNVGH = async() =>{
        setActiveTab('XemDSNVGH')
        let response = await apiGetAllNVGH()
        setArrNVGHs(response.data.nvghs)
    }

    // Xoa NVGH 
    const handleXoaNVGH = async(event)=>{
        event.preventDefault()
        let response= await apiDeleteNVGH(nvghInfo.id)
        alert(response.data.response.msg)
        setNvghInfo({})
        setInputTimKiemNVGH('')
    }

    // Chinh sua NVGH
    const [nvghNewFullname, setNvghNewFullname] = useState('')
    const [nvghNewAddress, setNvghNewAddress] = useState('')
    const [nvghNewPhonenumber, setNvghNewPhonenumber] = useState('')
    const [nvghNewUsername, setNvghNewUsername] = useState('')
    const handleGetEditNVGHFullname = (event) =>{  
        setNvghNewFullname(event.target.value)    
    }
    const handleGetEditNVGHAddress = (event) =>{
        setNvghNewAddress(event.target.value)      
    }
    const handleGetEditNVGHPhonenumber = (event) =>{  
        setNvghNewPhonenumber(event.target.value)    
    }
    const handleGetEditNVGHUsername = (event) =>{   
        setNvghNewUsername(event.target.value)   
    }
    const [errEditNVGH, setErrEditNVGH] = useState('')
    const handleXacNhanChinhSuaNVGH = async(event) =>{
        event.preventDefault()
        if(!nvghNewAddress ||!nvghNewAddress ||!nvghNewPhonenumber ||!nvghNewUsername){
            setErrEditNVGH('Missing input paramater !')
        }else{
        let response = await apiEditNVGH(nvghInfo.id, nvghNewFullname, nvghNewAddress, nvghNewPhonenumber, nvghNewUsername)
        alert(response.data.newnvgh.msg)
        setActiveTab('QLBGH')
        setNvghNewAddress('');setNvghNewFullname(''); setNvghNewPhonenumber(""); setNvghNewUsername("")
    }}
    

    // Hien thi danh sach san pham (menu)
    const [arrProducts,setArrProducts] = useState({})
    const handleXemMenu = async() =>{
        setActiveTab('XemMenu')
        let response = await apiGetAllProducts()
        setArrProducts(response.data.products)
    }

    // Tim kiem san pham
    const [inputTimKiemSanPham, setInputTimKiemSanPham] = useState('')
    const [errTimKiemSanPham, setErrTimKiemSanPham] = useState('')
    const [productInfo, setProductInfo] = useState({})
    const handleGetInputTimKiemSanPham = (event) =>{
        setInputTimKiemSanPham(event.target.value)
    }
    const handleTimKiemSanPham = async(event)=>{
        event.preventDefault()
        if(inputTimKiemSanPham === ''){
            setErrTimKiemSanPham('Missing input parameter !')
        }else{
        let product = await apiGetProductByKey(inputTimKiemSanPham)
        if(product.data.product === null){
            setErrTimKiemSanPham('The product is not found !')
            setProductInfo({})
        }else{
        setProductInfo(product.data.product)
        setErrTimKiemSanPham('')
        }
    }
    }

    // Chinh sua san pham 
    const [inputNewProductName, setInputNewProductName] = useState('')
    const [inputNewProductPrice, setInputNewProductPrice] = useState('')
    const handleGetInputNewProductName = (event) =>{
        setInputNewProductName(event.target.value)
    }
    const handleGetInputNewProductPrice = (event) =>{
        setInputNewProductPrice(event.target.value)
    }
    const [errEditProduct, setErrEditProduct] = useState('')
    const handleXacNhanChinhSuaSP = async(event) =>{
        event.preventDefault()
        if(!inputNewProductName ||!inputNewProductPrice ){
            setErrEditProduct('Missing input paramater !')
        }else{
        let response = await apiEditProduct(productInfo.id, inputNewProductName, inputNewProductPrice)
        setErrEditProduct('')
        alert(response.data.newproduct.msg)
        setActiveTab('QLSP')
        setInputNewProductName('')
        setInputCreateProductName('')
    }}
    
    //Them san pham
    const [inputCreateProductName, setInputCreateProductName] = useState('')
    const [inputCreateProductPrice, setInputCreateProductPrice] = useState('')
    const handleGetInputCreateProductName = (event) =>{
        setInputCreateProductName(event.target.value)
    }
    const handleGetInputCreateProductPrice = (event) =>{
        setInputCreateProductPrice(event.target.value)
    }
    const [errCreateProduct, setErrCreateProduct] = useState('')
    const handleThemSP = async(event) =>{
        event.preventDefault()
        if(inputCreateProductName === '' ||inputCreateProductPrice === ''){
            setErrCreateProduct('Missing input parameters!')
        }else{
        let newproduct = await apiCreateProduct(inputCreateProductName, inputCreateProductPrice)
        setErrCreateProduct(newproduct.data.msg)
        setInputCreateProductName('')
        setInputCreateProductPrice('')
        }
    }

    // Xoa san pham 
    const handleXoaSP = async(event)=>{
        event.preventDefault()
        let response= await apiDeleteProduct(productInfo.id)
        alert(response.data.response.msg)
        setProductInfo({})
        setInputTimKiemSanPham('')
    }

    
    return(
        <div className="TrangChuChuCuaHang">
            <div className="Heading">
            <img  className="Img-logo" src={avatar} alt="Logo" />
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
                    <button className= "Atshop-Choose" onClick={()=>{handleTabClick(null)}} >Tại Cửa Hàng</button>
                    <button className="Ship"  onClick={handleGetListDonHangShip} >Đơn Hàng Ship</button>
                    <ul className="DSĐH-AtShop-List">
                        {arrayDonHangAtShop.map((product, index) => (
                            <li key={index}>
                            <div className="DSĐH-AtShop">
                                <div className="DSĐH-AtShop-Info">
                                <h2>Mã Đơn Hàng: {product.id}</h2>
                                <h2>Tổng Tiền: {product.totalprice} VNĐ</h2>
                                <h2>Họ Và Tên Khách Hàng: {arrayUsername[index]}</h2>
                                <h2>Số Điện Thoại: {arrayPhoneNumber[index]}</h2>
                                </div>
                                <div>
                                <button className="XemChiTietDonHangAtShopbtn" onClick={() => handleXemChiTietDonHangAtShop(index)}>Xem Chi Tiết</button>
                                <button className="ThanhToanAtShop1" onClick={() => handleThanhToan(product.id)}>Thanh Toán</button>
                                </div>
                            </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}


            {/* Xem Chi Tiết Hóa Đơn Hàng Thanh Toán Tại Cửa Hàng */}
            {activeTab=== 'XemChiTietDonHangAtShop'&&(
                <div className="HoaDon">
                <h1 className="HoaDon-text">Hóa Đơn </h1>
                <h2 className="HoaDon-info">Họ và Tên Khách Hàng: {usernameXemChiTiet}</h2>
                <h2 className="HoaDon-info">Số Điện Thoại: {phonenumberXemChiTiet}</h2>
                <h2 className="HoaDon-info">Địa Chỉ Nhận Hàng: Tại Cửa Hàng</h2>
                <table className="HoaDon-list">
                    <thead>
                        <tr>
                            <th className="HoaDon-list-info-2">STT</th>
                            <th className="HoaDon-list-info-1">Tên Sản Phẩm</th>
                            <th className="HoaDon-list-info-2">Size</th>
                            <th className="HoaDon-list-info-2">Phần Trăm Đá</th>
                            <th className="HoaDon-list-info-2">Phần Trăm Đường</th>
                            <th className="HoaDon-list-info-2">Số lượng</th>
                            <th className="HoaDon-list-info-1">Thành Tiền (VNĐ)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrayDonHangChiTiet.map((donhang, index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{productnameXemChiTiet[index]}</td>
                            <td>{donhang.size}</td>
                            <td>{donhang.ice}</td>
                            <td>{donhang.sugar}</td>
                            <td>{donhang.quantity}</td>
                            <td>{donhang.price} VNĐ</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <h2 className="HoaDon-info">Tổng Tiền: {hoadonXemChiTiet.totalprice} VNĐ</h2>
                <h2 className="HoaDon-info"> Trạng Thái Đơn Hàng: {hoadonXemChiTiet.trangthaidonhang} </h2>
                <button className="BackToDSĐH-AtShopbtn" onClick={()=>{handleTabClick(null)}}>Back</button>
            </div>
            )}

            {/* Danh Sách Đơn Hàng Ship Cần Xác Nhận */}
            {activeTab === 'DanhSachDonHangShip'&&(
                <div>
                <h1 className="TrangChuBanHang">Cửa Hàng Bán Trà Sữa NTH MilkTea</h1>
                    <button className = "AtShop" onClick={()=>{handleTabClick(null)}} >Tại Cửa Hàng</button>
                    <button className="Ship-Choose"onClick={()=>{handleTabClick('DanhSachDonHangShip')}} >Đơn Hàng Ship</button>
                <ul className="DSĐH-Ship-List">
                    {arrayDonHangShip.map((donhang, index)=>(
                        <li key={index}>
                        <div className="DSĐH-Ship">
                            <div className="DSĐH-Ship-Info">
                                <h2>Mã Đơn Hàng: {donhang.id}</h2>
                                <h2>Tổng Tiền: {donhang.totalprice} VNĐ</h2>
                                <h2>Họ Và Tên Khách Hàng: {arrayUsernameShip[index]} ({donhang.shippingphone})</h2>
                                <h2> Địa Chỉ Giao Hàng: {donhang.shippingaddress}</h2>
                                <h2> Trạng Thái Đơn Hàng: {donhang.trangthaidonhang}</h2>
                                {showNVGH && (
                                    <h3>Nhân Viên Giao Hàng: {nvghChoosen.fullname} (Mã Nhân Viên: {nvghChoosen.id}, SĐT: {nvghChoosen.phonenumber})</h3>
                                )}
                            </div>
                            <div className="DSĐH-Ship-btn">
                                    <div className="Shipper-LuaChon">
                                    <select value={inputNVGHFullnameList[index]} onChange={(e) => handleGetInputNVGHFullname(e.target.value, index)} className="Shipper-LuaChon-Select">
                                        <option disabled>Chọn Nhân Viên Giao Hàng</option>
                                        {nvghList.map((nvgh, index) => (
                                            <option key={index}>{nvgh.fullname}</option>
                                        ))}
                                    </select>
                                        <i key={index} class="fa-solid fa-check-to-slot" onClick={() =>handleXacNhanChonNVGH(donhang.id, index)}></i>
                                    </div>
                                <button className="XemChiTietDonHangShipbtn" onClick={() => handleXemChiTietDonHangShip(index)} >Xem Chi Tiết</button>
                                <button className="ThanhToanShip" onClick={() => handleThanhToanShip(donhang.id)}>Thanh Toán</button>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            )}
            {/* Xem Chi Tiết Hóa Đơn Hàng Đặt Ship */}
            {activeTab=== 'XemChiTietDonHangShip'&&(
                <div className="HoaDon">
                <h1 className="HoaDon-text">Hóa Đơn</h1>
                <h2 className="HoaDon-info">Họ và Tên Khách Hàng: {usernameXemChiTiet}</h2>
                <h2 className="HoaDon-info">Số Điện Thoại: {hoadonXemChiTiet.shippingphone}</h2>
                <h2 className="HoaDon-info">Địa Chỉ Nhận Hàng: {hoadonXemChiTiet.shippingaddress}</h2>
                <table className="HoaDon-list">
                    <thead>
                        <tr>
                            <th className="HoaDon-list-info-2">STT</th>
                            <th className="HoaDon-list-info-1">Tên Sản Phẩm</th>
                            <th className="HoaDon-list-info-2">Size</th>
                            <th className="HoaDon-list-info-2">Phần Trăm Đá</th>
                            <th className="HoaDon-list-info-2">Phần Trăm Đường</th>
                            <th className="HoaDon-list-info-2">Số lượng</th>
                            <th className="HoaDon-list-info-2">Thành Tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrayDonHangChiTiet.map((donhang, index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{productnameXemChiTiet[index]}</td>
                            <td>{donhang.size}</td>
                            <td>{donhang.ice}</td>
                            <td>{donhang.sugar}</td>
                            <td>{donhang.quantity}</td>
                            <td>{donhang.price} VNĐ</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <h2 className="HoaDon-info">Tổng Tiền : {hoadonXemChiTiet.totalprice - hoadonXemChiTiet.shippingcost} VNĐ</h2>
                <h2 className="HoaDon-info"> Trạng thái đơn hàng : {hoadonXemChiTiet.trangthaidonhang} </h2>
                <h2 className="HoaDon-info"> Tiền ship : {hoadonXemChiTiet.shippingcost} VNĐ</h2>
                <h2 className="HoaDon-info"> Tổng Tiền Đơn Hàng : {hoadonXemChiTiet.totalprice} VNĐ</h2>
                <button className="BackToDSĐH-AtShopbtn" onClick={()=>{handleTabClick('DanhSachDonHangShip')}}>Back</button>
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
                            placeholder="Tên Đăng Nhập"
                            value = {inputTimKiemKH}
                            onChange={handleGetInputTimKiemKH}
                        />
                        <i class="fa-solid fa-magnifying-glass" onClick={handleTimKiemKH}></i>
                    </div>
                    <div style={{color: '#e80889', paddingLeft: '43%'}}>
                        <h2>{errTimKiem}</h2>
                    </div>
                    <div>
                        <h2 className="KH-info">Tên Tài Khoản : {userInfo.username} </h2>
                        <h2 className="KH-info">Họ Và Tên : {userInfo.fullname}</h2>
                        <h2 className="KH-info">Số Điện Thoại : {userInfo.phonenumber} </h2>
                        <h2 className="KH-info">Địa Chỉ : {userInfo.address} </h2>
                    </div>

                    <div className="QLKHbtn">
                        <button className="XemLichSuMuaHangbtn" onClick={()=>{handleTabClick('XemLichSuMuaHang')}}>
                            Xem lịch sử mua hàng
                        </button>
                        <button className="XoaKHbtn" onClick={handleXoaKH} >
                            Xóa Khách Hàng
                        </button>
                    </div> 
                    <button className="XemDanhSachKHbtn" onClick={handleXemDanhSachKH}>
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
                        {Array.isArray(arrUsers) &&
                            arrUsers.map((item, index) => (
                            <li key={index}>
                                <div className="DSKH-list-elements">
                                    <div className="DSKH-list-elements-info">
                                        <h2>Tên Tài Khoản: {item.username}</h2>
                                        <h2>Họ Và Tên Khách Hàng: {item.fullname}</h2>
                                    </div>
                                    <div className="DSKH-list-elements-info">
                                        <h2>Số Điện Thoại: {item.phonenumber}</h2>
                                        <h2>Địa Chỉ: {item.address} </h2>
                                    </div>
                                </div>
                        </li>
                        ))}
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
                            Back
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
                    <button className="BackToQLDHbtn" onClick={()=>{handleTabClick('XemChiTietDonHangDaMua')}}>Back</button>
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
                            placeholder="Họ và tên"
                            value ={inputTimKiemNVGH}
                            onChange={handleGetInputTimKiemNVGH}
                        />
                        <i class="fa-solid fa-magnifying-glass"
                        onClick={handleTimKiemNVGH}></i>
                    <div style={{color: '#e80889', paddingLeft: '43%'}}>
                        <h2>{errTimKiemNVGH}</h2>
                    </div>
                    </div>
                    <div>
                        <h2 className="NVGH-info">Mã Nhân Viên : {nvghInfo.id} </h2>
                        <h2 className="NVGH-info">Họ Và Tên : {nvghInfo.fullname}</h2>
                        <h2 className="NVGH-info">Số Điện Thoại : {nvghInfo.phonenumber} </h2>
                        <h2 className="NVGH-info">Địa chỉ : {nvghInfo.address} </h2>
                        <h2 className="NVGH-info">Tên tài khoản : {nvghInfo.username} </h2>
                        <button className="XemLichSuGiaoHangbtn" onClick={()=> handleTabClick('XemLichSuGiaoHang')}>
                            Xem lịch sử giao hàng
                        </button>
                    </div>
                    <div className="XoaThemNVGH">
                        <button className="XoaNVGHbtn" onClick = {handleXoaNVGH}>
                            Xóa NVGH
                        </button>
                        <button className="ThemNVGHbtn" onClick={() => handleTabClick('ThemNVGH')}>
                            Thêm NVGH
                        </button>
                        <button className="ChinhSuaNVGHbtn" onClick={() => handleTabClick('ChinhSuaNVGH')}>
                            Chỉnh Sửa NVGH
                        </button>
                        <button className="XemDSNVGHbtn" onClick={handleXemDanhSachNVGH}>
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
                            Back
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
                    <button className="BackToQLDHbtn" onClick={()=>{handleTabClick('XemChiTietDonHangDaGiao')}}>Back</button>
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
                                value={fullname}
                                onChange={handleSetfullname}
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
                                value={phonenumber}
                                onChange={handleSetphonenumber}
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
                                value={address}
                                onChange={handleSetaddress}
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
                                value={username}
                                onChange={handleSetusername}
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
                                value={password}
                                onChange={handleSetpassword}
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
                                value={passwordcf}
                                onChange={handleSetpasswordcf}
                            />
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <div style={{color: '#e80889', textAlign: 'center'}}>
                            {errMessage}
                        </div>
                        <button className="ConfirmThemNVGH" onClick={handleSubmit}>
                            Xác Nhận
                        </button>
                    </form>
                </div>
            )}
            
            {/* Chỉnh Sửa NVGH */}
            {activeTab === 'ChinhSuaNVGH' && (
                <div>
                    <div>
                        <h1 className="ChinhSuaNVGH-text">Chỉnh sửa Nhân Viên Giao Hàng</h1>
                        <div className="ChinhSuaNVGH-elements">
                            <h2 className="ChinhSuaNVGH-elements-text">Mã Nhân Viên : {}</h2>
                            <h2 className="ChinhSuaNVGH-elements-id">{nvghInfo.id}</h2>
                        </div>
                        <div className="ChinhSuaNVGH-elements">
                            <h2 className="ChinhSuaNVGH-elements-text">Họ Và Tên : </h2>
                            <input type="text" className = "ChinhSuaNVGH-elements-input" placeholder={nvghInfo.fullname} value={nvghNewFullname} onChange={handleGetEditNVGHFullname}></input>
                        </div>
                        <div className="ChinhSuaNVGH-elements">
                            <h2 className="ChinhSuaNVGH-elements-text">Số Điện Thoại : </h2>
                            <input type="text" className = "ChinhSuaNVGH-elements-input" placeholder={nvghInfo.phonenumber} value={nvghNewPhonenumber} onChange={handleGetEditNVGHPhonenumber} ></input>
                        </div>
                        <div className="ChinhSuaNVGH-elements">
                        <h2 className="ChinhSuaNVGH-elements-text">Địa chỉ : </h2>
                            <input type="text" className = "ChinhSuaNVGH-elements-input" placeholder={nvghInfo.address} value={nvghNewAddress} onChange={handleGetEditNVGHAddress}></input>
                        </div>
                        <div className="ChinhSuaNVGH-elements">
                            <h2 className="ChinhSuaNVGH-elements-text">Tên Tài Khoản :</h2>
                            <input type="text" className = "ChinhSuaNVGH-elements-input" placeholder={nvghInfo.username} value={nvghNewUsername} onChange={handleGetEditNVGHUsername}></input>
                        </div>
                        
                        <button className="ConfirmChinhSuaNVGHbtn" onClick={handleXacNhanChinhSuaNVGH} >
                            Xác Nhận 
                        </button>
                        <button 
                        className="BackToQLBGHbtn" 
                        onClick={()=>{handleTabClick('QLBGH')}}>
                            Back
                        </button>
                    </div>
                    
                </div>
            )}

            {/* Xem Danh Sách NVGH */}
            {activeTab === 'XemDSNVGH' && (
                <div className="DanhSachNVGH">
                    <h1 className="DSNVGH-text">Danh Sách Nhân Viên Giao Hàng</h1>
                    <ul className="DSNVGH-list">
                    {Array.isArray(arrNVGHs) &&
                            arrNVGHs.map((item, index) => (
                            <li key={index}>
                            <div className="DSNVGH-list-elements">
                                <div className="DSNVGH-list-elements-info">
                                    <h2>Mã NVGH: {item.id}</h2>
                                    <h2>Họ và Tên: {item.fullname}</h2>
                                    <h2>Tên Đăng Nhập: {item.username}</h2>
                                    <h2>Địa chỉ: {item.address}</h2>
                                    <h2>Số Điện Thoại: {item.phonenumber}</h2>
                                </div>
                                <button 
                                className="XemChiTietNVGHbtn"
                                onClick={()=>{handleTabClick('XemLichSuGiaoHang')}}
                                >Xem lịch sử giao hàng</button>
                            </div>
                        </li>
                        ))}
                        </ul>
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
                            value = {inputTimKiemSanPham}
                            onChange={handleGetInputTimKiemSanPham}
                        />
                        <i class="fa-solid fa-magnifying-glass" onClick={handleTimKiemSanPham}></i>
                    </div>
                    <div style={{color: '#e80889', paddingLeft: '43%'}}>
                        <h2>{errTimKiemSanPham}</h2>
                    </div>
                    <div className="SP">
                        <img src={productInfo.productimagineurl} className="SP-img"/>
                        <div className="SP-info">
                                <h1 id="TenSP" className="SP-text-name" >Tên Sản Phẩm: {productInfo.productname}</h1>
                                <h2 id="GiaSP" className="SP-text" >Giá tiền: {productInfo.productprice} VNĐ</h2>
                                <p className="SP-text">Lưu ý: ( Giá tiền ứng với size S, tăng 5000 VNĐ khi tăng 1 size )</p>
                                <h2 id="SizeSP" className="SP-text">Size: M, L, XL</h2>
                                <h2 id="PhanTramDuongSP" className="SP-text">Phần Trăm Đường: 50%, 70%, 100% </h2>
                                <h2 id="PhanTramDaSP" className="SP-text">Phần trăm đá: 0%, 50%, 100%</h2>
                                <h2 id="ToppingSP" className="SP-text">Các loại Topping: Trân châu trắng, Trân châu đen, Trân châu sợi, Thạch Đào,...</h2>
                        </div>
                    </div>
                    <button className="XemMenubtn" onClick={handleXemMenu}>
                            Xem MENU
                    </button>
                    <div>
                        <button className="XoaSPbtn" onClick={handleXoaSP}>
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
                    {Array.isArray(arrProducts) &&
                        arrProducts.map((item, index) => (
                            <li key={index}>
                            <div className="MenuCuaHang-list-elements">
                                <img src={item.productimagineurl} className="MenuCuaHang-SP-img" />
                                <div className="MenuCuaHang-SP-info">
                                    <div>
                                        <h1 id="TenSP" className="MenuCuaHang-text-name" >Tên Sản Phẩm: {item.productname}</h1>
                                        <h2 id="GiaSP" className="MenuCuaHang-SP-text" >Giá tiền: {item.productprice} VNĐ</h2>
                                        <h2 id="SizeSP" className="MenuCuaHang-SP-text">Size: M, L, XL</h2>
                                        <h2 id="PhanTramDuongSP" className="MenuCuaHang-SP-text">Phần Trăm Đường: 50%, 70%, 100% </h2>
                                        <h2 id="PhanTramDaSP" className="MenuCuaHang-SP-text">Phần trăm đá: 0%, 50%, 100%</h2>
                                        <h2 id="ToppingSP" className="MenuCuaHang-SP-text">Các loại Topping: Trân châu trắng, Trân châu đen, Trân châu sợi, Thạch Đào,...</h2>
                                    </div>
                                </div>
                                <button 
                                    className="ChinhSuaSanPham2btn"
                                    onClick={()=>{handleTabClick('ChinhSuaSanPham')}}
                                >Chỉnh Sửa</button>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Chỉnh sửa sản phẩm */}
            {activeTab === 'ChinhSuaSanPham' && (
                <div>
                    <h1 className="ChinhSuaSanPham-text">Chỉnh Sửa Sản Phẩm</h1>
                    <div style={{color: '#e80889', paddingLeft: '43%'}}>
                        <h2>{errEditProduct}</h2>
                    </div>
                    <div className="SP">
                        <div className="SP-upload-img">
                                <img src={productInfo.productimagineurl} className="SP-img" />
                                <i class="fa-solid fa-upload"></i>
                                <span className="fa-upload-decribe">Upload Product Imagine</span>
                            </div>
                        <div className="SP-info">
                                <div id="TenSP" className="SP-text-name">
                                    <h1 id="TenSP" className="SP-text-name" >Tên Sản Phẩm:</h1>
                                    <input type="text" className = "SP-text-value" placeholder ={productInfo.productname} value={inputNewProductName} onChange={handleGetInputNewProductName}></input>
                                </div>
                                <div className="SP-text-price">
                                    <h2 id="GiaSP" className="SP-text" >Giá tiền: {}</h2>
                                    <input type="text" placeholder={productInfo.productprice} className="SP-price-value" value={inputNewProductPrice} onChange={handleGetInputNewProductPrice} ></input>
                                    <h2 id="GiaSP" className="SP-text" >VNĐ</h2>
                                </div>
                                <h2 id="SizeSP" className="SP-text">Size: M, L, XL</h2>
                                <h2 id="PhanTramDuongSP" className="SP-text">Phần Trăm Đường: 50%, 70%, 100% </h2>
                                <h2 id="PhanTramDaSP" className="SP-text">Phần trăm đá: 0%, 50%, 100%</h2>
                                <h2 id="ToppingSP" className="SP-text">Các loại Topping: Trân châu trắng, Trân châu đen, Kem Cheese</h2>
                        </div>
    
                    </div>
                    <button className="XacNhanChinhSuaSPbtn" onClick={handleXacNhanChinhSuaSP}>
                        Xác Nhận
                    </button>
                    <button 
                        className="BackToMenubtn"
                        onClick={()=>{handleTabClick('QLSP')}}    
                    >Back
                    </button>
                </div>
            )}

            {/* Thêm Sản Phẩm */}
                {activeTab ==='ThemSP' &&(
                    <div className="ThemSP">
                        <h1 className="ThemSP-text">Thêm Sản Phẩm</h1>
                        <div style={{color: '#e80889', textAlign: 'center'}}>
                            {errCreateProduct}
                        </div>
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
                                            value = {inputCreateProductName}
                                            onChange = {handleGetInputCreateProductName}
                                            />
                                    <div id="TenSP" className="DienGiaSanPham">
                                        <h2>Giá tiền: {}</h2>
                                        <input 
                                            id="GiaSPMoi"
                                            className="GiaSPMoi"
                                            name="GiaSPMoi"
                                            placeholder="VNĐ"
                                            value = {inputCreateProductPrice}
                                            onChange={handleGetInputCreateProductPrice}
                                    />       
                                    </div>
                                        <h2 id="SizeSP" className="SP-text">Size: M, L, XL</h2>
                                        <h2 id="PhanTramDuongSP" className="SP-text">Phần Trăm Đường: 50%, 70%, 100% </h2>
                                        <h2 id="PhanTramDaSP" className="SP-text">Phần trăm đá: 0%, 50%, 100%</h2>
                                        <h2 id="ToppingSP" className="SP-text">Các loại Topping: Trân châu trắng, Trân châu đen, Kem Cheese</h2>
                                    </div>
                            </div>
                        </div>
                        <button className="Confirm-ThemSP" onClick={handleThemSP}>Cập Nhật</button>
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
                    <button className="BackToQLDHbtn" onClick={()=>{handleTabClick('QLĐH')}}>Back</button>
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
                            Back
                        </button>
                    </div>
                </div>
            )}
        </div>    
    )
}

export default TrangChuChuCuaHang