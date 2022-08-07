import { useEffect, useState } from "react";
import {
  getPopularMovies,
  getRecentlyAdded,
  getTopRated,
  getHorrorMovies,
} from "../../services/service";
import { Movie } from "../../types/types";

import { Row } from "../../components/Row";
import { Button } from "../../components/Button";

import "./style.scss";

export function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const panelMovie = movies[Math.floor(Math.random() * movies.length)];

  const truncateText = (text: string, number: number) => {
    if (text.length > number) {
      return text.slice(0, number) + "...";
    } else {
      return text;
    }
  };

  useEffect(() => {
    getPopularMovies()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container-panel">
        <div className="container-image">
          <div className="overlay-image"></div>

          <div className="content-panel">
            <h1>{panelMovie && panelMovie.title}</h1>
            <div className="buttons">
              <Button theme="white" text="Play" />
              <Button theme="transparent" text="Watch Later" />
            </div>
            <p className="release">
              Release {panelMovie && panelMovie.release_date}
            </p>
            <p className="overview">
              {panelMovie && truncateText(panelMovie.overview, 150)}
            </p>
          </div>

          <img
            src={
              panelMovie &&
              `https://image.tmdb.org/t/p/original/${panelMovie.backdrop_path}`
            }
            alt="Panel Image"
          />
        </div>
      </div>
      <Row title="Recently Added" fetchURL={getRecentlyAdded()} />
      <Row title="Trending Now" fetchURL={getPopularMovies()} />
      <Row title="Top 20" fetchURL={getTopRated()} />
      <Row title="Horror Movies" fetchURL={getHorrorMovies()} />
    </>
  );
}
