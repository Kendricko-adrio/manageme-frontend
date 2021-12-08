import React, {useEffect, useState} from "react";
import "./App.css";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Login} from "./Page/Login/Login";
import {Dashboard} from "./Page/Dashboard/Dashboard";
import {User} from "./Model/User";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {getCurrentUser} from "./State/UserState";
import {getLoginUser} from "./Service/UserService";


function  App() {

    // const [user, setuser ] = useRecoilState(getCurrentUser)
    // getUserAuth();
    console.log("asdasd");
    // useEffect(() => {
    //
    //
    //     setUser()
    // })



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                {/*<Route path="/"    />*/}
                <Route path="/dashboard/*" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
