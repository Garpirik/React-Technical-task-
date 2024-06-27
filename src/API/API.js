import axios from "axios";

const instance = axios.create({
        baseURL: 'https://dummyjson.com/users',
});

export const usersAPI = {
    async getUsers(){
        try {
            const response = await instance.get();
            return response.data.users; 
        } catch(error){
        console.log("Error", error)
        }
    }

}

