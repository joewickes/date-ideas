// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

// Context
import Context from './../../context/Context';

class LogInRoute extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          return (
            <section className="LogInRoute">
              <p>LogInRoute works</p>
            </section>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default withRouter(LogInRoute);