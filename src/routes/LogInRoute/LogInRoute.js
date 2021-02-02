// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import './LogInRoute.css';

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
                <h2>Log In</h2>
                <form className='login-form'>
                  <div>
                    <input type='text' placeholder='Username' />
                  </div>
                  <div>
                    <input type='password' placeholder='Password' />
                  </div>
                  <div>
                    <button type='submit'>Log In</button>
                  </div>
                </form>
              </main>
            </>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default withRouter(LogInRoute);