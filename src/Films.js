import React from "react";
import { useState } from 'react';
import { Films } from '../share under/ListOfFilms';
export default function Films1() {
    const [film, setFilm] = useState([])
    return (
        <div className="container">
            {Films.map((film) => (
                <div className='column'>
                    <div className='card'>
                        <img src={film.img} />
                        <h3>{film.title}</h3>
                        <p className="title">{film.year}</p>
                        <p className="title">{film.nation}</p>
                        <p><button className="b1">Watch Now!</button>   <button className="b2">Trailer</button></p>
                        <p> <button className='button' onClick={()=>{setFilm(film)}}><a href='#popup1' id='openPopUp'>Movies Summary</a></button> </p>
                    </div>
                </div>
            ))}
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={film.img}></img>
                    <h2>{film.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {film.info}
                    </div>
                </div>
            </div>
        </div>
    )
}
