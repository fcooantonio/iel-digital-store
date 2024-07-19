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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem inventore corrupti est maiores magnam eum culpa numquam magni sit autem libero molestias eos aut, dicta illum qui quia a quibusdam?</p>
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
                <div></div>
                <div></div>
                <div></div>
            </section>
            <h6>@ {dataAtual.getFullYear()} Digital College</h6>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    width: 100%;
    height: 454px;
    padding: 72px 100px 22px;
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
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ffffff30;
    }
    & div {
        width: 100px;
        height: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    & .digital-store-infos  {
        width: 304px;
        height: 304px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 35px;
        flex-direction: column;
        & ul {
            width: 30%;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
        }
    }
    & h6 {
        width: 100%;
        font-size: .875rem;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
    }
`;

export default Footer;