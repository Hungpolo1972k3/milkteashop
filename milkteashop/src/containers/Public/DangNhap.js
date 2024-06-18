import React, {useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import { apiLogin } from "../../services/Khachhang";
import {apiLoginnvgh} from "../../services/Bengiaohang"
import avatar from "../../assets/Avatar.png"
import "./DangNhap.css"
import { useDispatch } from 'react-redux';
import * as action from "../../store/actions"

function DangNhap(){    
    const [showPassword, setShowPassword] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSetUsername = (event) =>{
        setUsername(event.target.value)
    }
    const handleSetPassword = (event) =>{
        setPassword(event.target.value)
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [errMessage, setErrMessage] = useState('')

    const [showDangNhap, setShowDangNhap] = useState(true)
    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!username || !password){
            setErrMessage("Missing inpput parameters !")
        }else{
            let data = await apiLogin({username, password})
            if(data.data.err === 0){
                dispatch(action.login(username))
                navigate('/khachhang')
            }   
            if(data.data.err !==0){
                setErrMessage(data.data.msg) 
            }
        }
    }  
    const handleLinkToDangNhapBGH = () =>{
        setShowDangNhap(false)
    }
    const handleLinkToDangNhapKH = () =>{
        setShowDangNhap(true)
    }

    const [usernamenvgh, setUsernamenvgh] = useState('');
    const [passwordnvgh, setPasswordnvgh] = useState('');

    const [errMessage1, setErrMessage1] = useState('')
    const handleSetUsernameNVGH = (event) =>{
        setUsernamenvgh(event.target.value)
    }
    const handleSetPasswordNVGH = (event) =>{
        setPasswordnvgh(event.target.value)
    }


    const handleSubmitNVGH = async(event) =>{
        event.preventDefault();
        if(!usernamenvgh || !passwordnvgh){
            setErrMessage1("Missing input parameters !")
        }else{
            let data1 = await apiLoginnvgh({usernamenvgh, passwordnvgh})
            if(data1.data.err === 0){
                dispatch(action.login(usernamenvgh))
                navigate('/bengiaohang')
            }   
            if(data1.data.err !==0){
                setErrMessage1(data1.data.msg) 
            }
        }    
    } 
    return(
       <div>
            {showDangNhap &&(
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
                                value={username}
                                onChange={handleSetUsername}
                                
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
                                value={password}
                                onChange={handleSetPassword}
                            />    
                            <i 
                                className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                            </i>
                        </div>
                        <div style={{color: '#e80889', paddingTop: 15, paddingLeft: 20}}>
                            {errMessage}
                        </div>
                        <button type= "submit" className="DangNhapbtn" onClick={handleSubmit} >Đăng Nhập</button>
                        <Link to={"/dangky"} 
                            className="LinktoDangKy"
                        >Nếu chưa có tài khoản thì bấm vô đấy nhé !</Link>
                        <p className="LinktoDangNhapBGH" onClick={handleLinkToDangNhapBGH}>Đăng nhập với bên giao hàng</p>
                    </form>
                </div>
            </div>
            )}
            {!showDangNhap && (
                <div className='DangNhap'>
                <img className="Avatar-DangNhap" src={avatar} alt="Avatar" />
                <div className='DangNhap-form'>
                    <h1 className='title'>ĐĂNG NHẬP</h1>
                    <h2 className="title-2"> Bên Giao Hàng</h2>
                    <form>
                        <div>
                            <label className='form-label'>
                                Username
                            </label>
                            <input
                                id='Username'
                                className='form-text'
                                type='text'
                                placeholder="Tên Đăng Nhập"
                                value={usernamenvgh}
                                onChange={handleSetUsernameNVGH}
                                
                            />
                        </div>
                        <div>   
                            <label  className='form-label'>
                                Password
                            </label>
                            <input
                                id='Password'
                                className='form-text'
                                type= {showPassword ? 'text': 'password'}
                                placeholder="Mật Khẩu"
                                value={passwordnvgh}
                                onChange={handleSetPasswordNVGH}
                            />    
                            <i 
                                className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                            </i>
                        </div>
                        <div style={{color: '#e80889', paddingTop: 15, paddingLeft: 20}}>
                            {errMessage1}
                        </div>
                        <button type= "submit" className="DangNhapbtn" onClick={handleSubmitNVGH} >Đăng Nhập</button>
                        <p className="LinktoDangNhapKH" onClick={handleLinkToDangNhapKH}>Trở lại trang đăng nhập</p>
                    </form>
                </div>
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
export default DangNhap;