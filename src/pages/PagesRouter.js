import React from 'react';
import { Route } from 'react-router-dom';

import Page_Letters from './Page_Letters';
import Page_Letter from './Page_Letter';
import Page_New_Letter from './Page_New_Letter';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_Letters} />
        <Route path="/messages/:foldname" component={Page_Letters} />
        <Route path="/message/:lid" component={Page_Letter} />
        <Route path="/new-message" component={Page_New_Letter} />
      </div>
    );
    
  }

}
    
export default PagesRouter;
    