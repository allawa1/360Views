import React from 'react';
import logo from './IMG_7286.png';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import bookingForm from './components/bookingForm';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>360 Photobooth</h1>
      <p>We do all parties.
Weddings, Baby Showers, Gender Reveals, Kids Parties, Adult Parties!!!</p>
      </header>
      
      <main>
        <Switch>
          <Route exact path="/booking" component={bookingForm}/> 
        </Switch>
      </main>

    </div>
  );
}

export default App;
