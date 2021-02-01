// Dependencies
import { Switch, Route } from 'react-router-dom';

// Styles
import './App.css';

// Components
import HomePageRoute from './../../routes/HomePageRoute/HomePageRoute';
import SignUpRoute from './../../routes/SignUpRoute/SignUpRoute';
import LogInRoute from './../../routes/LogInRoute/LogInRoute';

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
