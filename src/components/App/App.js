// Dependencies
import { Switch, Route } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Components
import HomePageRoute from './../../routes/HomePageRoute/HomePageRoute';
import SignUpRoute from './../../routes/SignUpRoute/SignUpRoute';
import LogInRoute from './../../routes/LogInRoute/LogInRoute';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={() => <HomePageRoute />} />
        <Route exact path="/signup" component={() => <SignUpRoute />} />
        <Route exact path="/login" component={() => <LogInRoute />} />
      </Switch>
    </div>
  );
}
