import { Link } from "react-router-dom";
import cartIcon from "./shopping-cart.svg";
import "./FloatingCart.css";
import { useSelector } from "react-redux";



const FloatingCart = (props) => {
    const shoppingCart = useSelector(state => state);
    
    let totalItems = 0;
    for (const item of shoppingCart.cart) {
        totalItems += item.quantity;
    };

    // console.log(totalItems)

    return (
        <Link to="/votre-panier">
            <div className="floating-cart">
                <p>Votre Panier</p>
                <div className="img-notif-container">
                    <img src={cartIcon} alt="icône cadi" />
                    <span className="notif">{totalItems}</span>
                </div>
            </div>
        </Link>
    );
};

export default FloatingCart;