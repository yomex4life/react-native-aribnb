import "./post.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { MoreVert } from "@material-ui/icons"

export default function Post({ post}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUsers] = useState([])
    console.log(post)

    useEffect(() =>{
        const fetchUsers = async ()=>{
            //const response = await axios.get("http://localhost:5000/api/users/608e979c3f085e489c33f8d3")
            const response = await axios.get(`http://localhost:5000/api/users/${post.userId}`)
            setUsers(response.data)
        }
        fetchUsers();
        //console.log(fetchPost)
    }, [])

    const likeHandler = () =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{user.lastName}</span>
                        <span className="postDate">{post.createdAt}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.photo} alt="" className="postCenterImg" />
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
