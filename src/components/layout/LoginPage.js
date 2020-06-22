import React, { Component } from "react";
import "./style/login.css";
import { BrowserRouter, Link } from "react-router-dom";

export class LoginPage extends Component {
  render() {
    return (
      <div className="loginPage">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>Sign In</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="username"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend" id="login">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<Link to="/register">Register</Link>
                </div>
                <div className="d-flex justify-content-center links">
                  <Link to="/">Home</Link>
                </div>
                <div className="d-flex justify-content-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
// import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { auth } from "../../store";

// const AuthForm = (props) => {
//   const { name, displayName, handleSubmit, error } = props;

//   return (
//     <div>
//       <form onSubmit={handleSubmit} name={name}>
//         <div>
//           <label htmlFor="email">
//             <small className="text-info">Email</small>
//           </label>
//           <input name="email" type="text" />
//         </div>
//         <div>
//           <label htmlFor="password">
//             <small className="text-info">Password</small>
//           </label>
//           <input name="password" type="password" />
//         </div>
//         <div>
//           <button type="submit">{displayName}</button>
//         </div>
//         {error && error.response && (
//           <div className="text-info"> {error.response.data} </div>
//         )}
//       </form>
//       <a className="text-info" href="http://localhost:3001/auth/google">
//         {displayName} with Google
//       </a>
//     </div>
//   );
// };

// const mapLogin = (state) => {
//   return {
//     name: "login",
//     displayName: "Login",
//     error: state.user.error,
//   };
// };

// const mapSignup = (state) => {
//   return {
//     name: "signup",
//     displayName: "Sign up",
//     error: state.user.error,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault();
//       const formName = evt.target.name;
//       const email = evt.target.email.value;
//       const password = evt.target.password.value;
//       dispatch(auth(email, password, formName));
//     },
//   };
// };

// export const Login = connect(mapLogin, mapDispatch)(AuthForm);
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

// AuthForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object,
// };
