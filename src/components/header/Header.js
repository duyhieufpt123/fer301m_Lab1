import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const TextChange = styled.p`
  color: ${({ theme }) => theme.textColor};
`;
const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="/logo192.png" /></Link>
                {/* <Link to="/movies/popular" style={{textDecoration: "none"}}><TextChange><span>Popular</span></TextChange></Link> */}
                {/* <Link to="/movies/top rated" style={{textDecoration: "none"}}><TextChange><span>Top Rated</span></TextChange></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><TextChange><span>Upcoming</span></TextChange></Link> */}
                <Link to="/contact" style={{textDecoration: "none"}}><TextChange><span>Contact Us</span></TextChange></Link>
                <Link to="/movies/details" style={{textDecoration: "none"}}><TextChange><span>Movies Details</span></TextChange></Link>
            </div>
        </div>
    )
}

export default Header