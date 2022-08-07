import { useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

import { Movie } from "../../types/types";

import './style.scss';

interface IPoster {
  content: Movie;
}

export function Poster({ content }: IPoster) {
  const [like, setLike] = useState();

  return (
    <div className="poster-container">
      <img
        src={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
        alt={content.title}
      />
      <div className="overlay-poster">
        <p>
          {like ? (
            <AiTwotoneHeart className="icon-like" />
          ) : (
            <AiOutlineHeart className="icon-like" />
          )}
        </p>
        <p className="overlay-title">{content.title}</p>
      </div>
    </div>
  );
}
