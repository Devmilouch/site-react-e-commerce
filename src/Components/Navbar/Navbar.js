import { Link } from "react-router-dom";
import "./Navbar.css";



const Navbar = (props) => {
    return (
        <nav className="nav-top">
            <Link to="/">ACCUEIL</Link>
            <Link to="/produits">PRODUITS</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
    );
};

export default Navbar;