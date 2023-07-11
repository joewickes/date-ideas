import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const apiServices = {
  getLoggedOutActivities: () => {
    return axios(`${apiUrl}/api/activities`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  },
  getLoggedOutMeals: () => {
    return axios(`${apiUrl}/api/meals`).then((response) => {
      return response.data;
    });
  },
  getLoggedOutDesserts: () => {
    return axios(`${apiUrl}/api/desserts`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  },
  getLoggedInActivities: (userId) => {
    return axios({
      url: `${apiUrl}/api/activities`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ userId: userId }),
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  },
  getLoggedInMeals: (userId) => {
    return axios({
      url: `${apiUrl}/api/meals`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ userId: userId }),
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  },
  getLoggedInDesserts: (userId) => {
    return axios({
      url: `${apiUrl}/api/desserts`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ userId: userId }),
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  },
  getLoggedInSingleActivity: (activityId) => {
    return axios(`${apiUrl}/api/activities/${activityId}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  },
  getLoggedInSingleMeal: (mealId) => {
    return axios(`${apiUrl}/api/activities/${mealId}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  },
  getLoggedInSingleDessert: (dessertId) => {
    return axios(`${apiUrl}/api/activities/${dessertId}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  },
  findExclusion: (userId, categoryId, category) => {
    return axios({
      url: `${apiUrl}/api/excluded`,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        categoryId: categoryId,
        category: category,
      }),
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  },
};

export default apiServices;
