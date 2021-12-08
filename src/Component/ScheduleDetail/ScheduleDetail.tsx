import {Schedule} from "../../Model/Schedule";
import style from "./ScheduleDetail.module.scss";

interface props{
    schedule: Schedule
}

export const ScheduleDetail:React.FC<props> = (props) => {

    const date = new Date(props.schedule.deadline);
    const stringDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
    console.log(date)
    return (
        <div className={style.detail}>
            <div>{props.schedule.schedule_type_id}</div>
            <div>{props.schedule.description}</div>
            <div>{stringDate}</div>
        </div>
    )
}
