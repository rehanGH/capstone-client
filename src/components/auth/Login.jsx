// import React, { Component } from "react";
// import { connect } from "react-redux";
// import LoginView from "./LoginView";
// import { loginThunk } from "../../store/utilities/userReducer";

// class Login extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			email: "",
// 			password: ""
// 		};
// 	}

// 	handleChange = event => {
// 		this.setState({ [event.target.name]: event.target.value });
// 	};

// 	handleSubmit = event => {
// 		event.preventDefault();
// 		this.props.signUp(this.state.email, this.state.password);
// 		this.props.history.goBack();
// 	};

// 	render() {
// 		return (
// 			<LoginView
// 				handleChange={this.handleChange}
// 				handleSubmit={this.handleSubmit}
// 			/>
// 		);
// 	}
// }

// const mapDispatchToProps = dispatch => ({
// 	signUp: (name, email, password) => dispatch(loginThunk(name, email, password))
// });

// export default connect(mapDispatchToProps)(Login);