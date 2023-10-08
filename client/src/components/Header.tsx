import { Link } from 'react-router-dom';
import { HeaderContainer, Container, FlexBox, SearchForm, SearchInput } from '../styles';
import { PageRoutes } from '../constants';
import { Heading } from '../components';

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <FlexBox alignItems='center' justifyContent='space-between'>
          <FlexBox alignItems='center' columnGap={80}>
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
            <SearchForm as='form' alignItems='center' columnGap={8}>
              <SearchInput id='search' name='search' placeholder='Search item...' />
            </SearchForm>
          </FlexBox>
        </FlexBox>
      </Container>
    </HeaderContainer>
  )
}

export default Header;
