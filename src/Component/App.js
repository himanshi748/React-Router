import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Student from './Student';
import './App.css';


class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul>
              <li className='home-space'>
                <Link to="/home">Home</Link>
              </li>
              <li className='about-space'>
                <Link to="/about">About Us</Link>
              </li>
              <li className='student-space'>
                <Link to="/student">Student</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/home' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/student' element={< Student />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;