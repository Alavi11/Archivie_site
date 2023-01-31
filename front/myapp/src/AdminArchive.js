import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";


const AdminArchive = ()=>{
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

    const deleteArchive=(val,event)=>{
        const formData = new FormData();
        formData.append("id",val);
        axios.delete(`https://backkhoshovash.iran.liara.run/api/archive/${val}`,formData)
        .then(res=>{
            alert("delete secssful")
        }).catch(err=>{
            console.log(err);
        })
        window.location.reload();
    }

    return <>
    <div className="header"  style={{backgroundImage: `url(https://backkhoshovash.iran.liara.run/${imageHeader})`}}>
                <p className="pHeader">{Year}</p>
    </div>
    <div className="Archive">
        <div className="archiveleft">
            <p className="ArchiveP">تصاویر</p>
            {imageArchive.map(item=>{
                if(item.year === Year ){
                    if(item.type === "img"){
                        return <>
                                <div className="divArch">
                                    <img className="archiveImg" src={`https://backkhoshovash.iran.liara.run/Archive/${item.file}`}/>
                                    <button className="ArchhazfB" onClick={(e)=>{deleteArchive(e.target.value)}} value={item._id}>حذف</button>
                                </div>
                        </>
                    }
                }
                return <></>
                
            })}
        </div>
        <div className="archiveright">
            <p className="ArchiveP">فیلم ها</p>
            {imageArchive.map(item=>{
                    if(item.year === Year ){
                        if(item.type === "film"){
                            return <>
                                    <div className="divArch">
                                        <video className="archiveFilm" controls >
                                            <source src={`https://backkhoshovash.iran.liara.run/Archive/${item.file}`} type="video/mp4"/>
                                        </video>
                                        <button className="ArchhazfB" onClick={(e)=>{deleteArchive(e.target.value)}} value={item._id}>حذف</button>
                                    </div>
                            </>
                        }
                    }
                    return <></>
                    
            })}
        </div>
    </div>
    </>

}

export default AdminArchive ;