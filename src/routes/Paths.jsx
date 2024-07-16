import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductViewPage from "../pages/ProductViewPage";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";
import ProductListingPage from "../pages/ProductListingPage";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/products" element={<ProductListingPage />} />
                        <Route path="/product/:id/:nome" element={<ProductViewPage />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;