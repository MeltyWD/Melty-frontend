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
export default function ProfileBar() {

  return (
    <StyledNavLi><Link href="/portfolio"><a>Логин</a></Link></StyledNavLi>
  )
}