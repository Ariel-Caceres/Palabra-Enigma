import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Intro } from "../components/Intro";
import { Stats } from "../pages/Stats";
import { Settings } from "../pages/Settings";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <Home />,
                index: true
            },
            {
                path: "/intro",
                element: <Intro />,
            },
            {
                path: "/stats",
                element: <Stats />
            },
            {
                path: "/settings",
                element: <Settings />
            },

        ]
    }
])