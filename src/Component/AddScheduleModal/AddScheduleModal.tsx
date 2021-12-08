
import style from './AddScheduleModal.module.scss';
import {useState} from "react";
import {RecoilState, useRecoilStateLoadable} from "recoil";
import {ToDoApi} from "../../State/TaskState";
import {setToDo} from "../../Service/Task";
import {addSchedule} from "../../Service/ScheduleService";

interface Props{
    isVisible?: boolean
    setModal : React.Dispatch<React.SetStateAction<boolean>>
}

export const AddScheduleModal:React.FC<Props> = (props) => {

    const [date, setDate] = useState<string>();
    const [desc, setDesc] = useState<string>("");

    const dateChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
        console.log(date);
    }

    const descriptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDesc(e.target.value);
    }

    const onSubmit = () => {
        const form = new FormData();
        if(desc === undefined) return;
        if(date === undefined) return;
        const unix = Date.parse(date);
        form.append('description', desc);
        form.append('deadline', unix.toString());
        addSchedule(form)
    }

    return (
        <div className={`${style.insert} ${props.isVisible ? "" : style.invisible}`}>
            <div className={style.close} onClick={event => {
                props.setModal(false);
            }}>
                X
            </div>
            <form className={style.form} onSubmit={onSubmit}>
                <input type="text" name={"description"} placeholder={"description"} onChange={descriptionChange}/>
                <input type={"datetime-local"} onChange={dateChange} />
                <input type="submit" value="submit"/>
            </form>


        </div>
    )
}
