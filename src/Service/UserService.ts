import axios from "axios";
import {url} from "./index";
import {User} from "../Model/User";

export const loginUser = async(form: FormData) => {
    let response;
    try {
        response = await axios({
            method: "POST",
            data: form,
            url: url + "/login",
            withCredentials: true
        })
        console.log(response)
        return response.data;
    }catch{
        return undefined;
        // throw new Error('error in login')
    }

}

export const getLoginUser = async () => {
    let response;
    try {
        response = await axios.get<User>(url + "/login", {
            withCredentials: true,
        })
        // const response = await axios({
        //     method: "GET",
        //     url: url + "/login",
        //     withCredentials: true,
        // })
        console.log(response);

    }catch (error){
        return undefined;
    }
    return response.data;
}
