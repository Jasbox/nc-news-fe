import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
    return(
        <header>

        <img src={'/logo192.png'} alt="react logo" width="100px"/>
        <Link to="/"><h1>NC NEWS</h1></Link>
        <Navbar />
        </header>
    )
}