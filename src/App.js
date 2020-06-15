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
    this.apiKey = process.env.REACT_APP_API;
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
                        getImages={this.getImages}
                        apikey={this.apiKey}
                      />
                      <SeriesSection
                        getImages={this.getImages}
                        apikey={this.apiKey}
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
                      apikey={this.apiKey}
                      getImages={this.getImages}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/series"
                render={() => (
                  <SerieList apikey={this.apiKey} getImages={this.getImages} />
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
