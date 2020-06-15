import React, { Component } from "react";
import { Link } from "react-router-dom";

//componets
import Card from "./Card";

//style
import { MovieContainer } from "../Style";
export default class MovieSection extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apikey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.results }))
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <MovieContainer>
        <div className="Movies-container">
          <div className="movies">
            <div className="cabecera">
              <div className="title">Movies</div>
              <Link href="/Movies">View all</Link>
            </div>
            <div className="card-container">
              {this.state.movies.map((movie) => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <Card
                    key={movie.id}
                    image={this.props.getImages(movie.poster_path)}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MovieContainer>
    );
  }
}
