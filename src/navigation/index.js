import React, { useMemo, useState } from "react";

// state context
import MainContext from "../context/store";

// imported navigator
import Main from "./main";

export default function AppNavigation() {
  const [movieData, setMovieData] = useState([]);

  const store = useMemo(
    () => ({
      movies: [movieData, setMovieData],
    }),
    [movieData]
  );

  return (
    <MainContext.Provider value={store}>
      <Main />
    </MainContext.Provider>
  );
}
