import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import AIBot from "./pages/AIBot";
import BusinessList from "./pages/BusinessList";
import Business, { loader as BusinessLoader } from "./pages/Business";
import BusinessEditForm from "./pages/BusinessEditForm";
import store from "./store/store";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "ai-bot",
        element: <AIBot />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "business-list",
        element: <BusinessList />,
      },
      {
        path: "edit-business",
        element: <BusinessEditForm />,
      },
      {
        path: ":businessId",
        element: <Business />,
        loader: BusinessLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
