const IsLog=()=>{
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
    return (token)
}

export default IsLog;
  