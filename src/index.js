import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactsPage from "./pages/contactsPage";
import MainPage from "./pages/mainPage";
import PersonalPage from "./pages/personalPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path: "/",
        id: "root",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainPage />,
            },
            {
                path: "contacts",
                element: <ContactsPage />,
            },
            {
                path: "personal",
                element: <PersonalPage />,
            },
        ],
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
