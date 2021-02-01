// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

class HomePageRoute extends React.Component {
  render() {
    return (
      <section className="HomePageRoute">
        <p>HomePageRoute works</p>
      </section>
    );
  }
}

export default withRouter(HomePageRoute);