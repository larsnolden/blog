import { connect } from 'react-redux';
import Overview from '../components/Overview';

const mapStateToProps = stat => ({
  articles: [
    {
      title: 'Testing with Jest',
      date: '2. August'
    },
    {
      title: 'Haskell is fun',
      date: '15. July'
    },
  ]
});

export default connect(mapStateToProps, null)(Overview);
