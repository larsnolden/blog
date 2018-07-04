import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 600px;
  background-image: ${(props) => props.imageUrl ? `url(${props.imageUrl})` : 'none'};
  background-size: cover;
  display: flex;
  justify-content: center;
  user-select: none;
`;

const HeadlineIsland = styled.div`
  background: #fff;
  align-self: center;
  font-size: 3rem;
  padding: 1rem 2rem 1rem 2rem;
`;

export default ({
  imageUrl,
  headline,
}) => (
  <Wrapper imageUrl={imageUrl}>
    <HeadlineIsland>
      {headline}
    </HeadlineIsland>
  </Wrapper>
);
