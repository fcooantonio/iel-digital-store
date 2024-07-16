import { useParams } from "react-router-dom";

const ProductViewPage = () => {
    const { nome } = useParams();
    
    return (
        <>
            <h1>Product {nome}</h1>
        </>
    );
}
 
export default ProductViewPage;