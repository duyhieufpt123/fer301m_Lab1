import React, { Component } from 'react'
import ReactSwitch from "react-switch";
import { createContext, useState } from "react";
import { FaGlasses } from "react-icons/fa";
export const ThemeContext = createContext(null);
export default function Navigation() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (
        <nav>
            <ul>
                <ThemeContext.Provider value={{ theme, toggleTheme }}>
                    <li><a className='active' href='#home'>Home</a></li>
                    <li><a className='active' href='#news'>Film Series</a></li>
                    <li><a className='active' href='#about'>Trailer</a></li>
                    <li><a className='active' href='#contact'>TOP MOVIES</a></li>
                    <div className="App" id={theme}>
                        <div className="switch">
                            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                            <input className='search' type="text" placeholder="Search" />
                        </div>
                        
                    </div>

                </ThemeContext.Provider>
            </ul>

        </nav>
    )
}
