import { EDIT_USER } from "../constant";

const user={username:'',password:''}

export default function userReducer(preState=user,action) {
	const {type,data} = action
	switch (type) {
		case EDIT_USER:
			return data
		default:
			return preState
	}
} 