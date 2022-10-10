import React, { useEffect, useState } from "react"
import "./movie.css"
import { useParams } from "react-router-dom"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Films } from "../../../components/header/share under/ListOfFilms";

const TextChange = styled.p`
  color: ${({ theme }) => theme.textColor};
`;
function Movie() {
    const filmName = useParams();
    const movie = Films.find(obj => {
        return obj.id == filmName.id;
    });

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`../${movie.backdrop_path}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`../${movie.poster_path}`}/>
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{movie.original_title}</div>
                        <div className="movie__tagline"></div>
                        <div className="movie__rating">Vote Average: {movie.vote_average}- Vote Count: {movie.vote_count} <i class="fas fa-star" />
                            <span className="movie__voteCount">{}</span>
                        </div>
                        <div className="movie__runtime">{movie.runtime}</div>
                        <div className="movie__releaseDate">Release Date: {movie.release_date}</div>
                        <div className="movie__genres">{movie.genre}</div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText"><TextChange>Synopsis</TextChange></div>
                        <div><TextChange>{movie.overview}</TextChange></div>
                    </div>

                </div>
            </div>
            {/* <div className="movie__links">
                <div className="movie__heading"><TextChange>Useful Links</TextChange></div>
                {
                    <p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div> */}
            <div className="movie__heading"><TextChange>Production companies</TextChange></div>
            {/* <div className="movie__production">
                <TextChange>{
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path
                                &&
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    
                                </span>
                            }
                        </>
                    ))
                }
                </TextChange>
            </div> */}
        </div>
    )
}

export default Movie