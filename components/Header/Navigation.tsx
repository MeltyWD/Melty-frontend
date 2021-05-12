import styled from "styled-components";
import Link from 'next/link';

const StyledNavUl = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const StyledNavLi = styled.li`
  list-style: none;
  letter-spacing: 1.3px;
  font-size: 500;
  transition: .6s;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
export default function Navigation() {

  return (
    <nav>
      <StyledNavUl>
        <StyledNavLi><Link href="/"><a>Главная</a></Link></StyledNavLi>
        <StyledNavLi><Link href="/blog"><a>Блог</a></Link></StyledNavLi>
        <StyledNavLi><Link href="/portfolio"><a>Портфолио</a></Link></StyledNavLi>
        <StyledNavLi><Link href="/aboutus"><a>О нас</a></Link></StyledNavLi>
      </StyledNavUl>
    </nav>
  )
}