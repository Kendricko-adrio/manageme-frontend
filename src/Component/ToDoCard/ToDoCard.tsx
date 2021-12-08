import style from './ToDoCard.module.scss';
import {ToDo} from "../../Model/ToDo";
import {shiftTaskLeft, shiftTaskRight} from "../../Service/Task";
import {useRecoilState} from "recoil";
import {getToDoState, getToDoState2, getToDoState3} from "../../State/TaskState";

interface Props {

    todo?:ToDo
}

export const ToDoCard: React.FC<Props> = (props) => {

    const [data,setData] = useRecoilState(getToDoState);
    const [data2,setData2] = useRecoilState(getToDoState2);
    const [data3,setData3] = useRecoilState(getToDoState3);
    const onShiftRight = () => {
        if(props.todo?.ID === undefined) return;

        shiftTaskRight(props.todo?.ID).then(value => {

            if (props.todo?.task_type_id === 1){
                const index = data.data?.findIndex(value1 => value1 === props.todo)

                if(data.data !== undefined){
                    setData({
                        data: [
                            ...data.data.slice(0, index) ,
                            ...data.data.slice(index as number + 1)
                        ]
                    })
                }

                const newTodo : ToDo = {
                    ID: props.todo?.ID,
                    task_description: props.todo?.task_description,
                    task_title: props.todo?.task_title,
                    task_type_id: props.todo?.task_type_id as number + 1,
                    user_id: props.todo?.user_id,
                    CreatedAt: props.todo?.CreatedAt,
                    DeletedAt: props.todo?.DeletedAt,
                    UpdatedAt: props.todo?.UpdatedAt
                };
                // newTodo.ID
                if(data2.data !== undefined){
                    setData2({
                        data: [
                            ...data2.data ,
                            newTodo as ToDo
                        ]
                    });
                }
            }

            if (props.todo?.task_type_id === 2){
                const index = data2.data?.findIndex(value1 => value1 === props.todo)

                if(data2.data !== undefined){
                    setData2({
                        data: [
                            ...data2.data.slice(0, index) ,
                            ...data2.data.slice(index as number + 1)
                        ]
                    })
                }

                const newTodo : ToDo = {
                    ID: props.todo?.ID,
                    task_description: props.todo?.task_description,
                    task_title: props.todo?.task_title,
                    task_type_id: props.todo?.task_type_id as number + 1,
                    user_id: props.todo?.user_id,
                    CreatedAt: props.todo?.CreatedAt,
                    DeletedAt: props.todo?.DeletedAt,
                    UpdatedAt: props.todo?.UpdatedAt
                };
                // newTodo.ID
                if(data3.data !== undefined){
                    setData3({
                        data: [
                            ...data3.data ,
                            newTodo as ToDo
                        ]
                    });
                }
            }


        });


    }
    const onShiftLeft = () => {
        if(props.todo?.ID === undefined) return;

        shiftTaskLeft(props.todo?.ID).then(value => {
            if (props.todo?.task_type_id === 2){
                const index = data2.data?.findIndex(value1 => value1 === props.todo)

                if(data2.data !== undefined){
                    setData2({
                        data: [
                            ...data2.data.slice(0, index) ,
                            ...data2.data.slice(index as number + 1)
                        ]
                    })
                }

                const newTodo : ToDo = {
                    ID: props.todo?.ID,
                    task_description: props.todo?.task_description,
                    task_title: props.todo?.task_title,
                    task_type_id: props.todo?.task_type_id as number - 1,
                    user_id: props.todo?.user_id,
                    CreatedAt: props.todo?.CreatedAt,
                    DeletedAt: props.todo?.DeletedAt,
                    UpdatedAt: props.todo?.UpdatedAt
                };
                // newTodo.ID
                if(data.data !== undefined){
                    setData({
                        data: [
                            ...data.data ,
                            newTodo as ToDo
                        ]
                    });
                }
            }

            if (props.todo?.task_type_id === 3){
                const index = data3.data?.findIndex(value1 => value1 === props.todo)

                if(data3.data !== undefined){
                    setData3({
                        data: [
                            ...data3.data.slice(0, index) ,
                            ...data3.data.slice(index as number + 1)
                        ]
                    })
                }

                const newTodo : ToDo = {
                    ID: props.todo?.ID,
                    task_description: props.todo?.task_description,
                    task_title: props.todo?.task_title,
                    task_type_id: props.todo?.task_type_id as number - 1,
                    user_id: props.todo?.user_id,
                    CreatedAt: props.todo?.CreatedAt,
                    DeletedAt: props.todo?.DeletedAt,
                    UpdatedAt: props.todo?.UpdatedAt
                };
                // newTodo.ID
                if(data2.data !== undefined){
                    setData2({
                        data: [
                            ...data2.data ,
                            newTodo as ToDo
                        ]
                    });
                }
            }
        });

    }

    return (
        <div className={style.card}>
            <div className={style.head}>
                {props.todo && props.todo.task_title}
            </div>
            <div className={style.content}>
                {props.todo && props.todo.task_description}
            </div>
                {props.todo?.task_type_id != 1 && <div onClick={onShiftLeft} className={style.prev}>&lt;</div>}
                {props.todo?.task_type_id != 3 && <div onClick={onShiftRight} className={style.next}>&gt;</div>}
        </div>
    );
}
