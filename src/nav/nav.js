import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../search/search';
import CkBkContext from '../ckbkcontext';
import './nav.css'

class Nav extends Component {

    static contextType = CkBkContext;

    handleLogout = (e) => {
        e.preventDefault();
        this.context.setUserLogout();
    }

    render() {
        const { isLoggedIn } = this.context.user;
        return (
            <nav>
                <h1>Momma's Hidden Cookbook</h1>  
                <SearchBox history={this.props.history} />
                <div className="mainLinks">

                <Link to="/">My Dashboard</Link>
                {isLoggedIn && (
                    <Fragment>
                        <Link to="/addrecipe">
                            Add Recipe
                        </Link>
                            <Link to="/" onClick={this.handleLogout}>Logout</Link>
                    </Fragment>
                    )}
                </div>
            </nav>

        )
    }
}

export default Nav