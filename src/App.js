import React, { Fragment } from "react";
import "./App.css";

//Component
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MovieSection from "./components/MovieSection";
import SeriesSection from "./components/SeriesSection";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <MovieSection />
      <SeriesSection />
      <Footer />
    </Fragment>
  );
}

export default App;
