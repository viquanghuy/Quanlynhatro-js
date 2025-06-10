import React, { useState } from 'react';

function RegisterPage({ onRegisterSuccess }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Mật khẩu không khớp!');
      return;
    }

    // Tạm thời chỉ in ra console, sau này kết nối API
    console.log('Thông tin đăng ký:', form);
    alert('Đăng ký thành công!');
    onRegisterSuccess(); // Gọi callback để chuyển sang chọn vai trò
  };

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Đăng ký tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Họ tên" value={form.name} onChange={handleChange} required />
        <br /><br />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <br /><br />
        <input type="password" name="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} required />
        <br /><br />
        <input type="password" name="confirmPassword" placeholder="Xác nhận mật khẩu" value={form.confirmPassword} onChange={handleChange} required />
        <br /><br />
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}

export default RegisterPage;