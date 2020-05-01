import React, {Component} from 'react';
import AuthApiService from '../services/auth-api-service';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i); // eslint-disable-line
const validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            },
            error: null,
        };
    }

    //checks if the email is valid using the emailRegex on line 6
    handleEmail = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        if (name === 'email') {
            errors.email =
                validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
        };

        this.setState({
            errors,
            [name]: value
        });
    }

    //checks if the password is valid using the passwordRegex on line 7
    handlePassword = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        if (name === 'password') {
            errors.password =
                validPasswordRegex.test(value)
                    ? ''
                    : 'Must contain a Number, Upper case letter, Lower case letter and be 6 to 20 characters long'
        };

        this.setState({
            errors,
            [name]: value,
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password } = e.target
        alert('All signed up!')

        // if(password.value.length >= 6) {
        //     this.setState({
        //         error: null
        //     });
    
        //     AuthApiService.postUser({
        //         name: name.value,
        //         email: email.value,
        //         password: password.value
        //     })
        //         .then(user => {
        //             name.value = ''
        //             email.value = ''
        //             password.val = ''
        //             this.props.history.push('/login')
        //         })
        //         .catch(res => {
        //             this.setState({
        //                 error: res.error
        //             });
        //         });
        // } else {
        //     this.setState({
        //       error: 'Invalid Password'  
        //     })
        // }


    }

    render() {
        return (
            <section>
                <h1>Sign Up</h1>

                <form onSubmit={this.handleSignup}>
                    <label htmlFor="firstName">First Name
                        <input type="text" name="firstName" required />
                    </label>
                    <label htmlFor="lastName">Last Name
                        <input type="text" name="lastName" required/>
                    </label>
                    <label htmlFor="email">Email
                        <input type="text" name="email" required onChange={this.handleEmail}/>
                    </label>
                    <label htmlFor="password">Password
                        <input type="text" name="password" required onChange={this.handlePassword} />
                    </label>

                    <button>Sign Up</button>
                </form>
            </section>
        )
    }
}

export default SignUp