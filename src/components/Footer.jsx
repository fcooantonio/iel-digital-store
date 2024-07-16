import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <h1>FOOTER</h1>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    width: 100%;
    height: 192px;
    background-color: var(--color-dark-gray-one);
    color: var(--color-white);
    position: fixed;
    bottom: 0;
    right: 0;
`;

export default Footer;