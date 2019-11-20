import { AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN } from "./actionTypes";

const initialState = {
	login:{
		token: null,
		userId: null,
	}
}


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_SET_TOKEN:
				return {
					...state,
					login:{
						...state.login,
						token: action.token,
						userId: action.user.id
					}
				};
		case AUTH_REMOVE_TOKEN:
				// return {
				// 	...state,
				// 	login:{
				// 		...state.login,
				// 		token: action.token,
				// 		user: [...action.user]
				// 	}
				// };
		default:
			return state;
	}
};


export default reducer;