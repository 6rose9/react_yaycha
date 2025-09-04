import { useContext } from "react"

export function Header() {
    const title = useContext(AppContext);
    return <h1>{title}</h1>
}