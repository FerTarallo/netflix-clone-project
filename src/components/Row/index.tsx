import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Movie } from "../../types/types";

import { Poster } from "../Poster";

import "./style.scss";

interface IRow {
  idKey: number;
  title?: string;
  movies: Movie[];
}

export const Row = ({ idKey, title, movies }: IRow) => {
  const onSlideToLeft = () => {
    let slider = document.getElementById("slider-container" + idKey)!;
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const onSlideToRight = () => {
    let slider = document.getElementById("slider-container" + idKey)!;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="row-container">
      <h2>{title}</h2>
      <div className="row-slider">
        <MdChevronLeft
          onClick={onSlideToLeft}
          className="slider-icon left"
          size={40}
        />

        <div id={"slider-container" + idKey} className="slider-container">
          {movies.map((movie, key) => (
            <Poster key={key} content={movie} />
          ))}
        </div>

        <MdChevronRight
          onClick={onSlideToRight}
          className="slider-icon right"
          size={40}
        />
      </div>
    </div>
  );
};
