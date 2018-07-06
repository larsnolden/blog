import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`;

const ContentWrapper = styled.div`
  width: 900px;
  height: 100%;
  @media (max-width: 600px) {
    width: auto;
    min-width: 0;
    padding: 2rem;
    margin-top: 25px;
  }
`;

export default ({ children }) => (
  <Wrapper>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </Wrapper>
);
