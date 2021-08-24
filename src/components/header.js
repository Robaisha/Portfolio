import React from 'react'
import About from './About';
import Home from './home';
import Contact from './contact';
import  './card.css'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function Header() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{width:'100%'}}>
                <div className="container">
                    <a className="navbar-brand heading" href="/"><span style={{color:'wheat'}}>Robaisha Masood</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a  className="nav-link active"><Link style={{color:'white',textDecoration:'none'}}  to="/">Home</Link></a>
                            <a  className="nav-link  "><Link style={{color:'white',textDecoration:'none'}} to="/about">About</Link></a>
                            <a  className="nav-link "><Link style={{color:'white',textDecoration:'none'}} to="/contact">Contact</Link></a>
                        </div>
                    </div>
                </div>
            </nav>
            
            <Switch>
                <Route exact path='/contact'>
                    <Contact />
                </Route>
                
                <Route exact path='/about'>
                     <About />   
                </Route>
                
                <Route path='/'>
                    <Home/>
                </Route>
                
            </Switch>
        </Router>



    )
}
