// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import './SignUpRoute.css';

// Context
import Context from './../../context/Context';

// Components
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';

class SignUpRoute extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          return (
            <>
              <Header />
              <main className='SignUpRoute'>
                <h2>Sign Up</h2>
                <form className='signup-form'>
                  <div>
                    <input type='text' placeholder='First Name' />
                  </div>
                  <div>
                    <input type='text' placeholder='Username' />
                  </div>
                  <div>
                    <input type='password' placeholder='Password' />
                  </div>
                  <div>
                    <input type='passwrd' placeholder='Re-enter Password' />
                  </div>
                  <div>
                    <button type='submit'>Sign Up</button>
                  </div>
                </form>
              </main>
              <Footer />
            </>
          );
        }}
        
      </Context.Consumer>
    );
  }
}

export default withRouter(SignUpRoute);