// Dependencies
import React from 'react';

const Context = React.createContext();

export default Context;

export class ContextProvider extends React.Component {
  state = {
    username: 'TestUserName',
    firstName: 'Cole',
    activity: {
      id: 1,
      name: 'Go Hiking',
      category: null,
      loading: false,
    },
    meal: {
      id: 1,
      name: 'Seafood',
      category: null,
      loading: false,
    },
    dessert: {
      id: 1,
      name: 'Ice Cream Sundae',
      category: null,
      loading: false,
    },
    uid: null,
  }

  updateUID = (uid) => {
    this.setState({uid})
  }

  handleGetSomeIdeasClick = (e) => {
    e.preventDefault();

    console.log('Getting all ideas');

    this.setState({
      activity: {
        loading: true,
      },
      meal: {
        loading: true,
      },
      dessert: {
        loading: true,
      }
    })
  }

  handleTryAnotherActivityClick = (e) => {
    e.preventDefault();

    console.log('Getting activity idea');

    this.setState({
      activity: {
        loading: true,
      }
    })
  }

  handleTryAnotherMealClick = (e) => {
    e.preventDefault();

    console.log('Getting meal idea');

    this.setState({
      meal: {
        loading: true,
      }
    })
  }

  handleTryAnotherDessertClick = (e) => {
    e.preventDefault();

    console.log('Getting dessert idea');

    this.setState({
      dessert: {
        loading: true,
      }
    })
  }
  
  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        updateUID: this.updateUID,
        handleGetSomeIdeasClick: this.handleGetSomeIdeasClick,
        handleTryAnotherActivityClick: this.handleTryAnotherActivityClick,
        handleTryAnotherMealClick: this.handleTryAnotherMealClick,
        handleTryAnotherDessertClick: this.handleTryAnotherDessertClick
      }}>
        {this.props.children}
      </Context.Provider>
    );
   
  }
}