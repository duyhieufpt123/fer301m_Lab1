import React, { useEffect, useState } from "react"
import "./Detail.css"
import { useParams } from "react-router-dom"
import Cards from "../../../components/header/card/card";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";


const TextChange = styled.p`
  color: ${({ theme }) => theme.textColor};
`;
const Detail = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title"><TextChange>{(type ? type : "POPULAR").toUpperCase()}</TextChange></h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default Detail