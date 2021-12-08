import axios from "axios";
import {url} from "./index";
import {Schedule} from "../Model/Schedule";

export const getAllSchedules = async () => {

    try {
        const response = await axios.get<Schedule[] | undefined>(url + "/schedules", {
            withCredentials: true
        });
        return response.data;
    } catch (e) {
        return undefined
    }

}

export const addSchedule = async (form: FormData) => {

    try {
        const response = await axios.post(url + "/schedule/add", form, {
            withCredentials: true
        });
        return response.data;
    } catch (e) {
        return
    }

}
