import { createContext, useContext, useMemo, useState } from "react";

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

import App from "./App";
import AppDrawer from "./components/AppDrawer";

export const AppContext = createContext();

export function useApp() {
    return useContext(AppContext);
}

export default function ThemeApp() {

    // const [mode, setMode] = useState("dark");

    // return (
    //     <AppContext.Provider value={{ mode, setMode }}>
    //         <App />
    //     </AppContext.Provider>
    // )

    const [showDrawer, setShowDrawer] = useState(true);
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
                showDrawer,
                setShowDrawer,
                showForm,
                setShowForm,
                globalMsg,
                setGlobalMsg,
                auth,
                setAuth,
                mode,
                setMode
            }}>
                <App />
                <AppDrawer />
                <Snackbar
                    anchorOrigin={{
                        horizontal: "center",
                        vertical: "bottom",
                    }}
                    open={Boolean(globalMsg)}
                    autoHideDuration={6000}
                    onClose={() => setGlobalMsg(null)}
                    message={globalMsg} />
                <CssBaseline />
            </AppContext.Provider>
        </ThemeProvider>
    )
}