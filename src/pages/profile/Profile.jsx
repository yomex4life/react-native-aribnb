import Nav from '../../components/Nav'
import Sidebar from '../../components/sidebar/Sidebar'
import { useState, useEffect } from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from 'axios'
import {useParams} from 'react-router'
import "./profile.css"

export default function Profile(uid) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 
    const baseUrl = "http://localhost:5000/api"
    const params = useParams()

    const [user, setUsers] = useState([])

    useEffect(() =>{
        const fetchUsers = async ()=>{
            //const response = await axios.get("http://localhost:5000/api/users/608e979c3f085e489c33f8d3")
            const response = await axios.get(`${baseUrl}/users/${params.uid}`)
            setUsers(response.data)
        }
        fetchUsers();
    }, [params.uid])


    return (
        <>
        <Nav />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={`${PF}post/3.jpeg`} alt="" className="profileCoverImg"/>
                        <img src={`${PF}person/5.jpeg`} alt="" className="profileUserImg"/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.firstName}</h4>
                        <span className="profileInfoDesc">General description for all</span>
                    </div>
                </div>
                <div className="profileRightBottom"></div>
                <Feed uid={params.uid}/>
                <Rightbar />
            </div>                    
        </div>
     </>
    )
}
