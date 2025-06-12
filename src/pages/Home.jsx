import React, { useState } from "react";
import PosterGrid from "../components/PosterGrid";
import RandomMovieModal from "../components/RandomMovieModal";
import movies from "../data/movies.json";

import { useAuth } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Home = ({ openAuthModal }) => {
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  };

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
    <div className="relative h-screen overflow-hidden">
      <PosterGrid
        movies={movies}
        watchedMovies={watchedMovies}
        markAsWatched={markAsWatched}
      />

      {/* Розмитий оверлей, якщо не залогінений */}
      {!currentUser && (
        <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm pointer-events-none" />
      )}

      {/* Кнопка "Поїхали" */}
      {currentUser && (
        <button
          onClick={handleRandomMovie}
          className="fixed bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                   w-44 h-44 rounded-full bg-gradient-to-tr from-red-500 to-red-700
                   shadow-lg relative flex items-center justify-center text-white text-3xl font-extrabold
                   cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-95
                   hover:shadow-[0_0_60px_rgba(0,0,0,0.8)] z-30"
        >
          <span className="relative z-10">Поїхали</span>
          <span className="absolute top-4 left-4 w-24 h-12 rounded-full bg-white opacity-30 blur-xl pointer-events-none transform rotate-12" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />
        </button>
      )}

      {/* Кнопки Увійти / Вийти */}
      {currentUser ? (
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-gradient-to-tr from-red-500 to-red-700
                    text-white font-bold px-4 py-2 rounded-full transition-transform duration-150 hover:scale-110 active:scale-95
                   hover:shadow-[0_0_60px_rgba(0,0,0,0.8)] z-30"
        >
          Вийти
        </button>
      ) : (
        <button
          onClick={openAuthModal}
          className="fixed bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                   w-44 h-44 rounded-full bg-gradient-to-tr from-green-500 to-green-700
                   shadow-lg relative flex items-center justify-center text-white text-3xl font-extrabold
                   cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-95
                   hover:shadow-[0_0_60px_rgba(0,0,0,0.8)] z-30"
        >
          <span className="relative z-10">Увійти</span>
          <span className="absolute top-4 left-4 w-24 h-12 rounded-full bg-white opacity-30 blur-xl pointer-events-none transform rotate-12" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />
        </button>
      )}

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
