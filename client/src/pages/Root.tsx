import { Outlet } from 'react-router-dom';
import { Container } from '../styles';

function Root() {
  return (
    <>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  )
}

export default Root;
