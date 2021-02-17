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
      }
    })

    const getAllIdeas = async () => {
      if (!window.sessionStorage.getItem('user_credentials')) {
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
        })
      } else if (window.sessionStorage.getItem('user_credentials')) {
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
        })
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
      }
    })

    const getActivity = async () => {
      if (!window.sessionStorage.getItem('user_credentials')) {
        const loggedOutActivities = await apiServices.getLoggedOutActivities();

        this.setState({
          activity: {
            name: loggedOutActivities.name,
            loading: false,
            strikethrough: false,
            checked: false,
          },
        })
      } else if (window.sessionStorage.getItem('user_credentials')) {
        const loggedInActivities = await apiServices.getLoggedInActivities();

        this.setState({
          activity: {
            id: parseInt(loggedInActivities.id),
            name: loggedInActivities.name,
            loading: false,
            strikethrough: false,
            checked: false,
          },
        })
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
      }
    })

    const getMeal = async () => {
      if (!window.sessionStorage.getItem('user_credentials')) {
        const loggedOutMeals = await apiServices.getLoggedOutMeals();

        this.setState({
          meal: {
            name: loggedOutMeals.name,
            loading: false,
          },
        })
      } else if (window.sessionStorage.getItem('user_credentials')) {
        const loggedInMeals = await apiServices.getLoggedInMeals();

        this.setState({
          meal: {
            id: parseInt(loggedInMeals.id),
            name: loggedInMeals.name,
            loading: false,
            checked: false,
            strikethrough: false,
          },
        })
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
      }
    })

    const getDessert = async () => {
      if (!window.sessionStorage.getItem('user_credentials')) {
        const loggedOutDesserts = await apiServices.getLoggedOutDesserts();

        this.setState({
          dessert: {
            name: loggedOutDesserts.name,
            loading: false,
          },
        })
      } else if (window.sessionStorage.getItem('user_credentials')) {
        const loggedInDesserts = await apiServices.getLoggedInDesserts();

        this.setState({
          dessert: {
            id: parseInt(loggedInDesserts.id),
            name: loggedInDesserts.name,
            loading: false,
            checked: false,
            strikethrough: false,
          },
        })
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
        }
      })
    }

    apiServices.findExclusion(userId, ideaID, category)
      .then(result => {
        if (result.status === 404) {
          apiServices.addExclusion(userId, ideaID, category)
            .then(() => {
              this.setState({[category]: {
                strikethrough: true,
                checked: false,
              }})
            })
        } else if (result.status === 200) {
          apiServices.deleteExclusion(result.body.id, category)
            .then(() => {
              this.setState({[category]: {
                strikethrough: false,
                checked: false,
              }})
            })
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
        handleTryAnotherDessertClick: this.handleTryAnotherDessertClick,
        handleExclusionToggle: this.handleExclusionToggle,
      }}>
        {this.props.children}
      </Context.Provider>
    );
   
  }
}