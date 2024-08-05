import styled from "styled-components";
import Section from "../components/Section";
import Gallery from "../components/Gallery";

const HomePage = () => {
    return (
        <HomeContainer>
            <Gallery />
            <Section title="Text" align="center" color="red"/>
        </HomeContainer>
    );
}

const HomeContainer = styled.main`
    width: 100%;
    height: max-content;
`;


export default HomePage;