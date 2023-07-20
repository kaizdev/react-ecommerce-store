import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllProducts } from "./services/products-service";
import ProductList from "./containers/ProductList/ProductList";
import ProductPage from "./components/ProductPage/ProductPage";
import NavBar from "./components/NavBar/NavBar";
import FavouriteList from "./containers/FavouriteList/FavouriteList";
import CartList from "./containers/CartList/CartList";

function App() {
    const [products, setProducts] = useState([]);

    // useEffect to getAllProducts()
    useEffect(() => {
        getAllProducts()
            .then((productData) => setProducts(productData))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartList />} />
                    <Route path="/favourites" element={<FavouriteList />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
