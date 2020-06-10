import React, { Component } from "react";
import styled from "styled-components";

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
  /* .card {
    background-image: url("https://image.tmdb.org/t/p/w200/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg");
    background-position: center;
    background-size: cover;
    width: 140px;
    padding: 90px 0px;
  } */
`;
export default class MovieSection extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=37f2ae62d34a000fdc7804626ffe2ec2&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.results }))
      .catch((error) => console.error(error));
  }
  getImages(urlImage) {
    const card = {
      cursor: "pointer",
      backgroundImage: `url("https://image.tmdb.org/t/p/w200/${urlImage}")`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "140px",
      padding: "100px 0px",
    };
    return card;
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
                <Card
                  key={movie.id}
                  image={this.getImages(movie.poster_path)}
                />
              ))}
            </div>
          </div>
        </div>
      </MovieContainer>
    );
  }
}

// https://api.themoviedb.org/3/movie/popular?api_key=37f2ae62d34a000fdc7804626ffe2ec2&language=en-US&page=1

//https://api.themoviedb.org/3/movie/419704/images?api_key=37f2ae62d34a000fdc7804626ffe2ec2&language=en-US
