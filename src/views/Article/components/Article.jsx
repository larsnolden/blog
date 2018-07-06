import React from 'react';
import styled from 'styled-components';
import Navigation from 'elements/Navigation';
import Header from 'elements/Header';
import ContentWrapper from 'elements/ContentWrapper';
import Heading from 'elements/Heading'; 

import ContentGenerator from './ContentGenerator';

const Date = styled.div`
  font-size: 1.5rem;
`;

export default ({ 
  name,
  dateCreated,
  heroImageUrl,
  content
}) => (
  <div>
    <Navigation />
    <Header
      imageUrl={heroImageUrl}
      headline={name}
    />
    <ContentWrapper>
      <Heading>{name}</Heading>
      <Date>{dateCreated}</Date>
      {
        content
         .sort((item1, item2) => item1.yindex > item2.yindex)
         .map(item => <ContentGenerator {...item} />)
      }
    </ ContentWrapper>
  </div>
);