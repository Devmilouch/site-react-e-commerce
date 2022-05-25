import "./Home.css";
import imgHomeShop from "./shopimg.jpg";



const Home = (props) => {
    return (
        <div className="global-container">
            <h1 className="home-title">Bienvenue au <span>Shop</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta dolorum error voluptatum cumque, doloribus commodi rerum quaerat modi dolor quo temporibus tempora excepturi earum itaque id, illum expedita. Sapiente!</p>
            <img src={imgHomeShop} alt="accueil shop" />
        </div>
    );
};

export default Home;