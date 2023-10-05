import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { Container } from '../styles';

function Root() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  )
}

export default Root;
