import style from './ToDoList.module.scss';
import {ToDoBar} from "../ToDoBar/ToDoBar";
import {getToDoState, getToDoState2, getToDoState3} from "../../State/TaskState";
import {InsertTaskModal} from "../InsertTaskModal/InsertTaskModal";

export const ToDoList: React.FC = () => {
  return (
      <div className={style.todo}>

          <ToDoBar state={getToDoState} name={"To Do"} task_type_id={1}/>
          <ToDoBar state={getToDoState2} name={"On Progress"} task_type_id={2}/>
          <ToDoBar state={getToDoState3} name={"Completed"} task_type_id={3}/>
      </div>
  );
};
