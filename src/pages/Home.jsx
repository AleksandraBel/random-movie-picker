import React, { useState } from "react";
import PosterGrid from "../components/PosterGrid";
import RandomMovieModal from "../components/RandomMovieModal";
import movies from "../data/movies.json";

const Home = ({ openAuthModal }) => {
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const markAsWatched = (id) => {
    setWatchedMovies((prev) => [...prev, id]);
    setSelectedMovie(null);
  };

  const handleRandomMovie = () => {
    const unwatched = movies.filter(
      (movie) => !watchedMovies.includes(movie.id)
    );
    if (unwatched.length === 0) {
      alert("Всі фільми вже переглянуті!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * unwatched.length);
    setSelectedMovie(unwatched[randomIndex]);
  };

  return (
    <div className="relative">
      <PosterGrid
        movies={movies}
        watchedMovies={watchedMovies}
        markAsWatched={markAsWatched}
      />

      <button
        onClick={handleRandomMovie}
        className="fixed bottom-6 right-6 z-10 bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 shadow-lg"
      >
        Поїхали
      </button>

      <button
        onClick={openAuthModal}
        className="absolute top-4 right-4 z-10 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Увійти
      </button>

      {selectedMovie && (
        <RandomMovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onWatched={() => markAsWatched(selectedMovie.id)}
        />
      )}
    </div>
  );
};

export default Home;
