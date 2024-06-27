import { usersAPI } from "../API/API";



let SET_USERS = "SET_USERS";

let initialState = {
   users: []
}

export const userReducer = (state = initialState , action) =>{
    switch(action.type){
        case SET_USERS : {
            return {...state ,users : action.users}
        } 
        default: 
        return state
    }
}

const setUsers = (users) =>{return {type: SET_USERS, users} }


export const getUserInfo = () => async (dispatch) =>{
    try {
        const users = await usersAPI.getUsers();
        dispatch(setUsers(users));
    } catch (error) {
        console.error("Error" , error);
    }
}

export default userReducer;