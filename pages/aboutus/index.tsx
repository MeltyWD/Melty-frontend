import React from 'react';
import MainContainer from '../../components/MainContainer';
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin: 0;
  padding-top: 140px;
`;

export default function AboutUs() {

  return (
    <MainContainer>
      <StyledTitle>О нас</StyledTitle>
    </MainContainer>
  )
}