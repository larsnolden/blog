import React from 'react';
import styled from 'styled-components';
import RenderGist from 'react-render-gist';
import Heading from 'elements/Heading'; 
import {
  $hoverBlue
} from 'styleVariables';

const Text = styled.div`
  margin-top: 40px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
  margin-top: 40px;
`;

const ImageCaption = styled.div``;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;

const MarginWrapper = styled.div`
  margin-top: 40px;
`;

const ItemPoint = styled.div`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-right: 15px;
  background: ${$hoverBlue}
`;

const ListItem = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const List = ({ items }) => (
  <ListWrapper>
    { items.map(item => <ListItem><ItemPoint/>{ wrapLinksInText(item)}</ListItem>) }
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

    case "imageCaption":
      return <ImageCaption>{value}</ImageCaption>

    case "heading":
      return <Heading>{value}</Heading>

    case "list":
      return <List items={value} />

    case "code":
      return (
        <MarginWrapper>
          <RenderGist gist={value} />
        </MarginWrapper>
      )

    default:
      return <div />
  }
};
