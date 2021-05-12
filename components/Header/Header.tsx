import styled from "styled-components";
import Link from 'next/link';
import Navigation from './Navigation';
import ProfileBar from './ProfileBar';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .6s;
  padding: 40px 100px;
`;

const StyledLogo = styled.a`
  position: relative;
  font-weight: 700;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: .6s;
`;

export default function Header() {

  return (
    <StyledHeader>
      <Link href="/" passHref><StyledLogo>Logo</StyledLogo></Link>
      <Navigation></Navigation>
      <ProfileBar></ProfileBar>
    </StyledHeader>
  )
}