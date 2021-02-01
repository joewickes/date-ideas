// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

// Context
import Context from './../../context/Context';

class SignUpRoute extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          return (
            <section className="SignUpRoute">
              <p>SignUpRoute works</p>
            </section>
          );
        }}
        
      </Context.Consumer>
    );
  }
}

export default withRouter(SignUpRoute);