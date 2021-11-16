import Link from 'next/link';
import MobileNavigaton from './MobileNavigation/index';
import { Wrapper, StyledLink } from './styles';

const NavBar = () => {
  return (
    <Wrapper>
      <Link href="/">
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/character">
        <StyledLink>Characters</StyledLink>
      </Link>
      <Link href="/episode">
        <StyledLink>Episodes</StyledLink>
      </Link>
      <Link href="/location">
        <StyledLink>Locations</StyledLink>
      </Link>
      <MobileNavigaton />
    </Wrapper>
  );
};

export default NavBar;
