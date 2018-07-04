import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  $black,
  $breakpointMobile,
  $hoverBlue,
} from 'styleVariables';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: 'Open Sans';
  text-decoration: none;
  color: ${$black};
  font-size: 2.25rem;
  padding: 2rem 0 2rem 3rem;
  @media (max-width: ${$breakpointMobile}) {
    font-size: 2rem;
    padding: 1rem 0 0 1rem;
    flex-direction: column;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: inherit;
  color: inherit;
`;

const SyledOutboundLink = styled.a`
  text-decoration: inherit;
  color: inherit;
  padding: 0 0 0 3rem;
  @media (max-width: ${$breakpointMobile}) {
    padding: 0;
  }
`;

export default () => (
  <Wrapper>
     <StyledLink activeStyle={{ color: $hoverBlue }} to="/">WRITINGS</StyledLink>
     <SyledOutboundLink href="https://github.com/larsnolden">GITHUB</SyledOutboundLink>
  </Wrapper>
);
