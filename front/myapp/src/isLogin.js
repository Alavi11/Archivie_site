import { Navigate , Outlet } from "react-router-dom";

const IsLogin=()=>{
    const wath = localStorage.getItem("x-auth-token");
    let token  ;
    if(wath === null){
        token = false;
    }
    else if(wath === "undefined"){
        token = false;
    }
    else{
        token = true;
    }
    return (token ? <Outlet/> : <Navigate to="/"/>)
}

export default IsLogin;
  