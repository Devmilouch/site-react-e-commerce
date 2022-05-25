import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import FloatingCart from "./Components/FloatingCart/FloatingCart";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductShowcase from "./Pages/ProductShowcase/ProductShowcase";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Contact from "./Pages/Contact/Contact";



function App() {
  return (
    <>
      <Navbar />
      <FloatingCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/produits/:id" element={<ProductShowcase />} />
        <Route path="/votre-panier" element={<ShoppingCart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
