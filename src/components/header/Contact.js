import React from 'react'
import './Contact.css'
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

export default function Contact() {

  const TextChange = styled.p`
    color: ${({ theme }) => theme.textColor};
  `;
  return (
    <div className='contact_form'>
      <form>
        <div>
          <h3><TextChange>Contact Form</TextChange></h3>
        </div>
        <div className='box'>
          <input
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className='box'>
          <input
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className='box'>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
          />
        </div>
        <div className='box'>
          <input
            type="text"
            name="message"
            placeholder="Messages"
          />
        </div>
        <div className='box'>
          <button>Submit Contact</button>
          <h2><TextChange>Thank You for your information. Your commentation is our pleasurable.</TextChange></h2>
        </div>
      </form>
    </div>
  );
}