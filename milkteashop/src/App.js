import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DangNhap from './DangNhap/DangNhap';
import DangKy from './DangKy/DangKy';
import TrangChuChuCuaHang from './ChuCuaHang/TrangChu/TrangChuChuCuaHang';
import TrangChuBenGiaoHang from './BenGiaoHang/TrangChu/TrangChuBenGiaoHang';
import TrangChuKhachHang from './KhachHang/TrangChuKhachHang';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DangNhap />} />
          <Route path="/dangky" element={<DangKy />} />
          <Route path="/chucuahang" element={<TrangChuChuCuaHang />} />
          <Route path="/bengiaohang" element={<TrangChuBenGiaoHang />} />
          <Route path="/khachhang" element={<TrangChuKhachHang />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App