'use client';

// Dependencies
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useRouter } from 'next/navigation';

// Styles
import styles from './login/LogInRoute.module.scss';

// Context
import Context from '../context/Context';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const LogInRoute = () => {
  const [error, errorSet] = useState(null);
  const router = useRouter();

  return (
    <Context.Consumer>
      {(value) => {
        const handleLogInSubmit = (e, email, pass) => {
          e.preventDefault();
          firebase
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then(async (userCredential) => {
              if (typeof window !== 'undefined') {
                window.sessionStorage.setItem('di_creds', userCredential.user.refreshToken);
                window.sessionStorage.setItem('uid', userCredential.user.uid);
                router.replace('/');
              }

              value.handleGetSomeIdeasClick();
            })
            .catch((error) => {
              errorSet(error.message);
            });
        };

        return (
          <>
            <Header />
            <main className={styles.LogInRoute}>
              <h2>Log In</h2>
              {error ? <p>{error}</p> : null}

              <form
                className={styles.login_form}
                onSubmit={(e) => handleLogInSubmit(e, e.target['login-email'].value, e.target['login-pass'].value)}
              >
                <div>
                  <input id="login-email" type="email" placeholder="Email" />
                </div>
                <div>
                  <input id="login-pass" type="password" placeholder="Password" />
                </div>
                <div>
                  <button type="submit">Log In</button>
                </div>
              </form>
            </main>
            <Footer />
          </>
        );
      }}
    </Context.Consumer>
  );
};

export default LogInRoute;
