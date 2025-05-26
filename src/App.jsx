import React from "react";
import PosterGrid from "./components/PosterGrid";
import movies from "./data/movies.json";

function App() {
  return (
    <div className="w-screen h-screen">
      <PosterGrid movies={movies} />
    </div>
  );
}

export default App;
