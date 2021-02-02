// Dependencies
import React from 'react';

// Styles
import './Welcome.css';

// Context
import Context from './../../context/Context';

export default class Welcome extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {

          const loggedOut = (
            <section className='Welcome'>
              <h2>Welcome to Date Ideas!</h2>
              <p>Here's how you can use it:</p>
              <ol>
                <li>Click on 'Get Some Ideas' to generate a random activity, meal, and dessert for your date below</li>
                <li>Click 'Try Another' at the bottom of each idea if you want to see a different one</li>
                <li>Sign up or log into an account by clicking the corresponding link on the top right (the log out is in the same spot once you've logged in)</li>
                <li>Once logged in, you can check off ideas that you've already done, so they won't be displayed again for a whole year</li>
              </ol>
            </section>
          );

          const loggedIn = (
            <section className='Welcome'>
              <h2>Welcome back, {value.state.firstName}!</h2>
            </section>
          );

          return (
            window.sessionStorage.getItem('user_credentials') ? loggedIn : loggedOut
          );
        }}
      </Context.Consumer>
    );
  }
}