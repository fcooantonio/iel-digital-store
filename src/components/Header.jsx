import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import logoHeader from '../assets/logo-header.svg'
import shopCart from '../assets/mini-cart.svg'
import search from '../assets/search.svg'

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <img src={logoHeader} alt="Digital Store Logo" />
                <div className="search">
                    <input type="text" className="buscar" placeholder="Pesquisar produto..." />
                    <img src={search} alt="Buscar"/>
                </div>
                <div className="sign-up-in">    
                    <Link>Cadastre-se</Link>
                    <Link>Entrar</Link>
                </div>
                <div className="my-shop">
                    <img src={shopCart} alt="shopping cart icon" />
                    <span>2</span>
                </div>
            </div>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/products"}>Produtos</NavLink></li>
                    <li><NavLink to={"/categories"}>Categorias</NavLink></li>
                    <li><NavLink to={"/my-orders"}>Meus Pedidos</NavLink></li>
                </ul>
            </nav>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 192px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 34px 100px 29px;
    background-color: var(--color-white);
    box-shadow: 0px 10px 30px 0px #8D72200D;
    & div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & img {
            width: 253px;
            height: 44px;
        }
        & .search {
            max-width: 560px;
            & input {
                width: calc(100% - 24px);
                height: 60px;
                background-color:#47474704;
                border: none;
                border-radius: 8px;
                padding: 0 0 0 16px;
            }
            & ::placeholder {
                font-size: 1rem;
                font-weight: 400;
                line-height: 28px;
                letter-spacing: 0.75px;
                text-align: left;
                color: #66666660;
            }
            & img {
                width: 24px;
                height: 24px;
                padding: 3px;
                position: relative;
                top: 50%;
                right: 40px;
                opacity: .5;
                cursor: pointer;
            }
        }
        & .sign-up-in {
            width: 230px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            & a{
                width: max-content;
                &:nth-child(1) {
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 28px;
                    letter-spacing: 0.75px;
                    text-decoration: underline;
                    text-align: center;
                    color: var(--color-dark-gray-two);
                }
                &:nth-child(2) {
                    width: 114px;
                    border-radius: 8px;
                    padding: 8px 0;
                    color: var(--color-light-gray-three);
                    background-color: var(--color-primary);
                    font-size: .875rem;
                    font-weight: 700;
                    line-height: 22px;
                    letter-spacing: 0.75px;
                    text-align: center;
                }

            }
        }
        & .my-shop {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            max-width: max-content;
            min-width: 33px;
            height: 100%;
            & img {
                width: 24px;
                height: 24px;
            }
            & span {
                padding: 1px 6px;
                border-radius: 50%;
                color: var(--color-white);
                background-color: var(--color-error);
                font-size: .75rem;
                font-weight: 700;
                line-height: 18px;
                letter-spacing: 0.5px;
                text-align: center;
                position: relative;
                right: 9px;
                bottom: 11px;
            }
        }
    }
    & nav ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
        & li a {
            width: max-content;
            font-size: 1rem;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.75px;
            text-align: left;
            color: var(--color-dark-gray-two);
            &.active {
                color: var(--color-primary);
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
                letter-spacing: 0.75px;
                text-align: center;
                padding-bottom: 4px;
                border-bottom: 2px solid var(--color-primary);
            }
        }
    }
`;

export default Header;