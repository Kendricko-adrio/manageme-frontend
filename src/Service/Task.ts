import axios from "axios";
import {ToDo} from "../Model/ToDo";
import {url} from "./index";

export const getAllToDo = async (id: number) => {

    try {
        const response = await axios.get<ToDo[]>(url + '/task/to-do/' + id,{
            withCredentials: true
        });
        console.log(response);
        return response.data || [];
    } catch (error: Error | any) {
        throw new Error(
            `Error in 'axiosGetJsonData(${'http://localhost:1234/task/to-do'})': ${error.message}`
        )
    }
}

export const setToDo = async (form: FormData, id: number) => {
    try {
        const response = await axios({
            method: "post",
            url: url + '/task/to-do/' + id,
            data: form,
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response);
    }catch (e) {

    }

}

export const shiftTaskRight = async (id: number) => {
    try {
        const response = await axios.put(url + '/task/to-do/' + id + '/right', {
            withCredentials: true,

        },
            {
                responseType: "text"
            })
        console.log(response);
    }catch (e) {

    }

}

export const shiftTaskLeft = async (id: number) => {
    try {
        const response = await axios.put(url + '/task/to-do/' + id + '/left', {
                withCredentials: true,
            },
            {
                responseType: "text"
            })
        console.log(response);
    }catch (e) {

    }

}
