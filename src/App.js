import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component
import Layouts from "./components/Layouts";
import Hero from "./components/Hero";
import MovieSection from "./components/MovieSection";
import SeriesSection from "./components/SeriesSection";
import MovieList from "./components/MovieList";
import SerieList from "./components/SerieList";
import NotFound from "./components/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      series: [],
      pages: 1,
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results], pages: data.total_pages });
      })
      .catch((error) => console.error(error));
  }
  componentWillMount() {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&pages=1`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({ series: [...data.results], pages: data.total_pages })
      )
      .catch((error) => console.error(error));
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
    console.log(this.state.movies);
    return (
      <Fragment>
        <Router>
          <Layouts>
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  return (
                    <div>
                      <Hero />
                      <MovieSection
                        movies={this.state.movies}
                        getImages={this.getImages}
                      />
                      <SeriesSection
                        series={this.state.series}
                        getImages={this.getImages}
                      />
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/movies"
                render={() => {
                  return (
                    <MovieList
                      movies={this.state.movies}
                      getImages={this.getImages}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/series"
                render={() => (
                  <SerieList
                    series={this.state.series}
                    getImages={this.getImages}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </Layouts>
        </Router>
      </Fragment>
    );
  }
}

export default App;
