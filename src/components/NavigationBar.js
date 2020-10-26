import React from 'react'
// { withRouter } is a higher order component which is a function which wraps other components and give them extra features
import { Link, NavLink, withRouter } from 'react-router-dom'
import Logo from '../global/images/logo192.png'
const NavigationBar = (props) => {
    {/* Example of higher order component of react router named withRouter to access router props */}
    console.log('[Router props example with withRouter]', props)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <Link className="navbar-brand" to="/"><img src={Logo} alt='logo' width="45" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/store-home">storeHome</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ninjas">Ninjas</NavLink>
                        </li>
                    </ul>
                    {/* 
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form> 
                    */}
                </div>
            </nav>
        </div>
    )
}

export default withRouter(NavigationBar);