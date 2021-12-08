import style from './Schedule.module.scss';
import {useEffect, useState} from "react";
import {getAllSchedules} from "../../Service/ScheduleService";
import {Schedule} from "../../Model/Schedule";
import {ScheduleDetail} from "../ScheduleDetail/ScheduleDetail";
import {AddScheduleModal} from "../AddScheduleModal/AddScheduleModal";


export const ScheduleFC: React.FC = () => {

    const [data, setData] = useState<Schedule[]|undefined>(undefined);
    const [modal, setModal] = useState<boolean>(false)

    useEffect(() => {
        getAllSchedules().then(value => {
            setData(value);
            console.log(value);
        });
    }, []);

    return (
        <div className={style.schedule}>

            <AddScheduleModal isVisible={modal} setModal={setModal}/>
            <div className={style.box}>
                <div className={style.header}>
                    <div>
                        Schedule
                    </div>
                    <div className={style.close} onClick={event => {
                        setModal(true);
                    }}>+</div>
                </div>
                <div className={style.list}>
                    {data?.map(value => {
                        return <ScheduleDetail schedule={value} />
                    })}
                </div>
            </div>



        </div>
    );
}
