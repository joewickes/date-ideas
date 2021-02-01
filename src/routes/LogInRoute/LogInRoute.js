// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

// Context
import Context from './../../context/Context';

// Components
import Header from './../../components/Header/Header';

class LogInRoute extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          return (
            <>
              <Header />
              <main className='LogInRoute'>
                <p>LogInRoute works</p>
              </main>
            </>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default withRouter(LogInRoute);