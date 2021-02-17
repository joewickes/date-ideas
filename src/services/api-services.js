const apiServices = {
  getLoggedOutActivities: () => {
    return fetch(`https://radiant-caverns-24681.herokuapp.com/api/activities`)
      .then(response => {
        return response.json();
      })
    ;
  },
  getLoggedOutMeals: () => {
    return fetch(`https://radiant-caverns-24681.herokuapp.com/api/meals`)
      .then(response => {
        return response.json();
      })
    ;
  },
  getLoggedOutDesserts: () => {
    return fetch(`https://radiant-caverns-24681.herokuapp.com/api/desserts`)
      .then(response => {
        return response.json();
      })
    ;
  },
  getLoggedInActivities: (userId) => {
    return fetch(`https://radiant-caverns-24681.herokuapp.com/api/activities`, {
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
    return fetch(`https://radiant-caverns-24681.herokuapp.com/api/meals`, {
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
    return fetch(`https://radiant-caverns-24681.herokuapp.com/api/desserts`, {
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
    return fetch (`https://radiant-caverns-24681.herokuapp.com/api/activities/${activityId}`)
      .then(response => {
        return response.json();
      })
    ;
  },
  getLoggedInSingleMeal: (mealId) => {
    return fetch (`https://radiant-caverns-24681.herokuapp.com/api/activities/${mealId}`)
      .then(response => {
        return response.json();
      })
    ;
  },
  getLoggedInSingleDessert: (dessertId) => {
    return fetch (`https://radiant-caverns-24681.herokuapp.com/api/activities/${dessertId}`)
      .then(response => {
        return response.json();
      })
    ;
  },
  findExclusion: (userId, categoryId, category) => {

    return fetch(`https://radiant-caverns-24681.herokuapp.com/api/excluded`, {
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