// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import './HomePageRoute.css';

// Context
import Context from '../../context/Context';

// Components
import Header from './../../components/Header/Header';
import Welcome from './../../components/Welcome/Welcome';
import Footer from './../../components/Footer/Footer';


class HomePageRoute extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {value => {
          return ( 
            <>
              <Header />
              <main className='HomePageRoute'>
                <Welcome />
                <div className='all-ideas-btn-container'>
                  <button onClick={value.handleGetSomeIdeasClick} className='all-ideas-btn reg-btn'>Get Some Ideas</button>
                </div>
                <hr />
                <section className='all-ideas-container'>
                  <div className='idea'>
                    <div className='idea-top'>
                      <h2>Activity</h2>
                    </div>
                    <div className='idea-middle'>
                      { value.state.activity.loading ? <p>Loading...</p> : <p>{value.state.activity.name}</p>}
                    </div>
                    <div className='idea-bottom'>
                      {window.sessionStorage.getItem('user_credentials') ?
                        <div className='already-tried-checkbox-container'>
                          <label htmlFor='checkbox'>
                            Already tried this?
                          </label>
                          <input onChange={() => console.log('CHANGED')} className='checkbox' type='checkbox' />
                        </div> 
                        : null
                      }
                      <div className='try-another-btn'>
                        <button onClick={value.handleTryAnotherActivityClick} className='reg-btn'>Try Another</button>
                      </div>
                    </div>
                  </div>
                  <div className='idea'>
                    <div className='idea-top'>
                      <h2>Meal</h2>
                    </div>
                    <div className='idea-middle'>
                      {value.state.meal.loading ? <p>Loading...</p> : <p>{value.state.meal.name}</p>}
                    </div>
                    <div className='idea-bottom'>
                      {window.sessionStorage.getItem('user_credentials') ?
                        <div className='already-tried-checkbox-container'>
                          <label htmlFor='checkbox'>
                            Already tried this?
                          </label>
                          <input onChange={() => console.log('CHANGED')} className='checkbox' type='checkbox' />
                        </div> 
                        : null
                      }
                      <div className='try-another-btn-container'>
                        <button onClick={value.handleTryAnotherMealClick} className='reg-btn'>Try Another</button>
                      </div>
                    </div>
                  </div>
                  <div className='idea'>
                    <div className='idea-top'>
                      <h2>Dessert</h2>
                    </div>
                    <div className='idea-middle'>
                      { value.state.dessert.loading ? <p>Loading...</p> : <p>{value.state.dessert.name}</p> }
                    </div>
                    <div className='idea-bottom'>
                      {window.sessionStorage.getItem('user_credentials') ?
                        <div className='already-tried-checkbox-container'>
                          <label htmlFor='checkbox'>
                            Already tried this?
                          </label>
                          <input onChange={() => console.log('CHANGED')} className='checkbox' type='checkbox' />
                        </div> 
                        : null
                      }
                      <div className='try-another-btn'>
                        <button onClick={value.handleTryAnotherDessertClick} className='reg-btn'>Try Another</button>
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

export default withRouter(HomePageRoute);