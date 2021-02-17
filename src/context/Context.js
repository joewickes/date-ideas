// Dependencies
import React from 'react';

// Services
import apiServices from './../services/api-services';

const Context = React.createContext();

export default Context;

export class ContextProvider extends React.Component {
  state = {
    activity: {
      id: null,
      name: null,
      loading: false,
      strikethrough: false,
      checked: false,
    },
    meal: {
      id: null,
      name: null,
      loading: false,
      strikethrough: false,
      checked: false,
    },
    dessert: {
      id: null,
      name: null,
      loading: false,
      strikethrough: false,
      checked: false,
    },
    error: null,
  }

  handleGetSomeIdeasClick = (e) => {
    if (e) {
      e.preventDefault();
    }

    this.setState({
      activity: {
        loading: true,
      },
      meal: {
        loading: true,
      },
      dessert: {
        loading: true,
      },
      error: null,
    })

    const getAllIdeas = async () => {
      if (!window.sessionStorage.getItem('user_credentials')) {
        try {
          const loggedOutActivities = await apiServices.getLoggedOutActivities();
        const loggedOutMeals = await apiServices.getLoggedOutMeals();
        const loggedOutDesserts = await apiServices.getLoggedOutDesserts();

        this.setState({
          activity: {
            name: loggedOutActivities.name,
            loading: false,
            strikethrough: false,
            checked: false,
          },
          meal: {
            name: loggedOutMeals.name,
            loading: false,
            strikethrough: false,
            checked: false,
          },
          dessert: {
            name: loggedOutDesserts.name,
            loading: false,
            strikethrough: false,
            checked: false,
          }
        })} catch (error) {
          this.setState({error: 'Whoops! Looks like we can\'t grab any ideas right now!'})
        }
      } else if (window.sessionStorage.getItem('user_credentials')) {
       try {
         const loggedInActivities = await apiServices.getLoggedInActivities();
        const loggedInMeals = await apiServices.getLoggedInMeals();
        const loggedInDesserts = await apiServices.getLoggedInDesserts();

        this.setState({
          activity: {
            id: parseInt(loggedInActivities.id),
            name: loggedInActivities.name,
            loading: false,
            strikethrough: false,
            checked: false,
          },
          meal: {
            id: parseInt(loggedInMeals.id),
            name: loggedInMeals.name,
            loading: false,
            strikethrough: false,
            checked: false,
          },
          dessert: {
            id: parseInt(loggedInDesserts.id),
            name: loggedInDesserts.name,
            loading: false,
            strikethrough: false,
            checked: false,
          }
        })} catch (error) {
          this.setState({error: 'Whoops! Looks like we can\'t grab any ideas right now!'})
        }
      }
    }

    getAllIdeas();
  }

  handleTryAnotherActivityClick = (e) => {
    e.preventDefault();

    this.setState({
      activity: {
        loading: true,
        strikethrough: false,
        checked: false,
      },
      error: null,
    })

    const getActivity = async () => {
      if (!window.sessionStorage.getItem('user_credentials')) {
        try {
          const loggedOutActivities = await apiServices.getLoggedOutActivities();

        this.setState({
          activity: {
            name: loggedOutActivities.name,
            loading: false,
            strikethrough: false,
            checked: false,
          },
        })} catch (error) {
          this.setState({error: 'Whoops! Looks like we can\'t grab any activities right now!'})
        }
      } else if (window.sessionStorage.getItem('user_credentials')) {
        try {
          const loggedInActivities = await apiServices.getLoggedInActivities();

        this.setState({
          activity: {
            id: parseInt(loggedInActivities.id),
            name: loggedInActivities.name,
            loading: false,
            strikethrough: false,
            checked: false,
          },
        })} catch (error) {
          this.setState({error: 'Whoops! Looks like we can\'t grab any activities right now!'})
        }
      }
    }

    getActivity();
  }

  handleTryAnotherMealClick = (e) => {
    e.preventDefault();

    this.setState({
      meal: {
        loading: true,
        strikethrough: false,
        checked: false,
      },
      error: null,
    })

    const getMeal = async () => {
      if (!window.sessionStorage.getItem('user_credentials')) {
        try {
          const loggedOutMeals = await apiServices.getLoggedOutMeals();

        this.setState({
          meal: {
            name: loggedOutMeals.name,
            loading: false,
          },
        })} catch (error) {
          this.setState({error: 'Whoops! Looks like we can\'t grab any meals right now!'})
        }
      } else if (window.sessionStorage.getItem('user_credentials')) {
        try {
          const loggedInMeals = await apiServices.getLoggedInMeals();

        this.setState({
          meal: {
            id: parseInt(loggedInMeals.id),
            name: loggedInMeals.name,
            loading: false,
            checked: false,
            strikethrough: false,
          },
        })} catch (error) {
          this.setState({error: 'Whoops! Looks like we can\'t grab any meals right now!'})
        }
      }
    }

    getMeal();
  }

  handleTryAnotherDessertClick = (e) => {
    e.preventDefault();

    this.setState({
      dessert: {
        loading: true,
        strikethrough: false,
        checked: false,
      },
      error: null,
    })

    const getDessert = async () => {
      if (!window.sessionStorage.getItem('user_credentials')) {
        try {
          const loggedOutDesserts = await apiServices.getLoggedOutDesserts();

        this.setState({
          dessert: {
            name: loggedOutDesserts.name,
            loading: false,
          },
        })} catch (error) {
          this.setState({error: 'Whoops! Looks like we can\'t grab any desserts right now!'})
        }
      } else if (window.sessionStorage.getItem('user_credentials')) {
        try {
          const loggedInDesserts = await apiServices.getLoggedInDesserts();

        this.setState({
          dessert: {
            id: parseInt(loggedInDesserts.id),
            name: loggedInDesserts.name,
            loading: false,
            checked: false,
            strikethrough: false,
          },
        })} catch (error) {
          this.setState({error: 'Whoops! Looks like we can\'t grab any desserts right now!'})
        }
      }
    }

    getDessert();
  }

  handleExclusionToggle = (e, userId, ideaID, category, checked) => {

    if (checked) {
      this.setState({
        [category]: {
          id: this.state[category].id,
          name: this.state[category].name,
          loading: this.state[category].loading,
          checked: false,
          strikethrough: false,
          error: null,
        }
      })
    } else if (!checked) {
      this.setState({
        [category]: {
          id: this.state[category].id,
          name: this.state[category].name,
          loading: this.state[category].loading,
          checked: true,
          strikethrough: true,
          error: null,
        }
      })
    }

    apiServices.findExclusion(userId, ideaID, category)
      .then(result => {
      })
      .catch(err => {
        if (err) {
          this.setState({error: 'Whoops! Looks like we can\'t check off any ideas right now!'});
        }
      })
    ;
  }

  handleLogOutError = (message) => {
    this.setState({error: message});
  }
  
  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        updateUID: this.updateUID,
        handleGetSomeIdeasClick: this.handleGetSomeIdeasClick,
        handleTryAnotherActivityClick: this.handleTryAnotherActivityClick,
        handleTryAnotherMealClick: this.handleTryAnotherMealClick,
        handleTryAnotherDessertClick: this.handleTryAnotherDessertClick,
        handleExclusionToggle: this.handleExclusionToggle,
      }}>
        {this.props.children}
      </Context.Provider>
    );
   
  }
}