import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import jwtDecode from 'jwt-decode';
import { ToastContainer } from 'react-bootstrap';
import { Route,Redirect} from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import 'react-toastify/dist/ReactToastify.css';
import { Switch } from 'react-router-dom';
import Navbar from './components/navBar';
import Logout from "./components/common/logout";

class App extends Component {

    state = { }
     componentDidMount() {
         try {
            const jwt = localStorage.getItem('token');
            const user = jwtDecode(jwt);
            this.setState({ user })
             
         } catch (ex) {   
         }
         
     }
    render() { 
        return (<React.Fragment>
            <ToastContainer />
      <Navbar user={this.state.user}/>
          <main className='container'>
              <Switch> 
              <Route path="/register" exact component={RegisterForm}></Route>
              <Route path="/loginForm" exact component={LoginForm}></Route>
              <Route path="/logout" component={Logout}></Route>
              <Route path="/movies" exact component={Movies}></Route>
              <Route path="/movies/:id" component={MovieForm}></Route> 
              <Route path="/customers" component={Customers}></Route>
              <Route path="/rentals" component={Rentals}></Route>
              <Route path="/not-found" component={NotFound}></Route>
              <Redirect from='/' exact to='/movies' />
              <Redirect to='not-found' />
              </Switch>
          </main>
      </React.Fragment>);
    }
}
 


export default App;
