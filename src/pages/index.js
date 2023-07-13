'use client';

// Dependencies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

// Dependencies
import React from 'react';

// Context
import Context from '../context/Context';

// Components
import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import Footer from '../components/Footer/Footer';

class HomePageRoute extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(value) => {
          return (
            <>
              <Header />
              <main className="HomePageRoute">
                <Welcome />
                <div className="all-ideas-btn-container">
                  <button onClick={value.handleGetSomeIdeasClick} className="all-ideas-btn reg-btn">
                    Get Some Ideas
                  </button>
                </div>
                <hr />
                {value.state.error ? <p className="error">{value.state.error}</p> : null}
                <section className="all-ideas-container">
                  <div className="idea">
                    <div className="idea-top">
                      <h2>Activity</h2>
                    </div>
                    <div className="idea-middle">
                      {value.state.activity.loading ? (
                        <p>Loading...</p>
                      ) : (
                        <p
                          style={
                            value.state.activity.strikethrough
                              ? {
                                  textDecorationLine: 'line-through',
                                  textDecorationStyle: 'solid',
                                }
                              : null
                          }
                        >
                          {value.state.activity.name}
                        </p>
                      )}
                    </div>
                    <div className="idea-bottom">
                      {typeof window !== 'undefined' &&
                      sessionStorage.getItem('di_creds') &&
                      value.state.activity.name ? (
                        <div className="already-tried-checkbox-container">
                          <label htmlFor="checkbox">Already tried this?</label>
                          <input
                            checked={value.state.activity.checked ? 'checked' : false}
                            onChange={(e) =>
                              value.handleExclusionToggle(
                                e,
                                typeof window !== 'undefined' ? window.sessionStorage.getItem('uid') : null,
                                value.state.activity.id,
                                'activity',
                                value.state.activity.checked,
                              )
                            }
                            className="checkbox"
                            type="checkbox"
                          />
                        </div>
                      ) : null}
                      <div className="try-another-btn">
                        <button onClick={value.handleTryAnotherActivityClick} className="reg-btn">
                          {value.state.activity.name ? `Try Another` : `Get Idea`}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="idea">
                    <div className="idea-top">
                      <h2>Meal</h2>
                    </div>
                    <div className="idea-middle">
                      {value.state.meal.loading ? (
                        <p>Loading...</p>
                      ) : (
                        <p
                          style={
                            value.state.meal.strikethrough
                              ? {
                                  textDecorationLine: 'line-through',
                                  textDecorationStyle: 'solid',
                                }
                              : null
                          }
                        >
                          {value.state.meal.name}
                        </p>
                      )}
                    </div>
                    <div className="idea-bottom">
                      {typeof window !== 'undefined' &&
                      window.sessionStorage.getItem('di_creds') &&
                      value.state.meal.name ? (
                        <div className="already-tried-checkbox-container">
                          <label htmlFor="checkbox">Already tried this?</label>
                          <input
                            checked={value.state.meal.checked ? 'checked' : false}
                            onChange={(e) =>
                              value.handleExclusionToggle(
                                e,
                                typeof window !== 'undefined' ? window.sessionStorage.getItem('uid') : null,
                                value.state.meal.id,
                                'meal',
                                value.state.meal.checked,
                              )
                            }
                            className="checkbox"
                            type="checkbox"
                          />
                        </div>
                      ) : null}
                      <div className="try-another-btn-container">
                        <button onClick={value.handleTryAnotherMealClick} className="reg-btn">
                          {value.state.meal.name ? `Try Another` : `Get Idea`}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="idea">
                    <div className="idea-top">
                      <h2>Dessert</h2>
                    </div>
                    <div className="idea-middle">
                      {value.state.dessert.loading ? (
                        <p>Loading...</p>
                      ) : (
                        <p
                          style={
                            value.state.dessert.strikethrough
                              ? {
                                  textDecorationLine: 'line-through',
                                  textDecorationStyle: 'solid',
                                }
                              : null
                          }
                        >
                          {value.state.dessert.name}
                        </p>
                      )}
                    </div>
                    <div className="idea-bottom">
                      {typeof window !== 'undefined' &&
                      sessionStorage.getItem('di_creds') &&
                      value.state.dessert.name ? (
                        <div className="already-tried-checkbox-container">
                          <label htmlFor="checkbox">Already tried this?</label>
                          <input
                            checked={value.state.dessert.checked ? 'checked' : false}
                            onChange={(e) =>
                              value.handleExclusionToggle(
                                e,
                                typeof window !== 'undefined' ? window.sessionStorage.getItem('uid') : null,
                                value.state.dessert.id,
                                'dessert',
                                value.state.dessert.checked,
                              )
                            }
                            className="checkbox"
                            type="checkbox"
                          />
                        </div>
                      ) : null}
                      <div className="try-another-btn">
                        <button onClick={value.handleTryAnotherDessertClick} className="reg-btn">
                          {value.state.dessert.name ? `Try Another` : `Get Idea`}
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
              <Footer />
            </>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default HomePageRoute;
