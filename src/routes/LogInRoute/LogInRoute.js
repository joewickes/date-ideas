// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

class LogInRoute extends React.Component {
  render() {
    return (
      <section className="LogInRoute">
        <p>LogInRoute works</p>
      </section>
    );
  }
}

export default withRouter(LogInRoute);