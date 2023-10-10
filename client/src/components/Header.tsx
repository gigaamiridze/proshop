import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { HeaderContainer, Container, FlexBox, SearchForm, SearchInput, SearchButton, RightContent } from '../styles';
import { PageRoutes } from '../constants';
import { Heading } from '../components';

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <FlexBox as='nav' alignItems='center' justifyContent='space-between'>
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
              <SearchButton type='button'>submit</SearchButton>
            </SearchForm>
          </FlexBox>
          <RightContent alignItems='flex-end' columnGap={10}>
            <Link to={PageRoutes.CART}>
              <FaShoppingCart />
              <Heading 
                title='cart'
                type='h5'
                color='gray'
                fontWeight='600'
                textTransform='uppercase'
                letterSpacing={1}
              />
            </Link>
            <Link to={PageRoutes.LOGIN}>
              <FaUser />
              <Heading 
                title='login'
                type='h5'
                color='gray'
                fontWeight='600'
                textTransform='uppercase'
                letterSpacing={1}
              />
            </Link>
          </RightContent>
        </FlexBox>
      </Container>
    </HeaderContainer>
  )
}

export default Header;
