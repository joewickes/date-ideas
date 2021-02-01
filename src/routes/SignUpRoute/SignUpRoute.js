// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

// Context
import Context from './../../context/Context';

// Components
import Header from './../../components/Header/Header';

class SignUpRoute extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          return (
            <>
              <Header />
              <main className='SignUpRoute'>
                <p>SignUpRoute works</p>
              </main>
            </>
          );
        }}
        
      </Context.Consumer>
    );
  }
}

export default withRouter(SignUpRoute);