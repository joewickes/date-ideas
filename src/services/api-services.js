const apiServices = {
  getLoggedOutActivities: () => {
    return fetch(`http://localhost:8000/api/activities`)
      .then(response => {
        return response.json();
      })
    ;
  },
  getLoggedOutMeals: () => {
    return fetch(`http://localhost:8000/api/meals`)
      .then(response => {
        return response.json();
      })
    ;
  },
  getLoggedOutDesserts: () => {
    return fetch(`http://localhost:8000/api/desserts`)
      .then(response => {
        return response.json();
      })
    ;
  },
  getLoggedInActivities: (userId) => {
    return fetch(`http://localhost:8000/api/activities`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({userId: userId}),
    })
    .then(response => {
      return response.json();
    })
  },
  getLoggedInMeals: (userId) => {
    return fetch(`http://localhost:8000/api/meals`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({userId: userId}),
    })
    .then(response => {
      return response.json();
    })
  },
  getLoggedInDesserts: (userId) => {
    return fetch(`http://localhost:8000/api/desserts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({userId: userId}),
    })
    .then(response => {
      return response.json();
    })
  },
  getLoggedInSingleActivity: (activityId) => {
    return fetch (`http://localhost:8000/api/activities/${activityId}`)
      .then(response => {
        return response.json();
      })
    ;
  },
  getLoggedInSingleMeal: (mealId) => {
    return fetch (`http://localhost:8000/api/activities/${mealId}`)
      .then(response => {
        return response.json();
      })
    ;
  },
  getLoggedInSingleDessert: (dessertId) => {
    return fetch (`http://localhost:8000/api/activities/${dessertId}`)
      .then(response => {
        return response.json();
      })
    ;
  },
  findExclusion: (userId, ideaID, category) => {
    let newCategory = null;
    if (category === 'Activity') {
      newCategory = 'activities'
    } else if (category === 'Meal') {
      newCategory = 'meals'
    } else if (category === 'Dessert') {
      newCategory = 'desserts'
    }

    console.log('finding exclusion at', userId, ideaID, category)

    return fetch(`http://localhost:8000/api/${newCategory}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({userId: userId, ideaId: ideaID, category: category}),
    })
    .then(response => {
      return response.json();
    })
  },
  addExclusion: (userId, ideaID, category) => {
    let newCategory = null;
    if (category === 'activity') {
      newCategory = 'activities'
    } else if (category === 'meal') {
      newCategory = 'meals'
    } else if (category === 'dessert') {
      newCategory = 'desserts'
    }

    console.log('adding exclusion at', userId, ideaID, category)
    
    return fetch(`http://localhost:8000/api/${newCategory}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({userId: userId, ideaId: ideaID, category: category}),
    })
    .then(response => {
      return response.json();
    })
  },
  deleteExclusion: (ideaID, category) => {
    let newCategory = null;
    if (category === 'activity') {
      newCategory = 'activities'
    } else if (category === 'meal') {
      newCategory = 'meals'
    } else if (category === 'dessert') {
      newCategory = 'desserts'
    }

    console.log('deleting exclusion at', ideaID, category)

    return fetch(`http://localhost:8000/api/${newCategory}/${ideaID}`, {
      method: 'DELETE',
    })
    .then(response => {
      return response.json();
    })
  }
}

export default apiServices;