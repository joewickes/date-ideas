// Dependencies
import React from 'react';

// Styles
import styles from './Welcome.module.scss';

// Context
import Context from './../../context/Context';

export default class Welcome extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(value) => {
          const loggedOut = (
            <section className={styles.Welcome}>
              <h2>Welcome to Date Ideas!</h2>
              <ul>
                <li>Click on 'Get Some Ideas' to generate a random activity, meal, and dessert for your date below</li>
                <li>Click 'Try Another' at the bottom of each idea if you want to see a different one</li>
                <li>
                  Sign up or log into an account by clicking the corresponding link on the top right (the log out is in
                  the same spot once you've logged in)
                </li>
                <li>
                  Once logged in, you can check off ideas that you've already done, so they won't be displayed again for
                  a whole year
                </li>
              </ul>
            </section>
          );

          const loggedIn = (
            <section className={styles.Welcome}>
              <h2>Welcome back!</h2>
            </section>
          );

          return typeof window !== 'undefined' && window.sessionStorage.getItem('di_creds') ? loggedIn : loggedOut;
        }}
      </Context.Consumer>
    );
  }
}
