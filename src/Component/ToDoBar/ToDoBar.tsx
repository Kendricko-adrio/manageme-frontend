import style from './ToDoBar.module.scss';
import {ToDoCard} from "../ToDoCard/ToDoCard";
import {useEffect, useState} from "react";
import {RecoilState, useRecoilState, useRecoilStateLoadable, useRecoilValue} from "recoil";
import {ToDo} from "../../Model/ToDo";
import {getToDos, getToDoState, getToDoState2, getToDoState3, ToDoApi} from "../../State/TaskState";
import {InsertTaskModal} from "../InsertTaskModal/InsertTaskModal";

interface Props{
    state: RecoilState<ToDoApi>
    name: string
    task_type_id?: number
}

export const ToDoBar: React.FC<Props> = (props) => {


    const [modal, setModal] = useState(false);
    const [data,setData] = useRecoilStateLoadable(props.state);
    // const data = useRecoilState(getToDos(1))

    // useEffect(() => {
    //     // console.log(getAllToDo());
    //
    // });
    console.log(data);

    // if(data.state === "loading"){
    //     return <div>wait</div>
    // }

    return (
        <div className={style.bar}>
            <InsertTaskModal isVisible={modal} state={props.state} task_type_id={props.task_type_id}/>
            <div className={style.head}>
                <div>{props.name}</div>
                <div
                    className={style.plus}
                    onClick={event => {
                    setModal(true)
                }}


                >
                    {/*<Link to={}/>*/}
                    +
                </div>
            </div>

            <div className={style.content}>
                {data.state === "loading" && <div>
                    waiting
                </div>}
                {data.state === "hasError" && <div>
                    error
                </div>}
                {data.state === "hasValue" && data.contents.data != undefined &&
                data.contents.data.map( (data: ToDo) => {
                        return <ToDoCard todo={data} key={data.ID}/>
                    }
                    )}

            </div>
        </div>
    );
}
