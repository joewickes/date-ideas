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
      category: null,
      loading: false,
      strikethrough: false
    },
    meal: {
      id: null,
      name: null,
      category: null,
      loading: false,
      strikethrough: false
    },
    dessert: {
      id: null,
      name: null,
      category: null,
      loading: false,
      strikethrough: false
    },
  }

  handleGetSomeIdeasClick = (e) => {
    e.preventDefault();

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
            strikethrough: false
          },
          meal: {
            name: loggedOutMeals.name,
            loading: false,
            strikethrough: false
          },
          dessert: {
            name: loggedOutDesserts.name,
            loading: false,
            strikethrough: false
          }
        })
      } else if (window.sessionStorage.getItem('user_credentials')) {
        const loggedInActivities = await apiServices.getLoggedInActivities(window.sessionStorage.getItem('uid'));
        const loggedInMeals = await apiServices.getLoggedInMeals(window.sessionStorage.getItem('uid'));
        const loggedInDesserts = await apiServices.getLoggedInDesserts(window.sessionStorage.getItem('uid'));

        this.setState({
          activity: {
            id: parseInt(loggedInActivities.id),
            name: loggedInActivities.name,
            loading: false,
            strikethrough: false
          },
          meal: {
            id: parseInt(loggedInMeals.id),
            name: loggedInMeals.name,
            loading: false,
            strikethrough: false
          },
          dessert: {
            id: parseInt(loggedInDesserts.id),
            name: loggedInDesserts.name,
            loading: false,
            strikethrough: false
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
        strikethrough: false
      }
    })

    const getActivity = async () => {
      if (!window.sessionStorage.getItem('user_credentials')) {
        const loggedOutActivities = await apiServices.getLoggedOutActivities();

        this.setState({
          activity: {
            name: loggedOutActivities.name,
            loading: false,
            strikethrough: false
          },
        })
      } else if (window.sessionStorage.getItem('user_credentials')) {
        const loggedInActivities = await apiServices.getLoggedInActivities();

        this.setState({
          activity: {
            id: parseInt(loggedInActivities.id),
            name: loggedInActivities.name,
            loading: false,
            strikethrough: false
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
          },
        })
      }
    }

    getDessert();
  }

  handleExclusionToggle = (userId, ideaID, category) => {

    apiServices.findExclusion(userId, ideaID, category)
      .then(result => {
        if (result.status === 404) {
          apiServices.addExclusion(userId, ideaID, category)
            .then(() => {
              this.setState({[category]: {
                strikethrough: true,
              }})
            })
        } else if (result.status === 200) {
          apiServices.deleteExclusion(result.body.id, category)
            .then(() => {
              this.setState({[category]: {
                strikethrough: false,
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
        handleExclusionToggle: this.handleExclusionToggle
      }}>
        {this.props.children}
      </Context.Provider>
    );
   
  }
}