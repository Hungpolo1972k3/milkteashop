import React,{useState} from "react"
import { Link } from 'react-router-dom';
import avatar from "./Avatar.png"
import "./DangKy.css"
function DangKy(){

    const [showPassword, setShowPassword] = useState(false);
    return(
        <div>
            <div className='DangKy'>
                <img className="Avatar-DangKy" src={avatar} alt="Avatar" />
                <div className='DangKy-form'>
                    <h1 className='title'>ĐĂNG KÝ</h1>
                    <form>
                        <div>
                            <label htmlFor='Fullname' className='form-label'>
                                Họ và tên
                            </label>
                            <input
                                id='Fullname'
                                className='form-text'
                                type='text'
                                name='Fullname'
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <label htmlFor='Phonenumber' className='form-label'>
                                Số điện thoại
                            </label>
                            <input
                                id='Phonenumber'
                                className='form-text'
                                type='text'
                                name='Phonenumber'
                                placeholder="Phone Number"
                            />
                        </div>
                        <div>
                            <label htmlFor='Birthday' className='form-label'>
                                Ngày sinh
                            </label>
                            <input
                                id='Birthday'
                                className='form-text'
                                type='date'
                                name='Birthday'
                                placeholder="Birthday"
                            />
                        </div>
                        <div>
                            <label htmlFor='Address' className='form-label'>
                                Địa chỉ thường trú
                            </label>
                            <input
                                id='Address'
                                className='form-text'
                                type='text'
                                name='Address'
                                placeholder="Address"
                            />
                        </div>
                        <div>
                            <label htmlFor='Username' className='form-label'>
                                Username
                            </label>
                            <input
                                id='Username'
                                className='form-text'
                                type='text'
                                name='Username'
                                placeholder="Tên Đăng Nhập"
                            />
                        </div>
                        <div>
                            <label htmlFor='Password' className='form-label'>
                                Password
                            </label>
                            <div className="CfPw">
                                <input
                                    id='Password'
                                    className='form-text'
                                    type={showPassword ? 'text': 'password'}
                                    name='Password'
                                    placeholder="Mật Khẩu"
                                />
                                <i 
                                className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                                onClick={() => setShowPassword(!showPassword)}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='ConfirmPassword' className='form-label'>
                                Confirm Password
                            </label>
                            <div className="CfPw">
                                <input
                                    id='ConfirmPassword'
                                    className='form-text'
                                    type={showPassword ? 'text': 'password'}
                                    name='ConfirmPassword'
                                    placeholder="Nhập Lại Mật Khẩu"
                                />
                                <i 
                                className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                                onClick={() => setShowPassword(!showPassword)}
                                />
                            </div>
                        </div>
                        <button type="DangKy" className="DangKybtn">Đăng Ký</button>
                        <Link to="/" className="LinktoDangNhapbtn">Nếu đã có tài khoản thì bấm vô đấy nhé !</Link>
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
export default DangKy