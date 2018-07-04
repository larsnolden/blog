import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
  $hoverBlue,
  $borderGray,
} from 'styleVariables';

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid ${$borderGray};
  height: 40px;
  padding-top: 1rem;
  &:hover {
    border-bottom: 2px solid ${$hoverBlue};
    color: ${$hoverBlue};
  }
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  outline: 0;
  @media (max-width: 600px) {
    margin: 1rem 0 1rem 0;
    padding: 0;
    height: 25px;
  }
`;

const Label = styled.div`
  font-size: 1.5rem;
`;

export default ({
  title,
  date,
  link = '/',
}) => (
  <Wrapper to={link}>
    <Label>
      {title}
    </Label>
    <Label>
      {date}
    </Label>
  </Wrapper>
);
