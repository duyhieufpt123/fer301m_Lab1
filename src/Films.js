import React, { Component } from "react";
import{Films} from'./share under/ListOfFilms'
export default class film extends Component {
    render() {
            return (
        <div className="container">
            {Films.map((film) => (
                <div className='column'>
                    <div className='card'>
                        <img src={film.img} />
                        <h3>{film.title}</h3>
                        <p className="title">{film.year}</p>
                        <p className="title">{film.nation}</p>
                        <p><button>Watch Now!</button> <button>Trailer</button></p>
                    </div>
                </div>
            ))}
        </div>
    )
    }
}