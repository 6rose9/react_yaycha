import { useContext } from "react";

export function Footer(){
    const title = useContext(AppContext);
    return <footer>
        Copyright {title}
    </footer>
}