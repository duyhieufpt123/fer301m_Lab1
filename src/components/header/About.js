import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import './About.css'
export default function Contact() {
    const TextChange = styled.p`
  color: ${({ theme }) => theme.textColor};
`;
  return (
    <TextChange>
        <div className="about">
                <div className="about_content">
                    <p>LAB DESIGN BY: BUI DUY HIEU</p>
                    <p>ID: SE161109</p>
                    <p>FPT UNIVERSITY</p>
                    <p>MENTOR: MR.NGUYEN MINH SANG</p>
                    <p>JAVA SCRIPT - REACT - HTML - CSS</p>
                </div>
                <div className="logo">
                    <img src="./logo192.png"/>
                    <img src="data:image/png;base64,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"/>
                </div>
        </div>
    <div className="contact">
      
        <div className="content">
        <h3 className="c1">
        Chăm sóc khách hàng
        <br />
        <p className="i">
          Hotline: 1900 6017
          <br />
          Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
          <br />
          Email hỗ trợ: hoidap@cgv.vn
          <br />
        </p>
      </h3>
      </div>
      <div className="content">
        <h3 className="c2">
        Điều khoản sử dụng
        <br />
        <p className="i">
          Tiện Ích Online/Thẻ Quà Tặng/Tuyển Dụng/Liên Hệ Quảng Cáo CGV
          <br />
          Điều khoản sử dụng
          <br />
          Điều Khoản Chung/Điều Khoản Giao Dịch/Chính Sách Thanh Toán/Chính Sách
          Bảo Mật
          <br />
          Câu Hỏi Thường Gặp
          <br />
        </p>
      </h3>
      </div>
      <div className="content">
        <h3 className="c3">
        CGV Việt Nam
        <br />
        <p className="i">
          Giới Thiệu
          <br />
          Tiện Ích
          <br />
          Online
          <br />
          Thẻ Quà Tặng
          <br />
          <br />
          <br />
        </p>
      </h3>
      </div>
      
    </div>
    </TextChange>
  );
}