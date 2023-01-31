import axios from "axios";
import { useState,useEffect } from "react";
import IsLog from "../isLog";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const YEAR = [1401,1400,1399,1398,1397,1396,1395,1394,1393,1392,1391,1390,1389,1388,1387,1386,1385,1384,1383,1382,1381,1380];

const User=()=>{

    const [imageHeader,setImageHeader] = useState("");
    const [Tazeha,setTazeha] = useState([]);
    const [main,setMain]=useState([]);

    


    axios.get("https://backkhoshovash.iran.liara.run/api/header/")
        .then(res=>{
            console.log(res.data);
            setImageHeader(res.data[res.data.length - 1 ].name);
        }).catch(err=>{
            console.log(err);
        })

        if(IsLog()===true){
            return <Navigate to = "/admin"/>
        }
    axios.get("https://backkhoshovash.iran.liara.run/api/tazeha/")
        .then(res=>{
            setTazeha(res.data);
        }).catch(err=>{
            console.log(err);
       
         
        })
    axios.get("https://backkhoshovash.iran.liara.run/api/main/")
            .then(res=>{
                setMain(res.data);
            }).catch(err=>{
                console.log(err);
         
    })
    const showhome=()=>{
        document.querySelector(".bodycenter").style.visibility = "visible";
        document.querySelector(".bodyright").style.visibility = "hidden"
        document.querySelector(".bodyleft").style.visibility = "hidden"
    }
    const showtasavir=()=>{
        document.querySelector(".bodycenter").style.visibility = "hidden";
        document.querySelector(".bodyright").style.visibility = "hidden"
        document.querySelector(".bodyleft").style.visibility = "visible"
    }
    const showfilm=()=>{
        document.querySelector(".bodycenter").style.visibility = "hidden";
        document.querySelector(".bodyright").style.visibility = "visible"
        document.querySelector(".bodyleft").style.visibility = "hidden"
    }
    

    return <>
        <div className="header"  style={{backgroundImage: `url("https://backkhoshovash.iran.liara.run/${imageHeader}")`}}>
                <p className="pHeader">یادواره شهدای خشواش</p>
                <h3 className="hHeader"><Link to="/login"> ورود مدیر </Link></h3>
        </div>
        <div className="divres">
            <p onClick={showhome}>خانه</p>
            <p onClick={showtasavir}>آرشیو</p>
            <p onClick={showfilm}>تازه ترین ها</p>
        </div>
        <div className="body">
            <div className="bodyright">
                <div className="bodyright-head">
                    <p className="onvan">تازه ترین ها</p>
                </div>
                <div className="bodyright-data">
                    {Tazeha.map(item=>{
                        if(item.type === "img"){
                            return <>
                                <img className="tazehaImg" src={`https://backkhoshovash.iran.liara.run/Tazeha/${item.name}`}/>
                            </>
                        }
                        if(item.type === "film"){
                            return <>
                                <video className="tazehaFilme" controls >
                                    <source src={`https://backkhoshovash.iran.liara.run/Tazeha/${item.name}`} type="video/mp4"/>
                                </video>
                            </>
                        }
                    })}
                </div>
            </div>
            <div className="bodycenter">
                <div className="bodycenter-head">
                </div>
                <div className="bodycenter-data">
                        {main.map((item)=>{
                            if(item.type === "img"){
                                return <>
                                    <img className="mainImg" src={`https://backkhoshovash.iran.liara.run/Main/${item.name}`}/>
                                </>
                            }
                            if(item.type === "film"){
                                return <>
                                    <video className="mainFilme" controls >
                                        <source src={`https://backkhoshovash.iran.liara.run/Main/${item.name}`} type="video/mp4"/>
                                    </video>
                                </>
                            }
                        })}
                </div>
            </div>
            <div className="bodyleft">
                <div className="bodyleft-head">
                    <p className="onvan">آرشیو</p>
                </div>
                <div className="bodyleft-year">
                    {
                        YEAR.map(item=>{
                            return <><h3 style={{marginTop:"20px"}}><Link style={{color:"black"}} to={`/archive/${item}`}>{item}</Link></h3>
                            </>
                        })
                    }
                </div>
                
            </div>
        </div>





    </>
}
export default User;