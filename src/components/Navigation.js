import React, { Component } from 'react'
export default function Navigation() {
        return (
                <nav>
                    <ul>
                        <li><a className='active' href='#home'>Home</a></li>
                        <li><a href='#news'>Film Series</a></li>
                        <li><a href='#about'>Trailer</a></li>
                        <li><a href='#contact'>TOP MOVIES</a></li>
                        <input className='search' type="text" placeholder="Search"/>
                    </ul>
                    
                </nav>
        )
    }
