import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Dashboard from './components/pages/dashboard';
import Post from './components/pages/post';
import Footer from './components/layout/footer';
import Errors from './components/pages/error';


class App extends Component {
  render() {
    return (
  
      <Router >
       
         <Header  />
         <div className="container">
         <Switch>
          
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/post" component={Post}/>
          <Route exact path="/error" component={Errors}/>
        </Switch>
         </div>
        <Footer/>
       
     </Router>
   
  );
}
}

export default App;
