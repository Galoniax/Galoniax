import { ROUTES } from "../../constants/constants";

import "./navbar.css";

export function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <li>
                    <a href={ROUTES.INICIO}>Inicio</a>
                </li>
            </ul>
        </nav>
    );
}