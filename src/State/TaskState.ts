import {ToDo} from "../Model/ToDo";
import {atom, selector, selectorFamily} from "recoil";
import {getAllToDo} from "../Service/Task";

export interface ToDoApi {
    data?: ToDo[]
}

export const getToDos = selectorFamily <ToDoApi, number>({
    key: "getToDos",
    get: (id) => async ({get}) => {
        const response: ToDoApi = {
            data: undefined
        };
        try {
            response.data = await getAllToDo(id);
            console.log(response);
        } catch (error) {
            console.error(`allUsersState -> getUsers() ERROR: \n${error}`);
        }
        return response;
    }
    // set: param => async ({get}) =>{
    //
    // }
});

export const getToDoSelect = selector({
    key: "getToDoSelect",
    get: async ({get}) => {
        const response1: ToDoApi = {
            data: undefined
        };
        const response2: ToDoApi = {
            data: undefined
        };
        const response3: ToDoApi = {
            data: undefined
        };
        // let response1;
        // let response2;
        // let response3;
        try {
            response1.data = await getAllToDo(1);
            response2.data = await getAllToDo(2);
            response3.data = await getAllToDo(3);

            // console.log(response);
        } catch (error) {
            console.error(`allUsersState -> getUsers() ERROR: \n${error}`);
        }
        return [
            response1,
            response2,
            response3
        ];
    }
    // set: param => async ({get}) =>{
    //
    // }
});

export const getToDoAtom = atom<ToDo[]>({
    key: 'getToDoAtom',
    default: []
})


export const getToDoState = atom<ToDoApi>({
    key: 'getToDoState',
    default: getToDos(1)
});
export const getToDoState2 = atom<ToDoApi>({
    key: 'getToDoState2',
    default: getToDos(2)
});
export const getToDoState3 = atom<ToDoApi>({
    key: 'getToDoState3',
    default: getToDos(3)
});
