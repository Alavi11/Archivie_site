import axios from "axios";
import { useState } from "react";
import {Navigate} from "react-router-dom";
import IsLog from "../isLog";

const Login=()=>{
    const [usernameLogin,setUsernameLogin]=useState();
    const [passwordLogin,setPasswordLogin]=useState();

    const handelLogin=()=>{
        const user = {
            username : usernameLogin,
            password : passwordLogin
        };
        axios.post("https://backkhoshovash.iran.liara.run/api/login/",user)
        .then(res=>{
            if(res.data===false){
                alert("نام کاربری یا رمز عبور اشتباه است")
            }
            else{
                alert("با موفقیت وارد شدید");
                localStorage.setItem("name",res.data.username);
                localStorage.setItem("password",res.data.password);
                localStorage.setItem("x-auth-token",res.data.token);
                window.location.reload();
            }
        }).catch(err=>{
            console.log(err);
        })
    }


    if(IsLog()===true){
        return <Navigate to = "/admin"/>
    }

    return<>
        <div className="login">
            <input type={"text"} placeholder="نام کاربری" value={usernameLogin} onChange={e=>setUsernameLogin(e.target.value)}></input>
            <input type={"password"}  placeholder="رمز عبور" value={passwordLogin} onChange={e=>setPasswordLogin(e.target.value)}></input>
            <button type="submit" onClick={handelLogin}>ورود</button>
        </div>
    </>



    
}

export default Login ;