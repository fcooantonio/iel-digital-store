import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from '../assets/icon.svg'
import buy from '../assets/buy.svg'
const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <div className="logo">
                    <img src={icon} alt="logo icon" />
                    <h1>Digital Store</h1>
                </div>
                <input type="text" placeholder="Pesquisar produto..." />
                <div className="sign-up-in">    
                    <Link>Cadastre-se</Link>
                    <Link>Entrar</Link>
                </div>
                <img src={buy} alt="buy icon" />
            </div>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/products"}>Produtos</Link></li>
                    <li><Link to={"/categories"}>Categorias</Link></li>
                    <li><Link to={"/my-orders"}>Meus Pedidos</Link></li>
                </ul>
            </nav>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 192px;
    background-color: var(--color-white);
    padding: 34px 100px;
    box-shadow: 0px 10px 30px 0px #8D72200D;
    & div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &.logo {
            width: 253px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & img {
                width: 33px;
                height: 33px;
            }
            & h1 {
                font-size: 36px;
                font-weight: 600;
                line-height: 44px;
                letter-spacing: -0.01em;
                text-align: left;
                color: var(--color-primary);
            }
        }
        & input {
            width: 560px;
            height: 60px;
            background-color:#47474704;
            border: none;
            border-radius: 8px;
            padding-left: 12px;
            &::placeholder {
                font-family: 'Inter';
                font-size: 1rem;
                font-weight: 400;
                line-height: 28px;
                letter-spacing: 0.75px;
                text-align: left;
                color: var(--color-dark-gray-three);
            }
        } 
    }
    & nav ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`;

export default Header;