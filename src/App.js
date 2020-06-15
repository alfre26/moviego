import React, { Fragment, Component } from "react";
import "./App.css";

//Component
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MovieSection from "./components/MovieSection";
import SeriesSection from "./components/SeriesSection";

class App extends Component {
  constructor() {
    super();
    this.apikey = process.env.API_KEY;
  }
  getImages(urlImage) {
    const card = {
      cursor: "pointer",
      backgroundImage: `url("https://image.tmdb.org/t/p/w200/${urlImage}")`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    };
    return card;
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <Hero />
        <MovieSection getImages={this.getImages} />
        <SeriesSection getImages={this.getImages} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;

//key 37f2ae62d34a000fdc7804626ffe2ec2
//https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
