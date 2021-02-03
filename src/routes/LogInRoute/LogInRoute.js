// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";

// Styles
import './LogInRoute.css';

// Context
import Context from './../../context/Context';

// Components
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';

class LogInRoute extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          const handleLogInSubmit = (e, email, pass) => {
            e.preventDefault();
            console.log(email, pass);
            firebase.auth().signInWithEmailAndPassword(email, pass)
              .then((userCredential) => {
                console.log(userCredential);
                // Signed in
                window.sessionStorage.setItem('user_credentials', userCredential.user.refreshToken);
                value.updateUID(userCredential.user.uid);
                this.props.history.push('/');
              })
              .catch((error) => {
                console.log(error.message);
              });
          }

          return (
            <>
              <Header />
              <main className='LogInRoute'>
                <h2>Log In</h2>
                <form className='login-form' onSubmit={(e) => handleLogInSubmit(e, e.target['login-email'].value, e.target['login-pass'].value)}>
                  <div>
                    <input id='login-email' type='email' placeholder='Email' />
                  </div>
                  <div>
                    <input id='login-pass' type='password' placeholder='Password' />
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