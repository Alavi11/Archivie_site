import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const YEAR = [1401,1400,1399,1398,1397,1396,1395,1394,1393,1392,1391,1390,1389,1388,1387,1386,1385,1384,1383,1382,1381,1380];


const Admin=()=>{

    const [isOpenArchive,setIsOpenA]=useState(false);
    const [isOpenTazeha,setIsOpenT]=useState(false);
    const [isOpenMain,setIsOpenMain] = useState(false);



    // useEffect(()=>{
    //     const CloseA=(e)=>{
    //         console.log(e.path[0]);
    //         if(e.path[0].tagName !== "P"){
    //             setIsOpenA(false)
    //         }
    //     };
    //     document.body.addEventListener("click",CloseA);
    //     return ()=> document.body.removeEventListener("click",CloseA);
    // },[])
    // useEffect(()=>{
        
    //     const CloseT=(e)=>{
    //         console.log(e.path[0]);
    //         if(e.path[0].tagName !== "P"){
    //             setIsOpenT(false)
    //         }
    //     };
    //     document.body.addEventListener("click",CloseT);
    //     return ()=> document.body.removeEventListener("click",CloseT);
    // },[])
    // useEffect(()=>{
        
    //     const CloseM=(e)=>{
    //         console.log(e.path[0]);
    //         if(e.path[0].tagName !== "P"){
    //             setIsOpenMain(false)
    //         }
    //     };
    //     document.body.addEventListener("click",CloseM);
    //     return ()=> document.body.removeEventListener("click",CloseM);
    // },[])






    const sendHeaderFile=(event)=>{
        event.preventDefault();
       const photo = document.querySelector("#headerPhoto").files[0];
       const formData = new FormData();
       formData.append("headerPhoto",photo);
       axios.post("https://backkhoshovash.iran.liara.run/api/header/",formData)
        .then(res=>{
            alert("save")
        }).catch(err=>{
            console.log(err);
        })
    }
    const [imageHeader,setImageHeader] = useState("");
    const [Tazeha,setTazeha] = useState([]);
    const [main,setMain]=useState([]);

 
    axios.get("https://backkhoshovash.iran.liara.run/api/header/")
        .then(res=>{
            setImageHeader(res.data[res.data.length - 1 ].name);
        }).catch(err=>{
            console.log(err);
        })

        const RejevtHandel=()=>{
            localStorage.clear();
            window.location.reload();
    }




    const sendArchiveFile=(event)=>{
        event.preventDefault();
        const photo = document.querySelector("#archive").files[0];
        const text = document.querySelector("#textArchive").value;
        const type = document.querySelector("#typeArchive").value;
        const formData = new FormData();
        formData.append("archive",photo);
        formData.append("text",text);
        formData.append("type",type);
        console.log(type);
        axios.post("https://backkhoshovash.iran.liara.run/api/archive/",formData)
         .then(res=>{
             alert("save")
         }).catch(err=>{
             console.log(err);
         })
    }



    const afzodan=()=>{
        setIsOpenA(true)
    }
    const afzodantazeha=()=>{
        setIsOpenT(true)
    }
    const afzodanmain=()=>{
        setIsOpenMain(true)
    }
    




    const sendtazehaFile=(event)=>{
        event.preventDefault();
        const photo = document.querySelector("#tazeha").files[0];
        const type = document.querySelector("#typeTazeha").value;
        const formData = new FormData();
        formData.append("tazeha",photo);
        formData.append("type",type);
        axios.post("https://backkhoshovash.iran.liara.run/api/tazeha/",formData)
        .then(res=>{
            alert("save")
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        axios.get("https://backkhoshovash.iran.liara.run/api/tazeha/")
        .then(res=>{
            setTazeha(res.data);
        }).catch(err=>{
            console.log(err);
    },[])
     
    })

    const sendMainFile=(event)=>{
        event.preventDefault();
        const photo = document.querySelector("#main").files[0];
        const type = document.querySelector("#typeMain").value;
        const formData = new FormData();
        formData.append("main",photo);
        formData.append("type",type);
        axios.post("https://backkhoshovash.iran.liara.run/api/main/",formData)
        .then(res=>{
            alert("save")
        }).catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        axios.get("https://backkhoshovash.iran.liara.run/api/main/")
        .then(res=>{
            setMain(res.data);
        }).catch(err=>{
            console.log(err);
    },[])
    })
    const deleteMain=(val)=>{
        const formData = new FormData();
        formData.append("id",val);
        axios.delete(`https://backkhoshovash.iran.liara.run/api/main/${val}`,formData)
        .then(res=>{
            alert("delete secssful")
        }).catch(err=>{
            console.log(err);
        })
        window.location.reload();
    }
    const deleteTazeha=(val)=>{
        const formData = new FormData();
        formData.append("id",val);
        axios.delete(`https://backkhoshovash.iran.liara.run/api/tazeha/${val}`,formData)
        .then(res=>{
            alert("delete secssful")
        }).catch(err=>{
            console.log(err);
        })
        window.location.reload();
    }
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
                <h3 className="hHeader" onClick={RejevtHandel}>خروج مدیر</h3>
                <form className="fheader">
                    <input type={"file"} id="headerPhoto"></input>
                    <button type={"submit"} onClick={sendHeaderFile}>ارسال</button>
                </form>
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
                    <p onClick={afzodantazeha} className="AfzodanArchive">افزودن</p>
                </div>
                <div className="bodyright-data">
                    {Tazeha.map(item=>{
                        if(item.type === "img"){
                            return <>
                                <div className="divhazf">
                                    <img className="tazehaImg" src={`https://backkhoshovash.iran.liara.run/Tazeha/${item.name}`}/>
                                    <button className="hazfB" onClick={(e)=>{deleteTazeha(e.target.value)}} value={item._id}>حذف</button>
                                </div>
                            </>
                        }
                        if(item.type === "film"){
                            return <>
                                <div className="divhazf">
                                    <video className="tazehaFilme" controls >
                                        <source src={`https://backkhoshovash.iran.liara.run/Tazeha/${item.name}`} type="video/mp4"/>
                                    </video>
                                    <button className="hazfB" onClick={(e)=>{deleteTazeha(e.target.value)}} value={item._id}>حذف</button>
                                </div>
                            </>
                        }
                    })}
                </div>
            </div>
            <div className="bodycenter">
                <div className="bodycenter-head">
                    <p onClick={afzodanmain} className="AfzodanArchive">افزودن</p>
                </div>
                    <div className="bodycenter-data">
                        {main.map(item=>{
                            if(item.type === "img"){
                                return <>
                                    <div className="divhazf">
                                        <img className="mainImg" src={`https://backkhoshovash.iran.liara.run/Main/${item.name}`}/>
                                        <button className="hazfB" onClick={(e)=>{deleteMain(e.target.value)}} value={item._id}>حذف</button>
                                    </div>
                                </>
                            }
                            if(item.type === "film"){
                                return <>
                                    <div className="divhazf">
                                        <video className="mainFilme" controls >
                                            <source src={`https://backkhoshovash.iran.liara.run/Main/${item.name}`} type="video/mp4"/>
                                        </video>
                                        <button className="hazfB" onClick={(e)=>{deleteMain(e.target.value)}} value={item._id}>حذف</button>
                                    </div>
                                </>
                            }
                        })}
                    </div>
                    <div className={(isOpenMain ? "sendMainFileOpen" : "sendMainFileClose")} id="sendMain">
                        <form className="headerform">
                            <input className="sendMainFileOpenType" list="Main" id="typeMain" placeholder="نوع فایل"></input>
                            <input className="sendMainFileOpenFile"  type={"file"} id="main"></input>
                                <datalist id="Main">
                                    <option value="img"></option>
                                    <option value="film"></option>
                                </datalist>
                            <button className="sendMainFileOpenFileB" type={"submit"} onClick={sendMainFile}>ارسال</button>
                        </form>
                    </div>
                    <div className={(isOpenArchive ? "sendArchiveFileOpen" : "sendArchiveFileClose")} id="sendArchive">
                        <form className="headerform">
                            <input className="sendArchiveFileOpenFile" type={"file"} id="archive"></input>
                            <input className="sendArchiveFileOpensal" type={"text"} id="textArchive" placeholder="سال"></input>
                            <input className="sendArchiveFileOpenType" list="Archive" id="typeArchive" placeholder="نوع فایل"></input>
                                <datalist id="Archive">
                                    <option value="img"></option>
                                    <option value="film"></option>
                                </datalist>
                            <button className="sendArchiveFileOpenB" type={"submit"} onClick={sendArchiveFile}>ارسال</button>
                        </form>
                    </div>
                    <div className={(isOpenTazeha ? "sendTazehaFileOpen" : "sendTazehaFileClose")} id="sendTazeha">
                        <form className="headerform">
                            <input className="sendTazehaFileOpenFile" type={"file"} id="tazeha"></input>
                            <input className="sendTazehaFileOpenType" list="Tazeha" id="typeTazeha" placeholder="نوع فایل"></input>
                                <datalist id="Tazeha">
                                    <option value="img"></option>
                                    <option value="film"></option>
                                </datalist>
                            <button className="sendTazehaFileOpenB" type={"submit"} onClick={sendtazehaFile}>ارسال</button>
                        </form>
                    </div>
            </div>
            <div className="bodyleft">
                <div className="bodyleft-head">
                    <p className="onvan">آرشیو</p>
                    <p onClick={afzodan} className="AfzodanArchive">افزودن</p>
                </div>
                <div className="bodyleft-year">
                    {
                        YEAR.map(item=>{
                            return <><h3 style={{marginTop:"20px"}}><Link style={{color:"black"}} to={`/adminarchive/${item}`}>{item}</Link></h3>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
        
    </>
}

export default Admin ;