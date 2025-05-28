import React, { useState } from "react";
import PosterGrid from "./components/PosterGrid";
import movies from "./data/movies.json";

function App() {
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
    </div>
  );
}

export default App;
