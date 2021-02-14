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
  findExclusion: (userId, categoryId, category) => {
    let newCategory = null;
    if (category === 'activity') {
      newCategory = 'activities'
    } else if (category === 'meal') {
      newCategory = 'meals'
    } else if (category === 'dessert') {
      newCategory = 'desserts'
    }

    return fetch(`http://localhost:8000/api/excluded`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({userId: userId, categoryId: categoryId, category: category}),
    })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    })
  },
}

export default apiServices;