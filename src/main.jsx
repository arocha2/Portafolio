import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRouter } from "./Router/AppRouter.jsx";
import { BrowserRouter, useLocation } from "react-router-dom";

// componete para que las paginas inicien desde el top 0
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <AppRouter />
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
);
