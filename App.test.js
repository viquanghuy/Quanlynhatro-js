import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('hiển thị màn hình đăng nhập mặc định', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/đăng nhập/i)).toBeInTheDocument();
});

test('chuyển đến trang chọn vai trò', () => {
  render(
    <MemoryRouter initialEntries={['/chonvaitro']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/chọn vai trò/i)).toBeInTheDocument();
});
