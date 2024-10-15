import Header from '../components/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    overflow-x: hidden;
`

const Sacola = () => {
  return (
    <AppContainer>
      <Header />
      <h1>Sacola</h1>
    </AppContainer>
  );
}

export default Sacola