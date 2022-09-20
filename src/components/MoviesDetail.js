import React from "react";
export default function MoviesDetail({films}){
    console.log(films);
    return (
        <div className="container">
            {films.map((film)=>(
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