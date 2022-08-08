import { useEffect, useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore";

import { Movie } from "../../types/types";

import "./style.scss";

interface IPoster {
  content: Movie;
}

export function Poster({ content }: IPoster) {
  const { user } = useAuth();
  const [like, setLike] = useState<Boolean>();

  const movieId = doc(database, "users", `${user?.email}`);

  const onLikedMovie = async () => {
    if (user?.email) {
      setLike(!like);

      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: content.id,
          title: content.title,
          backdrop_path: content.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  useEffect(() => {
    let savedShowsIds: Array<number> = [];
    onSnapshot(doc(database, "users", `${user?.email}`), (doc) => {
      doc.data()?.savedShows.map((savedShow: any) => {
        if (savedShow.id === content.id) {
          console.log(savedShow === content.id);
          setLike(true);
        }
      });
    });
  }, []);

  return (
    <div className="poster-container">
      <div className="overlay-poster">
        <p onClick={onLikedMovie}>
          {like ? (
            <AiTwotoneHeart className="icon-like" size={30} />
          ) : (
            <AiOutlineHeart className="icon-like" size={30} />
          )}
        </p>
        <p className="overlay-title">{content.title}</p>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
        alt={content.title}
      />
    </div>
  );
}
