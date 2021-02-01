// Dependencies
import { Switch, Route } from 'react-router-dom';

// Styles
import './App.css';

// Components
import HomePageRoute from './../../routes/HomePageRoute/HomePageRoute';
import SignUpRoute from './../../routes/SignUpRoute/SignUpRoute';
import LogInRoute from './../../routes/LogInRoute/LogInRoute';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path='/'>
          <HomePageRoute />
        </Route>
        <Route exact path='/signup'>
          <SignUpRoute />
        </Route>
        <Route exact path='/login'>
          <LogInRoute />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
