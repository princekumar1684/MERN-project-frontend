import React from "react";
import MainRoutes from "./routes/MainRoutes";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <MainRoutes />
    </HashRouter>
  );
};

export default App;
