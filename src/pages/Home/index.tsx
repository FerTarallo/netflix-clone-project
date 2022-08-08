import { useEffect, useState } from "react";
import { getMoviesMap, getPopularMovies } from "../../services/service";
import { Movie } from "../../types/types";
import { categoryDictionaryMap } from "../../utils/constants";
import { truncateText } from "../../utils/functions";

import { Row } from "../../components/Row";
import { Button } from "../../components/Button";

import "./style.scss";

export function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categoriesMap, setCategoriesMap] = useState<any>();

  const panelMovie = movies[Math.floor(Math.random() * movies.length)];

  const setMoviescategories = () => {
    getMoviesMap().then((response) => {
      setCategoriesMap(response);
    });
  };

  useEffect(() => {
    getPopularMovies()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    setMoviescategories();
  }, []);

  return (
    <>
      <div className="container-panel">
        <div className="overlay-image">
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
        </div>
        <img
          src={
            panelMovie &&
            `https://image.tmdb.org/t/p/original/${panelMovie.backdrop_path}`
          }
          alt="Panel Image"
        />
      </div>
      {categoriesMap &&
        Object.keys(categoriesMap).map((category, index) => {
          return (
            <Row
              key={index}
              idKey={index}
              title={categoryDictionaryMap[category]}
              movies={categoriesMap[category]}
            />
          );
        })}
    </>
  );
}
