import {Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import {Home} from "../../Component/Home/Home";
import {ToDoList} from "../../Component/ToDoList/ToDoList";
import style from "./Dashboard.module.scss";
import {useRecoilValue} from "recoil";
import {getCurrentUser, getUserSelector} from "../../State/UserState";
import {getAllSchedules} from "../../Service/ScheduleService";
import {ScheduleFC} from "../../Component/Schedule/ScheduleFC";
import userWhite from "../../image/usericonwhite.png";
import home from "../../image/home.png";
import file from "../../image/filefile.png";

export const Dashboard: React.FC = () => {

    const user = useRecoilValue(getUserSelector);
    //
    // getAllSchedules().then(value => {
    //     console.log(value)
    // })
    //
    // console.log(user);

    if(user === undefined){
        return <Navigate to={"/"}/>;
    }

    return (
        <div className={style.container}>
            <header className={style.header}>
                Manage ME
            </header>
            <div className={style.main}>
                <nav className={style.nav}>
                    <div className={style.user}>
                        <img src={userWhite} alt="" />
                        {user && user.username}
                    </div>
                    <div className={style.component}>
                        <div className={style.detail}>
                            <img src={home} alt="" />
                            <Link to={'/dashboard/home'} >Home</Link>
                        </div>
                        <div className={style.detail}>
                            <img src={file} alt="" />
                            <Link to={'/dashboard/to-do-list'}>To Do List</Link>
                        </div>
                        <div className={style.detail}>
                            <img src={file} alt="" />
                            <Link to={'/dashboard/schedule'}>Schedule</Link>
                        </div>
                        <div className={style.detail}>
                            <img src={userWhite} alt="" />
                            <div>Brand Sentiment Analysis</div>
                        </div>

                    </div>
                </nav>
                <div className={style.content}>
                    <Routes>
                        <Route path="home" element={<Home/>}/>
                        <Route path="to-do-list" element={<ToDoList/>}/>
                        <Route path="schedule" element={<ScheduleFC/>}/>
                    </Routes>
                </div>
            </div>

        </div>
    );
};
