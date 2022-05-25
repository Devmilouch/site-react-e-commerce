import "./ShoppingCart.css";
import { useSelector, useDispatch } from "react-redux";



const ShoppingCart = (props) => {
    const storeState = useSelector(state => state);

    const dispatch = useDispatch();

    const handleChange = (e, id) => {
        if (e.target.value < 0 || e.target.value > 99) return;

        const indexItem = storeState.cart.findIndex(obj => obj.id === id);

        const objUpdate = {
            ...storeState.cart[indexItem],
            quantity: Number(e.target.value)
        };

        dispatch({
            type: "UPDATEITEM",
            payload: objUpdate
        });
    }

    let totalPrice = 0;
    if (storeState.length !== 0) {
        for (const item of storeState.cart) {
            const itemPrice = item.price * item.quantity;
            totalPrice += itemPrice;
        }
    }

    return (
        <div className="global-container">
            <p className="heading-cart">Votre panier :</p>
            <ul className="cart-list">
                {
                    storeState.cart.map(item => (
                        <li key={item.id}>
                            <img src={process.env.PUBLIC_URL + `/images/${item.img}.png`} alt={item.title} />
                            <div className="bloc-cart-infos">
                                <h4>{item.title}</h4>
                                <p>Price : {item.price} €</p>
                            </div>
                            <div className="bloc-input">
                                <label htmlFor="quantityInput">Quantité</label>
                                <input
                                    id="quantityInput"
                                    type="number"
                                    value={item.quantity}
                                    onChange={e => handleChange(e, item.id)}
                                />
                            </div>
                        </li>
                    ))
                }
            </ul>
            <p className="total-price">Total : {`${totalPrice.toFixed(2)} €`}</p>
            <button className="btn-cart">Procéder au paiement</button>
        </div>
    );
};

export default ShoppingCart;