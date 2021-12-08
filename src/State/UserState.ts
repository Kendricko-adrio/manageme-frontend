import {atom, selector, useSetRecoilState} from "recoil";
import {getToDos, ToDoApi} from "./TaskState";
import {User} from "../Model/User";
import {getLoginUser} from "../Service/UserService";
import set = Reflect.set;


export const getUserSelector = selector<User | undefined>({
    key: "getUserSelector",
    get: async ({get}) =>{
        const currData = get(getCurrentUser)
        if(currData === undefined){
            const test = await getLoginUser();
            return test;
        }
        return currData;
    }
})

export const getCurrentUser = atom<User | undefined >({
    key: 'getLoginUser',
    default: undefined
});
