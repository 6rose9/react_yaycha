import {
    createContext,
    useContext,
    useMemo,
    useState
} from "react";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    Snackbar,
} from "@mui/material"

import {
    deepPurple,
    amber,
    cyan,
} from "@mui/material/colors";

// import App from "./App";
// import AppDrawer from "./components/AppDrawer";

import Template from "./Template";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const AppContext = createContext();

export function useApp() {
    return useContext(AppContext);
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/profile/:id",
                element: <Profile />
            }
        ],
    },
]);

export default function ThemeApp() {

    // const [mode, setMode] = useState("dark");

    // return (
    //     <AppContext.Provider value={{ mode, setMode }}>
    //         <App />
    //     </AppContext.Provider>
    // )

    const [showDrawer, setShowDrawer] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [mode, setMode] = useState("dark");
    const [globalMsg, setGlobalMsg] = useState(null);
    const [auth, setAuth] = useState(null);

    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode,
                primary: deepPurple,
                banner: mode === "dark" ? cyan[800] : cyan[200],
                text: {
                    fade: amber[500],
                }
            },
        });
    }, [mode]);

    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={{
                showDrawer, setShowDrawer,
                showForm, setShowForm,
                globalMsg, setGlobalMsg,
                auth, setAuth,
                mode, setMode
            }}>
                <RouterProvider router={router} />
                <CssBaseline />
            </AppContext.Provider>
        </ThemeProvider>
    )
}