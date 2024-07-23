import styled from "styled-components";
import Section from "../components/Section";

const HomePage = () => {
    return (
        <HomeContainer>
            <Section />
        </HomeContainer>
    );
}

const HomeContainer = styled.main`
    width: 100%;
    height: max-content;
`;


export default HomePage;