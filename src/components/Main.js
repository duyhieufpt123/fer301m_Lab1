import React,{Component} from "react";
import {Films} from '../share under/ListOfFilms'
import MoviesDetail from "./MoviesDetail";
export class Main extends Component{
    constructor(){
        super();
        this.state = {
            films: Films
        };
    }
    render() {
        return <MoviesDetail films={this.state.films}/>
    }
}
export default Main
