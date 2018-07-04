import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Overview from 'views/Overview/container/Overview';

export default () => (
  <div>
    <Router>
      <Route component={Overview} path="/" />
    </Router>
  </div>
);
