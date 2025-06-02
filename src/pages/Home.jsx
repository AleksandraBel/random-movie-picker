import React, { useState } from "react";
import PosterGrid from "../components/PosterGrid";
import movies from "../data/movies.json";

const Home = ({ openAuthModal }) => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  const markAsWatched = (id) => {
    setWatchedMovies((prev) => [...prev, id]);
  };

  return (
    <div>
      <PosterGrid
        movies={movies}
        watchedMovies={watchedMovies}
        markAsWatched={markAsWatched}
      />
      <button
        onClick={openAuthModal}
        className="absolute top-4 right-4 z-10 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Увійти
      </button>
    </div>
  );
};

export default Home;
