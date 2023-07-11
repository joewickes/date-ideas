// Dependencies
import React from 'react';
import Link from 'next/link';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Styles
import styles from './Header.module.css';

// Context
import Context from './../../context/Context';

export default class Header extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(value) => {
          const logOutUID = () => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                if (typeof window !== 'undefined') {
                  window.sessionStorage.removeItem('di_creds');
                  window.sessionStorage.removeItem('uid');
                }

                value.handleGetSomeIdeasClick();
              })
              .catch((error) => {
                value.handleLogOutError(error.message);
              });
          };

          return (
            <header className={styles.header}>
              <section className={styles.header_left}>
                <Link href="/">
                  <h1>Date Ideas</h1>
                </Link>
              </section>
              <section className={styles.header_right}>
                <ul className={styles.login_signup_list}>
                  {typeof window !== 'undefined' && window.sessionStorage.getItem('di_creds') ? (
                    <li className={styles.logout_text} onClick={logOutUID}>
                      Logout
                    </li>
                  ) : (
                    <>
                      <li className={styles.login_text}>
                        <Link href="/login">Log In</Link>
                      </li>
                      <li className={styles.signup_text}>
                        <Link href="/signup">Sign Up</Link>
                      </li>
                    </>
                  )}
                </ul>
              </section>
            </header>
          );
        }}
      </Context.Consumer>
    );
  }
}
