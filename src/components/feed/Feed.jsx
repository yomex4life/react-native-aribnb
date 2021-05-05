import { useState, useEffect, useContext } from 'react'
import { AuthContext } from "../../context/AuthContext"
import "./feed.css"
import Shared from "../shared/Shared"
import Post from "../post/Post"
import axios from 'axios'

export default function Feed({uid}) {
    const [posts, setPosts] = useState([])
    const baseUrl = "http://localhost:5000/api"
    const {user} = useContext(AuthContext)
    const userId = user ? user.user_id : ""

    useEffect(() =>{
        const fetchPost = async ()=>{
            const response = uid ? await axios.get(`${baseUrl}/profile/`+uid) : await axios.get(`${baseUrl}/timeline/${userId}`)
            setPosts(response.data)
        }
        fetchPost();
        //console.log(fetchPost)
    }, [uid, userId]) //with the [] is a dependecy once when feed is rendered. if text a const is put in there it means run anytime the value chages
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Shared />
                {posts.map(post =>(
                    <Post key={post._id} post={post}/>
                ))}           
            </div>
        </div>
    )
}
