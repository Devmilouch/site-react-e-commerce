import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./ProductShowcase.css";
import { useDispatch } from "react-redux";
import inventory from "../../data/inventory";



const ProductShowcase = (props) => {
    const [nbMugs, setNbMugs] = useState(1);
    const { id } = useParams();

    const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g, "").trim() === id);

    const updateMugs = e => {
        setNbMugs(Number(e.target.value));
    }

    const addingInfo = useRef();
    let timerInfo;
    let displayInfo = false;

    const dispatch = useDispatch();
    const addToCart = e => {
        e.preventDefault();

        const itemAdded = {
            ...inventory[productClicked],
            quantity: nbMugs
        };

        dispatch({
            type: "ADDITEM", 
            payload: itemAdded
        });

        addingInfo.current.innerText = "Ajouté au panier";

        if (!displayInfo) {
            displayInfo = true;
            timerInfo = setTimeout(() => {
                addingInfo.current.innerText = "";
                displayInfo = false;
            }, 500);
        }
    }

    useEffect(() => {
        return () => {
            clearTimeout(timerInfo);
        }
    }, []);

    return (
        <div className="showcase">
            <div className="container-img-showcase">
                <img 
                    className="img-showcase" 
                    src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`} 
                    alt={inventory[productClicked].title} 
                />
            </div>
            <div className="product-infos">
                <h2>{inventory[productClicked].title}</h2>
                <p>Prix : {inventory[productClicked].price}€</p>
                <form onSubmit={addToCart}>
                    <label htmlFor="quantity">Quantité</label>
                    <input 
                        type="number" 
                        id="quantity" 
                        value={nbMugs} 
                        onChange={updateMugs} 
                    />
                    <button>Ajouter au panier</button>
                    <span ref={addingInfo} className="adding-info"></span>
                </form>
            </div>
        </div>
    );
};

export default ProductShowcase;