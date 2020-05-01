import React, {Component} from 'react';
import AuthApiService from '../services/auth-api-service';
import CkBkContext from '../ckbkcontext';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    static contextType = CkBkContext;

    handleSubmit = (e) => {
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
            })
            .catch(error => {
                this.setState({
                    error
                })
            });

    }
    render() {
        return (
            <section>
                <h1>Login</h1>

                <form onSubmit={this.handleLogin}>
                    <label htmlFor="email">Email
                        <input name="email" type="email" required/>
                    </label>
                    <label htmlFor="password">Password
                        <input name="password" type="text" required />
                    </label>
                    <button>Login</button>
                </form>
            </section>
        )
    }
}

export default Login