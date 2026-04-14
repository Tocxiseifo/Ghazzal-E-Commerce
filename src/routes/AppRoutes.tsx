import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductDetailsPage from "../Pages/Product Details page/ProductDetailsPage";
import CartPage from "../Pages/Cart Page/CartPage";
import CollectionPage from "../Pages/Collection Page/CollectionPage";

export default function AppRoutes() {
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="product/:productId" element={<ProductDetailsPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="collection" element={<CollectionPage />} />
            </Routes>
        </>
    )
}