'use client';

// Dependencies
import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Styles
import styles from './signup/SignUpRoute.module.css';

// Context
import Context from '../context/Context';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class SignUpRoute extends React.Component {
  state = {
    error: null,
  };

  render() {
    return (
      <Context.Consumer>
        {(value) => {
          const handleSignUpSubmit = (e, email, pass) => {
            e.preventDefault();
            firebase
              .auth()
              .createUserWithEmailAndPassword(email, pass)
              .then((userCredential) => {
                if (typeof window !== 'undefined') {
                  window.sessionStorage.setItem('di_creds', userCredential.user.refreshToken);
                  window.sessionStorage.setItem('uid', userCredential.user.uid);
                  this.props.history.push('/');
                  value.handleGetSomeIdeasClick();
                }
              })
              .catch((error) => {
                this.setState({ error: error.message });
              });
          };

          return (
            <>
              <Header />
              <main className={styles.SignUpRoute}>
                <h2>Sign Up</h2>
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
                  className={styles.signup_form}
                  onSubmit={(e) =>
                    handleSignUpSubmit(e, e.target['sign-up-email'].value, e.target['sign-up-pass'].value)
                  }
                >
                  <div>
                    <input id="sign-up-email" type="email" placeholder="Email" required />
                  </div>
                  <div>
                    <input id="sign-up-pass" type="password" placeholder="Password" required />
                  </div>
                  <div>
                    <button type="submit">Sign Up</button>
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

export default SignUpRoute;
