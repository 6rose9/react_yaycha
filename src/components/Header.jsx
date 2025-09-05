// import { useContext } from "react"

// export function Header() {
//     const title = useContext(AppContext);
//     return <h1>{title}</h1>
// }

import { useApp } from "../ThemedApp";

import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from "@mui/material";

import {
    Menu as MenuIcon,
    Add as AddIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
} from "@mui/icons-material";

export default function Header() {

    const { showForm, setShowForm, setShowDrawer, mode, setMode } = useApp();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start">
                    <MenuIcon onClick={() => setShowDrawer(true)} />
                </IconButton>

                <Typography sx={{ color: "text.fade", flexGrow: 1, ml: 2 }}>Yaycha</Typography>

                <Box>
                    <IconButton
                        color="inherit"
                        onClick={() => setShowForm(!showForm)}>
                        <AddIcon />
                    </IconButton>
                    {mode === "dark" ? (
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={() => setMode("light")}>
                            <LightModeIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={() => setMode("dark")}>
                            <DarkModeIcon />
                        </IconButton>
                    )}
                </Box>

            </Toolbar>
        </AppBar>
    );
}