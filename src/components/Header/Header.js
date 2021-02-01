// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './Header.css';

// Context
import Context from './../../context/Context';

export default class Header extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          return (
            <header>
              <section className='header-left'>
                <NavLink to='/'><p>Date Ideas</p></NavLink>
              </section>
              <section className='header-right'>
                <ul className='login-signup-list'>
                  {window.sessionStorage.user_credentials 
                  ? (<li className='logout-text' onClick={null}>Logout {value.state.username}</li>)
                  : (<>
                      <li className='login-text'><NavLink to='/login'>Log In</NavLink></li>
                      <li className='signup-text'><NavLink to='/signup'>Sign Up</NavLink></li>
                    </>)}
                </ul>
              </section>
            </header>
          );
        }}
      </Context.Consumer>
    );
  }
}