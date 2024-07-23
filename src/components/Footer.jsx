import styled from "styled-components";
import logoFooter from '../assets/logo-footer.svg'
import logoFacebook from '../assets/facebook.svg'
import logoInstagram from '../assets/instagram.svg'
import logoTwitter from '../assets/twitter.svg'
import { Link } from "react-router-dom";

const Footer = () => {
    let dataAtual = new Date();

    return (
        <FooterContainer>
            <section>
                <div className="digital-store-infos">
                    <img src={logoFooter} alt="Digital Store Logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <ul>
                        <li>
                            <Link to="https://www.facebook.com/"><img src={logoFacebook} alt="logo facebook" /></Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/"><img src={logoInstagram} alt="logo instagram" /></Link>
                        </li>
                        <li>
                            <Link to="https://www.twitter.com"><img src={logoTwitter} alt="logo twitter" /></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Informação</h5>
                    <Link>Sobre Drip Store</Link>
                    <Link>Segurança</Link>
                    <Link>Wishlist</Link>
                    <Link>Blog</Link>
                    <Link>Trabalhe conosco</Link>
                    <Link>Meus Pedidos</Link>  
                </div>
                <div>
                    <h5>Categorias</h5>
                    <Link>Camisetas</Link>
                    <Link>Calças</Link>
                    <Link>Bonés</Link>
                    <Link>Headphones</Link>
                    <Link>Tênis</Link>
                </div>
                <div>
                    <h5>Contato</h5>
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </section>
            <h6>@ {dataAtual.getFullYear()} Digital College</h6>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    width: 100%;
    height: 454px;
    padding: 72px 100px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--color-dark-gray-one);
    color: var(--color-white);
    bottom: 0;
    right: 0;
    & section {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    & .digital-store-infos  {
        width: 304px;
        height: fit-content;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        & > img {
            width: 253px;
            height: 44px;
            margin-bottom: 35px;
        }
        & p {
            width: 307px;
            margin-bottom: 40px;
            font-size: 1rem;
            font-weight: 400;
            line-height: 26px;
            text-align: left;
        }
        & ul {
            width: 124px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    & div:nth-child(2), div:nth-child(3), div:nth-child(4) {
        width: 135px;
        height: fit-content;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        font-size: 1rem;
        font-weight: 400;
        line-height: 38px;
        text-align: left;
        & h5 {
            font-size: 1.125rem;
            font-weight: 600;
            line-height: 22px;
            text-align: left;
        }
    }
    & div:nth-child(3) {
        width: 96px;
    } 
    & div:nth-child(4) {
        width: 233px;
    }
    & h6 {
        width: 100%;
        padding: 22px 0;
        border-top: 1px solid #ffffff30;
        font-size: .875rem;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
    }
`;

export default Footer;