import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams,Navigate } from "react-router-dom";
import IsLog from "./isLog";


const Archive = ()=>{
    let {Year} = useParams();

    const [imageArchive,setImageArchive] = useState([]);
    const [imageHeader,setImageHeader] = useState("");


    useEffect(()=>{
        axios.get("https://backkhoshovash.iran.liara.run/api/archive/")
        .then(res=>{
            setImageArchive(res.data);
        }).catch(err=>{
            console.log(err);
    })
    },[])
    useEffect(()=>{
        axios.get("https://backkhoshovash.iran.liara.run/api/header/")
        .then(res=>{
            setImageHeader(res.data[res.data.length - 1 ].name);
        }).catch(err=>{
            console.log(err);
    })
    },[])
    const showtasavir=()=>{
        document.querySelector(".archiveright").style.visibility = "hidden";
        document.querySelector(".archiveleft").style.visibility = "visible"
    }
    const showfilm=()=>{
        document.querySelector(".archiveleft").style.visibility = "hidden";
        document.querySelector(".archiveright").style.visibility = "visible"
    }
    

    return <>
    <div className="header"  style={{backgroundImage: `url(https://backkhoshovash.iran.liara.run/${imageHeader})`}}>
                <p className="pHeader">{Year}</p>
    </div>
    <div className="divres">
            <p onClick={showtasavir}>تصاویر</p>
            <p onClick={showfilm}>فیلم ها</p>
        </div>
    <div className="Archive">
        <div className="archiveleft">
            <h1>تصاویر</h1>
            {imageArchive.map(item=>{
                if(item.year === Year ){
                    if(item.type === "img"){
                        return <>
                                <img className="archiveImguser" src={`https://backkhoshovash.iran.liara.run/Archive/${item.file}`}/>
                        </>
                    }
                }
                return <></>
                
            })}
        </div>
        <div className="archiveright">
            <h1>فیلم ها</h1>
            {imageArchive.map(item=>{
                    if(item.year === Year ){
                        if(item.type === "film"){
                            return <>
                                    <video className="archiveFilmuser" controls >
                                        <source src={`https://backkhoshovash.iran.liara.run/Archive/${item.file}`} type="video/mp4"/>
                                    </video>
                            </>
                        }
                    }
                    return <></>
                    
            })}
        </div>
    </div>
    </>

}

export default Archive ;