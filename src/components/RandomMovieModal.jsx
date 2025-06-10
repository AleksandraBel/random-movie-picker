import React from "react";

const RandomMovieModal = ({ movie, onClose, onWatched }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="mx-auto mb-4 rounded max-h-96"
        />
        <div className="flex justify-around mt-4">
          <button
            onClick={onWatched}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Дивилась
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomMovieModal;
