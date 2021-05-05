import "./post.css"
import { useState, useEffect,useContext } from 'react'
import axios from 'axios'
import { MoreVert } from "@material-ui/icons"
import {format} from "timeago.js"
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"

export default function Post({ post}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 
    const baseUrl = "http://localhost:5000/api"
    const {user} = useContext(AuthContext)
    const userId = user ? user.user_id : ""

    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [currentUser, setUsers] = useState([])

    useEffect(() =>{
        const fetchUsers = async ()=>{
            //const response = await axios.get("http://localhost:5000/api/users/608e979c3f085e489c33f8d3")
            const response = await axios.get(`${baseUrl}/users/${post.userId}`)
            setUsers(response.data)
        }
        fetchUsers();
    }, [post.userId])

    const likeHandler = () =>{
        try {
            axios.put(`${baseUrl}/posts/${post._id}/like`, {userId:userId})
        } catch (error) {
            
        }
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${currentUser._id}`}>
                            <img src={user.profilePicture || PF+'person/noAvatar.png'} alt="" className="postProfileImg" />
                        </Link>                       
                        <span className="postUsername">{currentUser.lastName}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.image} alt="" className="postCenterImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <img src="/assets/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <span className="postLikeCounter">{like} People like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
