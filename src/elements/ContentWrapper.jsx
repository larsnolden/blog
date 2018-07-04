import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 900px;
`;

export default ({ children }) => (
  <Wrapper>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </Wrapper>
);
