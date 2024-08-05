import styled from "styled-components";
import ProductCard from "./ProductCard";

const ProductListing = () => {
    return (
        <ProductListingContainer>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </ProductListingContainer>
    );
}
 
const ProductListingContainer = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 12px;
`;

export default ProductListing;