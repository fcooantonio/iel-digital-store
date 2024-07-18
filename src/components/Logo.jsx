import styled from 'styled-components';
import icon from '../assets/icon.svg'

export const Logo = () => {
    return (
        <LogoContainer>
            <img src={icon} alt="logo icon" />
            <h1>Digital Store</h1>
        </LogoContainer>
    );
}

const LogoContainer = styled.div`
    max-width: 260px;
    width: 253px;
    min-width: max-content;
    height: 44px;
    display: flex;
    align-items: center;
    gap: 15px;
    & img {
        width: 33px;
        height: 33px;
    }
    & h1 {
        font-size: 2.25rem;
        font-weight: 600;
        line-height: 44px;
        letter-spacing: -0.01em;
        text-align: left;
        color: var(--color-primary);
    }
`;