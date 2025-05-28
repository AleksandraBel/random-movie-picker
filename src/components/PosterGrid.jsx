import React from "react";

const PosterGrid = ({ movies, watchedMovies, markAsWatched }) => {
  return (
    <div className="grid grid-cols-10 grid-rows-10 w-full h-screen overflow-hidden">
      {movies.map((movie) => {
        const isWatched = watchedMovies.includes(movie.id);
        return (
          <div
            key={movie.id}
            className="relative group w-full aspect-[2/3] overflow-hidden"
            onClick={() => !isWatched && markAsWatched(movie.id)}
          >
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className={`w-full h-full object-cover transition duration-300 ${
                isWatched ? "grayscale" : "group-hover:scale-105"
              }`}
            />
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="text-white text-sm pt-8 p-2 text-center">
                {movie.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PosterGrid;
