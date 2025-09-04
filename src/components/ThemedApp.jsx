import { createContext } from "react";
import App from "../App";

export const AppContent = createContext();

export default function ThemeApp(){
    return (
        <AppContent.Provider value={{mode:"dark"}}>
            <App />
        </AppContent.Provider>
    )
}