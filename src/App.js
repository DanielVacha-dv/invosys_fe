import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Link,
    Redirect,
    // Routes,
    Route,
    Switch,
} from "react-router-dom";

import DepartmentIndex from "./structures/department/DepartmentIndex";
import Departments from "./structures/department/GetDepartments";
import DepartmentDetail from "./structures/department/DepartmentDetail";
import './App.css';


export function App() {
    return (
        <div className="p-3 mb-2 bg-secondary text-white" style = {{height:"100vh"}}>
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/department"} className="nav-link">
                                    Department
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/people"} className="nav-link">
                                    Osobnosti
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/department" component={DepartmentIndex}/>
                        <Route path="/department/show/:id" component={DepartmentDetail}/>
                        {/*<Route path="/movies/create" component={MovieForm} />*/}
                        {/*<Route path="/movies/edit/:id" component={MovieForm} />*/}

                        {/*<Route exact path="/people" component={PersonIndex} />*/}
                        {/*<Route path="/people/show/:id" component={PersonDetail} />*/}
                        {/*<Route path="/people/create" component={PersonForm} />*/}
                        {/*<Route path="/people/edit/:id" component={PersonForm} />*/}
                    </Switch>
                </div>
                <Redirect from="/" to="/department"/>
            </Router>
        </div>
    );
}

export default App;
