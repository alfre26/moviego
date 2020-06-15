import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//componets
import Card from "./Card";

const MovieContainer = styled.div`
  .Movies-container {
    background: #2b2b2b;
    padding: 100px 0;

    width: 100%;
    z-index: 5;
    margin-bottom: -1px;
  }
  .movies {
    margin: auto;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .movies .cabecera {
    transform: translateY(-3em);
    display: flex;
    align-items: center;
  }
  .cabecera a {
    color: #49c0e5;
    margin-left: 150px;
  }
  .movies .title {
    color: #fff;
    font-size: 24px;
    display: flex;
    flex-direction: column;
  }
  .movies .title::after {
    content: "";
    background: #49c0e5;
    height: 3px;
    width: 25px;
  }
  .card-container {
    max-width: 320px;
    margin: 1% 5% auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }

  @media (min-width: 768px) {
    .movies .cabecera {
      max-width: 768px;
      width: 600px;
      justify-content: space-between;
    }
    .card-container {
      max-width: 768px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      gap: 20px;
    }
  }

  @media (min-width: 1024px) {
    .movies .cabecera {
      max-width: 1024px;
      width: 750px;
    }
    .card-container {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1300px) {
    .movies .cabecera {
      max-width: 1600px;
      width: 1050px;
    }
    .card-container {
      max-width: 1600px;
    }
  }
`;
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
              <a href="/Movies">View all</a>
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
