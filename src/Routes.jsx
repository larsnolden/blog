import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Overview from 'views/Overview/container/Overview';
import Article from 'views/Article/container/Article';

export default () => (
  <div>
    <Router>
      <div>
        <Route component={Overview} exact={true} path="/" />
        <Route component={Article} path="/article/:id" />
      </div>
    </Router>
  </div>
);
