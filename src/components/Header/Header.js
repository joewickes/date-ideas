// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";

// Styles
import './Header.css';

// Context
import Context from './../../context/Context';

export default class Header extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {

          const logOutUID = () => {
            firebase.auth().signOut()
              .then(() => {
                window.sessionStorage.removeItem('user_credentials');
                window.sessionStorage.removeItem('uid');
                value.handleGetSomeIdeasClick();
              }).catch((error) => {
                value.handleLogOutError(error.message);
              });
          }

          return (
            <header>
              <section className='header-left'>
                <NavLink to='/'><h1>Date Ideas</h1></NavLink>
              </section>
              <section className='header-right'>
                <ul className='login-signup-list'>
                  {window.sessionStorage.getItem('user_credentials') 
                  ? (<li className='logout-text' onClick={logOutUID}>Logout</li>)
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