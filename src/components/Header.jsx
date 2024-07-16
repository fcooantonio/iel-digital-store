import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <HeaderContainer>
            <div>LOGO</div>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/products"}>Produtos</Link></li>
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
`;

export default Header;