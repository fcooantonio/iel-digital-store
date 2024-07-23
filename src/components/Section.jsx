import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from '../assets/search.svg'

const Section = () => {
    return (
        <SectionContainer>
            <div>
                <h3>Título</h3>
                <div>
                    <Link>Ver todos</Link>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </SectionContainer>
    );
}

const SectionContainer = styled.section`
    width: 100%;
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & h3 {
            color: var(--color-dark-gray-two);
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 38px;
            letter-spacing: 0.75px;
            text-align: center;
        }
        & div {
            width: 122px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & a {
                min-width: fit-content;
                font-size: 1.125rem;
                font-weight: 400;
                line-height: 34px;
                letter-spacing: 0.75px;
                text-align: left;
                color: var(--color-primary);
                position: relative;
            }
            & img {
                width: 24px;
                height: 24px;
            }
        }
    }
`;

export default Section;