import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginAndSignupView } from "../layout";

import { auth, logout} from "../../store";


class RegisterandLoginFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSignUp = async(event) =>{
    event.preventDefault();
    const formName = event.target.name;
    await this.props.loginOrSignup( this.state, formName);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const formName = event.target.name;
    await this.props.loginOrSignup( this.state, formName);    
  }

  handleLogOut = async () => {    
    await this.props.logout();
  }

  render() {
    return (
      <LoginAndSignupView
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleLogOut={this.handleLogOut}
        handleSignUp={this.handleSignUp}
        isLoggedIn={this.props.isLoggedIn}
        userEmail={this.props.userEmail}
      />
    );
  }
};

// Map state to props;
const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email,
  };
};

// Map state to props;
const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email,
  };
};

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loginOrSignup: (userObj, formName) => dispatch(auth(userObj, formName)),
    logout : () => dispatch(logout()),
  }
};

export const Login = connect(mapLogin, mapDispatch)(RegisterandLoginFormContainer);
export const Signup = connect(mapSignup, mapDispatch)(RegisterandLoginFormContainer);