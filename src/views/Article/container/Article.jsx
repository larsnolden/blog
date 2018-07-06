import Article from '../components/Article';
import { connect } from 'react-redux';

import testContent from 'assets/testContent.json';

const mapStateToProps = state => ({
  name: 'Testing with Jest',
  dateCreated: '2nd November 2018',
  heroImageUrl: 'http://localhost:3000/static/media/Panorama_of_the_Rhine_in_Cologne.6d9d3e7b.jpg',
  content: testContent.content,
});

//articleId: match.params.id,
export default connect(mapStateToProps, null)(Article);
