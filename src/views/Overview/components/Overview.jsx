import React from 'react';
import styled from 'styled-components';
import Navigation from 'elements/Navigation';
import Header from 'elements/Header';
import Article from './Article';
import ContentWrapper from 'elements/ContentWrapper';

import rhineBackgroundPicture from 'assets/Panorama_of_the_Rhine_in_Cologne.jpg';

import { Link } from 'react-router-dom';

const ArticleListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media (max-width: 600px) {
    padding: 2rem;
    margin-top: 25px;
  }
`;

const Year = styled.div`
  font-size: 2.25rem;
`;

export default ({ articles }) => (
  <div>
    <Navigation />
    <Header
      imageUrl={rhineBackgroundPicture}
      headline="WRITINGS"
    />
    <ContentWrapper>
      <ArticleListWrapper>
        <Year>
          2018
        </Year>
        <Link to="article/1">Article 1</Link>
        {articles.map(
          article => <Article
            title={article.title}
            date={article.date} />
          )}
      </ArticleListWrapper>
    </ ContentWrapper>
  </div>
);
