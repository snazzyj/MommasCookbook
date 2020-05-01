import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import CkBkContext from '../ckbkcontext';

class Nav extends Component {

    static contextType = CkBkContext;

    handleLogout = (e) => {
        e.preventDefault();
        this.context.setUserLogout();
    }

    render() {
        const {isLoggedIn} = this.context.user;
        return (
            <Fragment>
            <Link to="/">My Dashboard</Link>
            {isLoggedIn && (
                <Link to="/" onClick={this.handleLogout}>Logout</Link>
            )}
            </Fragment>

        )
    }
}

export default Nav