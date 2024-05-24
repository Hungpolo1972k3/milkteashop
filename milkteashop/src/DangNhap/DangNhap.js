import React, {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import avatar from "./Avatar.png"
import "./DangNhap.css"

function DangNhap(){

    const [showPassword, setShowPassword] = useState(false);

    // Kiểm tra Tài Khoản Chủ Cửa Hàng
    const DangNhapCCH = useNavigate();
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const handleLogin = () => {
        // Kiểm tra thông tin đăng nhập
        if (
          usernameInput === 'NguyenThoHung' &&
          passwordInput === '0123456789'
        ) DangNhapCCH("/chucuahang");
    } 
    
    return(
       <div>
        <div className='DangNhap'>
            <img className="Avatar-DangNhap" src={avatar} alt="Avatar" />
            <div className='DangNhap-form'>
                <h1 className='title'>ĐĂNG NHẬP</h1>
                <form>
                    <div>
                        <label htmlFor='Username' className='form-label'>
                            Username
                        </label>
                        <input
                            id='Username'
                            className='form-text'
                            type='text'
                            name='username'
                            placeholder="Tên Đăng Nhập"
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                            
                        />
                    </div>
                    <div>
                        <label htmlFor='Password' className='form-label'>
                            Password
                        </label>
                        <input
                            id='Password'
                            className='form-text'
                            type= {showPassword ? 'text': 'password'}
                            name='password'
                            placeholder="Mật Khẩu"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                        />    
                        <i 
                            className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                        </i>
                    </div>
                    <button type="DangNhap" className="DangNhapbtn" onClick={handleLogin}>Đăng Nhập</button>
                    <Link to={"/dangky"} 
                        className="LinktoDangKy"
                    >Nếu chưa có tài khoản thì bấm vô đấy nhé !</Link>
                </form>
            </div>
        </div>
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
export default DangNhap