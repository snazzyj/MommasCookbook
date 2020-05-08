import React, {Component, Fragment} from 'react';
import Profile from '../profile/profile';
import Login from '../login/login';
import SignUp from '../signup/signup';
import Nav from '../nav/nav';
import SearchBox from '../search/search';
import CkBkContext from '../ckbkcontext';

class Homepage extends Component {

    static contextType = CkBkContext;

    render() {

        const {isLoggedIn} = this.context.user  

        return (
            <Fragment>
                {isLoggedIn
                    ? <Fragment>
                        <Nav />
                        <Profile />
                      </Fragment>
                    : <Fragment>
                        <h1>Momma's Hidden Cookbook</h1>  
                        <nav>
                            <Login />
                            <SignUp />
                        </nav>
                        <SearchBox history={this.props.history} />
                      </Fragment>
                }
            </Fragment>
        )
    }
}

export default Homepage