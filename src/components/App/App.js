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
    <div className='App'>
      <Switch>
        <Route exact path='/' component={() => <HomePageRoute />} />
        <Route exact path='/signup' component={() => <SignUpRoute />} />
        <Route exact path='/login' component={() => <LogInRoute />} />
      </Switch>
    </div>
  );
}
