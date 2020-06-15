import React, { Component } from "react";
import { Link } from "react-router-dom";

//componets
import Card from "./Card";

//style
import { MovieContainer } from "../Style";
export default class MovieSection extends Component {
  render() {
    return (
      <MovieContainer>
        <div className="Movies-container">
          <div className="movies">
            <div className="cabecera">
              <div className="title">Movies</div>
              <Link to="/Movies">View all</Link>
            </div>
            <div className="card-container">
              {this.props.movies.map((movie) => (
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
