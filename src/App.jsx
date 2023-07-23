import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllProducts } from "./services/products-service";
import ProductList from "./containers/ProductList/ProductList";
import ProductPage from "./components/ProductPage/ProductPage";
import NavBar from "./components/NavBar/NavBar";
import FavouriteList from "./containers/FavouriteList/FavouriteList";
import CartList from "./containers/CartList/CartList";
import { getProductSubscription } from "./services/products-service";

function App() {
    const [products, setProducts] = useState([]);

    // // useEffect to getAllProducts()
    // useEffect(() => {
    //     getAllProducts()
    //         .then((productData) => setProducts(productData))
    //         .catch((error) => console.log(error));
    // }, []);

    useEffect(() => {
        const unsub = getProductSubscription(setProducts);
        return () => unsub();
    }, []);

    // get the number of cart items and pass this to NavBar and CartList. Error handling to prevent NaN return
    const cartItemsTotalQty = products
        .filter((product) => typeof product.productCartQty === "number")
        .reduce((acc, curr) => {
            return acc + curr.productCartQty;
        }, 0);

    const cartItemsTotalPrice = products
        .filter((product) => typeof product.productCartQty === "number")
        .reduce((acc, curr) => {
            return acc + curr.productCartQty * curr.productPrice;
        }, 0)
        .toFixed(2);

    return (
        <>
            <BrowserRouter>
                <NavBar cartItemsTotalQty={cartItemsTotalQty} />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/:id" element={<ProductPage />} />
                    <Route
                        path="/cart"
                        element={
                            <CartList
                                products={products}
                                cartItemsTotalQty={cartItemsTotalQty}
                                cartItemsTotalPrice={cartItemsTotalPrice}
                            />
                        }
                    />
                    <Route path="/favourites" element={<FavouriteList />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
