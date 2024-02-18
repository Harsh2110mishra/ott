import React, { useMemo, useState } from "react";

// state context
import store from "../context/store";

// imported navigator
import Main from "./main";

export default function AppNavigation() {
  return (
    <storeContext.Provider value={store}>
      <Main />
    </storeContext.Provider>
  );
}
