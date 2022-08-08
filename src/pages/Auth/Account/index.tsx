import { useEffect, useState } from "react";
import { database } from "../../../services/firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { useAuth } from "../../../hooks/useAuth";
import { Movie } from "../../../types/types";

import { Row } from "../../../components/Row";

import backgroundImg from "../../../assets/images/backgroundImg.jpg";

import "./style.scss";

export function Account() {
  const { user } = useAuth();
  const [likedMovies, setLikedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    onSnapshot(doc(database, "users", `${user?.email}`), (doc) => {
      setLikedMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  useEffect(() => {}, [likedMovies]);

  return (
    <div className="account-container">
      <img src={backgroundImg} alt="Netflix background" />
      <div className="overlay-container"></div>
      <div className="liked-movies">
        <h1>My Liked Movies</h1>
      </div>
      {likedMovies ? (
        <Row idKey={1} movies={likedMovies} />
      ) : (
        <p>Você ainda não deu like em nenhum filme</p>
      )}
    </div>
  );
}
