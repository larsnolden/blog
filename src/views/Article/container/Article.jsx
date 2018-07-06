import Article from '../components/Article';
import { connect } from 'react-redux';

import testContent from 'assets/testContent.json';

const mapStateToProps = state => ({
  name: 'Testing with Jest',
  dateCreated: '2nd November 2018',
  heroImageUrl: 'https://i.imgur.com/HSqPaLA.jpg',
  content: testContent.content,
});

//articleId: match.params.id,
export default connect(mapStateToProps, null)(Article);
