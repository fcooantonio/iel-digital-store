import styled from "styled-components";
import shoe from "../assets/shoe.png";
import arrowleft from "../assets/arrow-left.svg";
import arrowright from "../assets/arrow-right.svg";
import { Link } from "react-router-dom";
const Gallery = () => {
    return (
        <GalleryContainer>
            <div>
                <img src={arrowleft} alt="" />
                <div>
                    <div>
                        <p>
                            Melhores ofertas personalizadas
                        </p>
                        <p>
                            Queima de estoque Nike 🔥
                        </p>
                        <p>
                            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                        </p>
                        <Link>Ver ofertas</Link>
                    </div>
                    <img src={shoe} alt="" />
                </div>
                <img src={arrowright} alt="" />
            </div>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </GalleryContainer>
    );
}

const GalleryContainer = styled.section`
    width: 100%;
    height: 680px;
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--color-light-gray-three);
    & div:nth-child(1) {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > img {
            cursor: pointer;
        }
        & div {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & div {
                width: 540px;
                display: flex;
                align-items: flex-start;
                justify-content: space-evenly;
                flex-direction: column;
                & p:nth-child(1) {
                    font-size: 1rem;
                    font-weight: 700;
                    line-height: 24px;
                    letter-spacing: 0.75px;
                    text-align: left;
                    color: var(--color-warning);
                }
                & p:nth-child(2) {
                    font-size: 4rem;
                    font-weight: 800;
                    line-height: 66px;
                    letter-spacing: 1px;
                    text-align: left;
                    color: var(--color-dark-gray-one);
                }
                & p:nth-child(3) {
                    font-size: 1.125rem;
                    font-weight: 400;
                    line-height: 34px;
                    letter-spacing: 0.75px;
                    text-align: left;
                    color: var(--color-dark-gray-two);
                }
                & a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 220px;
                    height: 48px;
                    border-radius: 8px;
                    background-color: var(--color-primary);
                    font-size: 1rem;
                    font-weight: 700;
                    line-height: 24px;
                    letter-spacing: 0.75px;
                    text-align: center;
                    color: var(--color-light-gray-three);
                }
            }
            & img {
                width: fit-content;
                height: 100%;
            }
        } 
    }
    & div:nth-child(2) {
        width: 78px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 53px 0;
        & span {
            width: 12px;
            height: 12px;
            background-color: var(--color-primary);
            border-radius: 50%;
            cursor: pointer;
        }
    }
`;
 
export default Gallery;