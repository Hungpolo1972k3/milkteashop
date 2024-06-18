import { Route, Routes } from 'react-router-dom'
import DangNhap from "./containers/Public/DangNhap"
import DangKy from "./containers/Public/DangKy"
import TrangChuChuCuaHang from "./containers/Public/TrangChuChuCuaHang"
import TrangChuBenGiaoHang from "./containers/Public/TrangChuBenGiaoHang"
import TrangChuKhachHang from "./containers/Public/TrangChuKhachHang"
import {path} from './utils/constant'

function App() {
  return (
      <div>
        <Routes>
          <Route path={path.DANGNHAP} element={<DangNhap />} />
          <Route path={path.DANGKY} element={<DangKy />} />
          <Route path={path.CHUCUAHANG} element={<TrangChuChuCuaHang />} />
          <Route path={path.BENGIAOHANG} element={<TrangChuBenGiaoHang />} />
          <Route path={path.KHACHHANG} element={<TrangChuKhachHang />} />
        </Routes>
      </div>
  );
}

export default App;