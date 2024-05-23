import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AccountSetting from "./pages/AccountSetting";
import AIBot from "./pages/AIBot";
import MyBusinesses from "./pages/MyBusinesses";
import ManageLocation from "./pages/ManageLocation";
import ManageCategories from "./pages/ManageCategories";
import MyClaims from "./pages/MyClaims";
import ClaimRequests from "./pages/ClaimRequests";
import ProfileLayout from "./layouts/ProfileLayout";
import BusinessList from "./pages/BusinessList";
import Business, { loader as BusinessLoader } from "./pages/Business";
import BusinessEditForm from "./pages/BusinessEditForm";
import store from "./store/store";
import { Toaster } from "@/components/ui/toaster";
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
        path: "profile/",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <AccountSetting />,
          },
          {
            path: "my-business",
            element: <MyBusinesses />,
          },
          {
            path: "my-claims",
            element: <MyClaims />,
          },
          {
            path: "manage-categories",
            element: <ManageCategories />,
          },
          {
            path: "manage-location",
            element: <ManageLocation />,
          },
          {
            path: "claim-requests",
            element: <ClaimRequests />,
          },
        ],
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
      <Toaster />
    </Provider>
  </React.StrictMode>
);
