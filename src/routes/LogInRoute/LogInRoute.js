// Dependencies
import React from 'react';
import { withRouter } from 'react-router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Styles
import './LogInRoute.css';

// Context
import Context from './../../context/Context';

// Components
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';

class LogInRoute extends React.Component {
  state = {
    error: null,
  };

  render() {
    return (
      <Context.Consumer>
        {(value) => {
          const handleLogInSubmit = (e, email, pass) => {
            e.preventDefault();
            firebase
              .auth()
              .signInWithEmailAndPassword(email, pass)
              .then(async (userCredential) => {
                window.sessionStorage.setItem(
                  'di_creds',
                  userCredential.user.refreshToken
                );
                window.sessionStorage.setItem('uid', userCredential.user.uid);
                this.props.history.push('/');

                value.handleGetSomeIdeasClick();
              })
              .catch((error) => {
                this.setState({ error: error.message });
              });
          };

          return (
            <>
              <Header />
              <main className='LogInRoute'>
                <h2>Log In</h2>
                <p
                  style={{
                    color: 'red',
                    marginTop: '20px',
                    textAlign: 'center',
                  }}
                >
                  {this.state.error}
                </p>
                <form
                  className='login-form'
                  onSubmit={(e) =>
                    handleLogInSubmit(
                      e,
                      e.target['login-email'].value,
                      e.target['login-pass'].value
                    )
                  }
                >
                  <div>
                    <input id='login-email' type='email' placeholder='Email' />
                  </div>
                  <div>
                    <input
                      id='login-pass'
                      type='password'
                      placeholder='Password'
                    />
                  </div>
                  <div>
                    <button type='submit'>Log In</button>
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

export default withRouter(LogInRoute);
