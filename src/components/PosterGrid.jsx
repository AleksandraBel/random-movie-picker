import React from "react";

const PosterGrid = ({ movies }) => {
  return (
    <div className="grid grid-cols-10 grid-rows-10 w-full h-screen">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="relative group w-full h-full overflow-hidden"
        >
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-sm text-center p-2">
            {movie.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PosterGrid;
