import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Home from './pages/home/home';
import Movie from "./pages/home/movieDetail/movie";
import Contact from "./components/header/Contact";
import Footer from "./components/header/footer/Footer";
import MovieList from "./components/header/movieList/movieList";



const lightTheme = {
  textColor: "#fff",
  background: "#660066",
  textColor: "#c"
};

const darkTheme = {
  textColor: "#000",
  background: "#fff"
};

const Global = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    transition: all 200ms;
  }
`;



function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Global />
        <button onClick={toggleTheme} className="toggle"><b>Toggle Theme</b></button>
        <Router>
          <Header />
          
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<Movie />}></Route>
            {/* <Route path="movies/:type" element={<MovieList />}></Route> */}
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="movies/details" element={<MovieList />}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
          </Routes>
          <Footer/>
        </Router>
        

      </ThemeProvider>
    </div>
  );
}
export default App;