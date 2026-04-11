import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductDetailsPage from "../Pages/Product Details page/ProductDetailsPage";

export default function AppRoutes() {
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="product/:productId" element={<ProductDetailsPage />} />
            </Routes>
        </>
    )
}