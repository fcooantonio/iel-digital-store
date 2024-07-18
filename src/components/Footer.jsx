import styled from "styled-components";
import logoFooter from '../assets/logo-footer.svg'

const Footer = () => {
    return (
        <FooterContainer>
            <img src={logoFooter} alt="Digital Store Logo" />
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    width: 100%;
    height: 192px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-dark-gray-one);
    color: var(--color-white);
    position: fixed;
    bottom: 0;
    right: 0;
`;

export default Footer;