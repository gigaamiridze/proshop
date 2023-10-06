import { HeaderContainer, Container, FlexBox } from '../styles';
import { Heading } from '../components';

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <FlexBox alignItems='center' justifyContent='space-between'>
          <Heading 
            title='proshop' 
            type='h4' 
            color='white'
            fontWeight='600'
            textTransform='uppercase'
            letterSpacing={1}
          />
        </FlexBox>
      </Container>
    </HeaderContainer>
  )
}

export default Header;
