import React, { Component } from "react";
import { LoginPage } from "../layout";

export class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    console.log(this.props.userId);
    this.props.loginOrSignup(
      this.state.username,
      this.state.password,
      formName,
      this.props.history,
      this.props.userId
    );
  };
  render() {
    return (
      <div>
        <LoginPage
          name={this.props.name}
          displayName={this.props.displayName}
          error={this.props.error}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isLoggedIn={this.props.isLoggedIn}
          userName={this.props.userName}
        />
      </div>
    );
  }
}

export default LoginContainer;
