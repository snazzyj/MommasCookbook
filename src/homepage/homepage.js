import React, {Component, Fragment} from 'react';
import Profile from '../profile/profile';
import Login from '../login/login';
import SignUp from '../signup/signup';
import CkBkContext from '../ckbkcontext';
import './homepage.css'

class Homepage extends Component {

    static contextType = CkBkContext;

    render() {

        const {isLoggedIn} = this.context.user  

        return (
            <Fragment>
                {isLoggedIn
                    ? <Fragment>
                        <Profile />
                      </Fragment>
                    : <Fragment>
                        <h1 className="mainTitle">Momma's Hidden Cookbook</h1>  
                        <div className="loginSignupBox">
                            <Login />
                            <SignUp />
                        </div>
                      </Fragment>
                }
            </Fragment>
        )
    }
}

export default Homepage