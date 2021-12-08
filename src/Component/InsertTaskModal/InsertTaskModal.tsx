import style from './InsertTaskModal.module.scss';
import {useState} from "react";
import {RecoilState, useRecoilStateLoadable} from "recoil";
import {ToDoApi} from "../../State/TaskState";
import {setToDo} from "../../Service/Task";

interface Props{
    isVisible?: boolean
    state: RecoilState<ToDoApi>
    task_type_id?: number
}

interface FormData{
    title: string
    description: string
}

export const InsertTaskModal:React.FC<Props> = (props) => {

    const [data,setData] = useRecoilStateLoadable(props.state);
    const [formData, setFormData] = useState<FormData>({
        title: "",
        description: ""
    });
    const onSubmitListener = () => {
        const form = new FormData();
        form.append('title', formData.title);
        form.append('description', formData.description);
        if(props.task_type_id) setToDo(form, props.task_type_id);
        props.isVisible = false;
    }

    const change = (event: any) =>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
        console.log(formData);
    }

    return (
        <div className={`${style.insert} ${props.isVisible ? "" : style.invisible}`}>
            <form action="" onSubmit={onSubmitListener}>
                <input type="text" name={"title"} placeholder={"title"} onChange={change} value={formData.title}/>
                <input type="text" name={"description"} placeholder={"description"} onChange={change} value={formData.description}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
