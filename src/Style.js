import styled from "styled-components";

export const MovieContainer = styled.div`
  .Movies-container {
    background: #2b2b2b;
    padding: 100px 0px;
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
      width: 1080px;
    }
    .card-container {
      max-width: 1600px;
    }
  }
`;

export const SeriesContainer = styled.div`
  .Series-container {
    background: #2b2b2b;
    padding: 100px 0;
    width: 100%;
    z-index: 5;
    margin-bottom: -1px;
  }
  .series {
    margin: auto;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .series .cabecera {
    transform: translateY(-3em);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .cabecera a {
    color: #49c0e5;
    margin-left: 140px;
  }
  .series .title {
    color: #fff;
    font-size: 24px;
    display: flex;
    flex-direction: column;
  }
  .series .title::after {
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
    .series .cabecera {
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
    .series .cabecera {
      max-width: 1024px;
      width: 750px;
    }
    .card-container {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1300px) {
    .series .cabecera {
      max-width: 1600px;
      width: 1080px;
    }
    .card-container {
      max-width: 1600px;
    }
  }
`;
