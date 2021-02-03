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
    },
    meal: {
      id: 1,
      name: 'Seafood',
      category: null,
    },
    dessert: {
      id: 1,
      name: 'Ice Cream Sundae',
      category: null,
    },
    uid: null,
  }

  updateUID = (uid) => {
    this.setState({uid})
  }
  
  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        updateUID: this.updateUID,
      }}>
        {this.props.children}
      </Context.Provider>
    );
   
  }
}