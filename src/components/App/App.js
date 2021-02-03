// Dependencies
import { Switch, Route } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";

// Styles
import './App.css';

// Components
import HomePageRoute from './../../routes/HomePageRoute/HomePageRoute';
import SignUpRoute from './../../routes/SignUpRoute/SignUpRoute';
import LogInRoute from './../../routes/LogInRoute/LogInRoute';

const firebaseConfig = {
  apiKey: "AIzaSyBSQVQMVeJYO5FStbvZuri2Uus1uL2TZW4",
  authDomain: "date-ideas-5a3ee.firebaseapp.com",
  projectId: "date-ideas-5a3ee",
  storageBucket: "date-ideas-5a3ee.appspot.com",
  messagingSenderId: "174058388833",
  appId: "1:174058388833:web:b9d201549ba4f5bfa01920",
  measurementId: "G-JY015DGVVC"
};

firebase.initializeApp(firebaseConfig);

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
