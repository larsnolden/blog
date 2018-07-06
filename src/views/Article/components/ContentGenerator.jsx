import React from 'react';
import styled from 'styled-components';
import RenderGist from 'react-render-gist';
import {
  $bold
} from 'styleVariables';

const Text = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
`;

const Heading = styled.div`
  font-size: 2rem;
  font-weight: ${$bold};
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListItem = styled.div``;

const List = ({ items }) => (
  <ListWrapper>
    { items.map(item => <ListItem>{wrapLinksInText(item)}</ListItem>) }
  </ListWrapper>
);

const StyledAnchor = styled.a``;

// wrap links in styledAnchir
const wrapLinksInText = (string) => string
  .split(/(https?:\/\/[^\s]+)/g)
  .reduce((acc, current) => {
    //  only wrap true Links
    if(current.match(/(https?:\/\/[^\s]+)/g)) return [...acc, <StyledAnchor href={current}>{current}</StyledAnchor>];
    return [...acc, current];
  }, []);

export default ({ type, value }) => {
  switch(type) {
    case "text":
      return <Text>{wrapLinksInText(value)}</Text>

    case "image":
      return <Image src={value} />

    case "heading":
      return <Heading>{value}</Heading>

    case "list":
      return <List items={value} />

    case "code":
      return <RenderGist gist={value} />

    default:
      return <div />
  }
};
