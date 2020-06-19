// user actions
export const ADD_USER = "ADD_USER";
export const GET_USER = "GET_USER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

BASE_URL = "http://localhost:3001";

// inital state
const initialState = {
	loggedInUser: {},
	currentUser: {}
};

// Action creators
const addUser = () =>{
  return{
    type: ADD_USER,
    user
  }
}

const getUser = () =>{
  return{
    type: GET_USER,
    user
  }
}

const login = () =>{
  return{
    type: LOGIN,
    user
  }
}

const logout = () =>{
  return{
    type: LOGOUT
  }
}

// Thunk Creators

export const getUserThunk = id => async dispatch => {
	try {
		const res = await axios.get(`${BASE_URL}/api/users/${id}`);
		dispatch(getUser(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const addUserThunk = (email, password) => async dispatch => {
	try {
		const body = {
			email: email,
			password: password
		};
		const newUser = await axios.post(`${BASE_URL}/auth/signup`, body, {
			withCredentials: true
		});
		dispatch(addUser(newUser.data));
	} catch (err) {
		console.log(err);
	}
};

export const loginThunk = (email, password) => async dispatch => {
	try {
		const body = {
			email: email,
			password: password
		};
		const user = await axios.post(`${BASE_URL}/auth/login`, body, {
			withCredentials: true
		});
		dispatch(login(user.data));
	} catch (err) {
		console.log(err);
	}
};

export const logoutThunk = () => async dispatch => {
	try {
		await axios.delete(`${BASE_URL}/auth/logout`, {
			withCredentials: true
		});
		dispatch(logout());
	} catch (err) {
		console.log(err);
	}
};

export const me = () => async dispatch => {
	try {
		const res = await axios.get(`${BASE_URL}/auth/me`, {
			withCredentials: true
		});
		dispatch(login(res.data || {}));
	} catch (err) {
		console.error(err);
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				loggedInUser: action.payload
			};
		case GET_USER:
			return {
				...state,
				currUser: action.payload
			};
		case LOGIN:
			return {
				...state,
				loggedInUser: action.payload
			};
		case LOGOUT:
			return {
				...state,
				loggedInUser: {}
			};
		default:
			return state;
	}
};