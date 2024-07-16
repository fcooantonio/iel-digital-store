import { Link } from "react-router-dom";

const ProductListingPage = () => {
    return (
        <>
            <ul>
                <li><Link to={"/product/1/Abacate"}>Abacate</Link></li>
                <li><Link to={"/product/2/Banana"}>Banana</Link></li>
                <li><Link to={"/product/3/Cenoura"}>Cenoura</Link></li>
            </ul>
        </>
    );
}
 
export default ProductListingPage;