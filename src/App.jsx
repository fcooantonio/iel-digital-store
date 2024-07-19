import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyles"
import Paths from "./routes/Paths";
import { device } from "./device";

function App() {

  return (
    <AppContainer>
      <GlobalStyle />
      <Paths />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  @media ${device.laptop} {
    & header {
      padding: 17px 50px 14px;
      & div input {
        width: 280px;
      }
    }
  }
`;

export default App;
