// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {me, updateUserThunk} from '../../store'
// import "../layout/style/profileview.css"
// import "./style/profileview.css"

// class profileview extends Component {
//   constructor() {
//     super()
//     this.state = {
//       email: '',
//       password: '',
//       reenterPassword: '',
//       editInfoSuccess: false,
//       passwordMismatch: false
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleClick = this.handleClick.bind(this)
//   }

//   async componentDidMount() {
//     await this.props.loadUserData()
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   async handleClick(event) {
//     event.preventDefault()

//     if (this.state.password === this.state.reenterPassword) {
//       const user = {
//         id: this.props.user.id,
//         email: this.state.email,
//         password: this.state.password
//       }
//       await this.props.updateUser(user)
//       this.setState({
//         editInfoSuccess: true
//       })
//     } else {
//       this.setState({passwordMismatch: true})
//     }
//   }

//   render() {
//     if (this.state.editInfoSuccess) {
//       return <p className="profile-text">Your password was changed successfully.</p>
//     } else {
//       return (
//         <div>
//           <form>
//             <label htmlFor="name_field" className="profile-text">Email:</label>
//             <input
//               type="email"
//               name="email"
//               id="name_field"
//               defaultValue={this.props.user.email}
//               onChange={e => this.handleChange(e)}
//               required
//               className="profile-input"
//             />
//             <label className="profile-text">New Password:</label>
//             <input
//               type="password"
//               name="password"
//               onChange={e => this.handleChange(e)}
//               required
//               className="profile-input"
//             />

//             <label className="profile-text">Re-Enter New Password:</label>
//             <input
//               type="password"
//               name="reenterPassword"
//               onChange={e => this.handleChange(e)}
//               required
//               className="profile-input"
//             />
//             <br />
//             <button
//               type="submit"
//               onClick={e => this.handleClick(e)}
//               className="is-success"
//             >
//               Update Password
//             </button>
//             <br />
//             <br />
//             {this.state.passwordMismatch ? (
//               <div className="profile-text">The passwords do not match. Try again.</div>
//             ) : null}
//           </form>
//         </div>
//       )
//     }
//   }
// }

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     loadUserData() {
//       dispatch(me())
//     },
//     updateUser(user) {
//       dispatch(updateUserThunk(user))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(profileview)