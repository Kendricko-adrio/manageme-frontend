import style from './Login.module.scss';
import {ChangeEvent, FormEvent, useState} from "react";
import {loginUser} from "../../Service/UserService";
import {Navigate, useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {getUserSelector} from "../../State/UserState";

interface data{
  username: string
  password: string
}

export const Login: React.FC = () => {



  const [data, setData] = useState<data>({
    password: "",
    username: ""
  })

  const navigate = useNavigate();

  const user = useRecoilValue(getUserSelector);


  console.log(user);

  if(user !== undefined){
    return <Navigate to={"/dashboard"}/>;
  }

  const submit = (event: any) => {
    // event.preventDefault();
    const form = new FormData();
    form.append('username', data.username);
    form.append('password', data.password);
    loginUser(form).then(value => {
      if(value === undefined){
        return;
      }else{
        console.log(value);
        navigate('/dashboard')
      }

    })

    // if(loginUser(form) !== undefined) navigate('/dashboard');
  }

  const change = (e : any) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })

    console.log(data)
  }

  return (
      <div className={style.login}>
        <div className={style.box}>
          <h1>ManageME</h1>
          <form onSubmit={submit}>
            <input type="text" name={"username"} placeholder={"Username"} onChange={change}/>
            <input type="password" name={"password"} placeholder={"Password"} onChange={change}/>
            <input type="submit" value="Login"/>
          </form>
          {/*<div onClick={submit}>tester</div>*/}
        </div>

      </div>
  );
};
