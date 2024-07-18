import styled from "styled-components";
import { Logo } from "./Logo";

const Footer = () => {
    return (
        <FooterContainer>
            <Logo />
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
    position: sticky;
`;

export default Footer;