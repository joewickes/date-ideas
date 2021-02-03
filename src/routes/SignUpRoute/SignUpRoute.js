// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";

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

        const handleSignUpSubmit = (e, email, pass) => {
          e.preventDefault()
          firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((userCredential) => {
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
              <main className='SignUpRoute'>
                <h2>Sign Up</h2>
                <form className='signup-form' onSubmit={(e) => handleSignUpSubmit(e, e.target['sign-up-email'].value, e.target['sign-up-pass'].value)}>
                  <div>
                    <input id='sign-up-email' type='email' placeholder='Email' required />
                  </div>
                  <div>
                    <input id='sign-up-pass' type='password' placeholder='Password' required />
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