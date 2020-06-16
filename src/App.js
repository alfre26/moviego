import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component
import Layouts from "./components/Layouts";
import Hero from "./components/Hero";
import MovieSection from "./components/MovieSection";
import SeriesSection from "./components/SeriesSection";
import MovieList from "./components/MovieList";
import SerieList from "./components/SerieList";
import Pagination from "./components/Pagination";
import NotFound from "./components/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      series: [],
      currentPage: 1,
      totalpages: 0,
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: [...data.results],
          totalpages: data.total_pages,
        });
      })
      .catch((error) => console.error(error));

    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&pages=1`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          series: [...data.results],
          totalpages: data.total_pages,
        })
      )
      .catch((error) => console.error(error));
  }

  nextPages = (numberPage) => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&pages=${numberPage}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          series: [...data.results],
          currentPage: numberPage,
        })
      )
      .catch((error) => console.error(error));
  };
  render() {
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
                      <MovieSection movies={this.state.movies} />
                      <SeriesSection series={this.state.series} />
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/movies"
                render={() => {
                  return (
                    <div>
                      <MovieList movies={this.state.movies} />
                      {this.state.totalpages > 1 ? (
                        <Pagination
                          pagesNumber={this.state.totalpages}
                          currentPages={this.state.currentPages}
                          nextPage={this.nextPages}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  );
                }}
              />
              <Route
                exact
                path="/series"
                render={() => {
                  return (
                    <div>
                      <SerieList series={this.state.series} />

                      {this.state.totalpages > 1 ? (
                        <Pagination
                          pagesNumber={this.state.totalpages}
                          currentPages={this.state.currentPages}
                          nextPage={this.nextPages}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  );
                }}
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
