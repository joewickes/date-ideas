// Dependencies
import React from 'react';

const Context = React.createContext();

export default Context;

export class ContextProvider extends React.Component {
  state = {
    test: 'testing Context'
  }
  
  render() {
    return (
      <Context.Provider value={{
        state: this.state,
      }}>
        {this.props.children}
      </Context.Provider>
    );
   
  }
}