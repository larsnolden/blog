import React from 'react';
import styled from 'styled-components';
import Navigation from 'elements/Navigation';
import Header from 'elements/Header';
import ContentWrapper from 'elements/ContentWrapper';
import ContentGenerator from './ContentGenerator';

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
      {
        content
         .sort((item1, item2) => item1.yindex > item2.yindex)
         .map(item => <ContentGenerator {...item} />)
      }
    </ ContentWrapper>
  </div>
);