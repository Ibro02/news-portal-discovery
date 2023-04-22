import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

import "./index.css";

import App from "./App";
import Article from "./pages/Article";
import InternalError from "./pages/500";
import NotFound from "./pages/400";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/article/:articleName",
    element: <Article />,
  },
  {
    path: "/500",
    element: <InternalError />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
