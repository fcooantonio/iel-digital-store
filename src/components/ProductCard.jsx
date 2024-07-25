import styled from "styled-components";
import productImage from '../assets/shoe.png'

const ProductCard = () => {
    return (
        <ProductContainer>
            <span>30% OFF</span>
            <img src={productImage} alt="?" />
            <div className="description">
                <p>Tênis</p>
                <p>K-Swiss V8 - Masculino</p>
                <span>
                    <p>$200</p>
                    <p>$100</p>
                </span>
            </div>
        </ProductContainer>
    );
}
 
const ProductContainer = styled.li`
    width: 292px;
    height: 440px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    & img {
        width: 100%;
        height: 320px;
        cursor: pointer;
        background-color: var(--color-white);
    }
    & > span {
        width: 96px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        position: relative;
        top: 50px;
        left: 20px;
        color: var(--color-dark-gray-two);
        background-color: #E7FF86;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0.75px;
        text-align: left;
    }
    & .description {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        & > p:first-child {
            color: var(--color-light-gray-one);
            font-size: 12px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.75px;
            text-align: left;
        }
        & > p:nth-child(2) {
            color: var(--color-dark-gray-two);
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 38px;
            letter-spacing: 0.75px;
            text-align: left;
        } 
        & span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 11px;
            & p {
                font-size: 1.5rem;
                font-weight: 400;
                line-height: 38px;
                letter-spacing: 0.75px;
                text-align: left;
                &:first-child {
                    color: var(--color-light-gray-one);
                    text-decoration: line-through;
                }
                &:nth-child(2) {
                    font-weight: 700;
                }
            }
        }
    }
`;

export default ProductCard;