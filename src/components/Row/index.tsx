import { useEffect, useState } from "react";

import { Movie } from "../../types/types";

import { Poster } from "../Poster";

import './style.scss';

export const Row = ({ title, fetchURL }: any) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchURL.then((response: any) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  
  return (
    <>
      <h2>{title}</h2>
      <div className="row-container">
        <div id="slider-container">
          {movies.map((movie, key) => (
            <Poster key={key} content={movie} />
          ))}
        </div>
      </div>
    </>
  );
};
