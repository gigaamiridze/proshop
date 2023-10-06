import { Link } from 'react-router-dom';
import { HeaderContainer, Container, FlexBox } from '../styles';
import { PageRoutes } from '../constants';
import { Heading } from '../components';

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <FlexBox alignItems='center' justifyContent='space-between'>
          <Link to={PageRoutes.ROOT}>
            <Heading 
              title='proshop' 
              type='h4' 
              color='white'
              fontWeight='600'
              textTransform='uppercase'
              letterSpacing={1}
            />
          </Link>
        </FlexBox>
      </Container>
    </HeaderContainer>
  )
}

export default Header;
