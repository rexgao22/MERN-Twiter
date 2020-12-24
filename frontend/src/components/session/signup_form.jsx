import React, { Component } from 'react';
 import {withRouter} from 'react-router-dom';
class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: '',
            errors: {}
        };
        this.handleSumbit = this.handleSumbit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.signedIn === true) {
            this.props.history.push('/login');
        }
        this.setState({errors: nextProps.errors})
    }
    
    update(type){
        return e => this.setState({[type]: e.currentTarget.value});
    }

    handleSumbit(e){
        e.preventDefault();
        let user ={
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password, 
            password2: this.state.password2
        };
        this.props.signup(user, this.props.history);
    }

    renderErrors(){
        return(
            <ul>
                {Object.keys(this.state.errors).map((error,i)=>(
                    <li key={`error=${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }

    render() { 
        return (
            <div>
                SignupForm
            </div>
        );
    }
}
 
export default SignupForm;