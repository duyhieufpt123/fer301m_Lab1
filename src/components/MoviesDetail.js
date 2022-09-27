import React from "react";
import { useState } from 'react';
import { Films } from '../share under/ListOfFilms';
import { FaStar } from "react-icons/fa";
export default function Films1() {
    const [film, setFilm] = useState([])
    return (
        <div className="container">
            
            {Films.map((film) => (
                <div className='column'>
                    <div className='card'>
                    <h2 className="trending">Recommend to you!</h2>
                        <img src={film.img} />
                        <h3>{film.title}</h3>
                        <p>Star Rate:<FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <p className="title">Year: {film.year}</p>
                        <p className="title">Nation: {film.nation}</p>
                        <p><button className="b1">Watch Now!</button>   <button className="b2">Trailer</button></p>
                        <p> <button className='b3' onClick={() => { setFilm(film) }} id='openPopUp'><a href='#popup1' id='openPopUp'>Movies Summary</a></button> </p>
                    </div>
                </div>
            ))}
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={film.img}></img>
                    <h2>{film.title} </h2>
                    <h3>IMDB: {film.imdb}</h3>
                    <p className="title">Year: {film.year}</p>
                    <p className="title">Nation: {film.nation}</p>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        Summary: {film.filmSummary}
                    </div>
                </div>
            </div>
        </div>
    )
}

