import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Index from '../Pages/Index'
import About from '../Pages/About'
import Users from '../Pages/Users'


function AppRouter() {
    return (
        <Router>
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Title</span>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation">
                        <Link className="mdl-navigation__link" to="/">Home</Link>
                        <Link className="mdl-navigation__link" to="/about">About</Link>
                        <Link className="mdl-navigation__link" to="/users">Users</Link>
                    </nav>
                </div>
            </header>

            <div className='container'>
                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
            </div>            
        </Router>
    );
}

export default AppRouter;