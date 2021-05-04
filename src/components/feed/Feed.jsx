import { useState, useEffect } from 'react'
import "./feed.css"
import Shared from "../shared/Shared"
import Post from "../post/Post"
import axios from 'axios'

export default function Feed() {
    const [posts, setPosts] = useState([])
    const baseUrl = "http://localhost:5000/api"
    useEffect(() =>{
        const fetchPost = async ()=>{
            const response = await axios.get("http://localhost:5000/api/timeline/608e979c3f085e489c33f8d3")
            setPosts(response.data)
        }
        fetchPost();
        //console.log(fetchPost)
    }, []) //with the [] is a dependecy once when feed is rendered. if text a const is put in there it means run anytime the value chages
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
