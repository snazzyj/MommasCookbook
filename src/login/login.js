import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service';
import CkBkContext from '../ckbkcontext';
import '../homepage/homepage.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
        this._isMounted = false;
    }
    static contextType = CkBkContext;

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleLogin = (e) => {
        e.preventDefault();

        const { email, password } = e.target;

        AuthApiService.postLogin({
            email: email.value,
            password: password.value
        })
            .then(res => {
                const { user } = res;
                this.context.setUserLogin(user)
                this.props.history.push('/')
                this._isMounted = false
            })
            .catch(error => {
                if (this._isMounted) {
                    this.setState({
                        error: error.error.message
                    })
                }

            });

    }

    render() {
        const {error} = this.state;
        return (
            <section className="login">
                <h1>Login</h1>

                <form onSubmit={this.handleLogin} className="userLogin">
                    <label htmlFor="email">Email
                        <input name="email" type="email" required />
                    </label>
                    <label htmlFor="password">Password
                        <input name="password" type="password" required />
                    </label>
                    <button>Login</button>
                </form>
                <p>
                    {error}
                </p>
            </section>
        )
    }
}

export default Login