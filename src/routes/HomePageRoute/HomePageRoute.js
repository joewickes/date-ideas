// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

// Context
import Context from '../../context/Context';

class HomePageRoute extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          return (
            <section className="HomePageRoute">
              <p>HomePageRoute works</p>
            </section>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default withRouter(HomePageRoute);