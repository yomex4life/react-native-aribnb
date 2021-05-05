import "./shared.css"
import { useContext, useRef } from 'react'
import { AuthContext } from "../../context/AuthContext"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
import axios from "axios"

export default function Shared() {
    const {user} = useContext(AuthContext)
    const userId = user ? user.user_id : ""
    const baseUrl = "http://localhost:5000/api"
    const description = useRef()

    

    const handlerAddPost = async (e) => {
        e.preventDefault()        
        try {
            await axios.post(`${baseUrl}/posts`, {userId: userId, description: description.current.value, title: description.current.value}) 
            window.location.reload()
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="shared">
           <div className="sharedWrapper">
               <div className="sharedTop">
                    <img src="/assets/person/1.jpeg" className="sharedProfileImg" alt="" />
                    <input placeholder="What is on your mind" ref={description} required className="sharedInput" />
               </div>
               <hr className="sharedHr"/>
               <form className="sharedBottom" onSubmit={handlerAddPost}>
                    <div className="sharedOptions">
                        <div className="sharedOption">
                            <PermMedia htmlColor="tomato" className="sharedIcon"/>
                            <span className="sharedOptionText">Photo/Video</span>
                        </div>
                        <div className="sharedOption">
                            <Label htmlColor="blue" className="sharedIcon"/>
                            <span className="sharedOptionText">Tag</span>
                        </div>
                        <div className="sharedOption">
                            <Room htmlColor="green" className="sharedIcon"/>
                            <span className="sharedOptionText">Location</span>
                        </div>
                        <div className="sharedOption">
                            <EmojiEmotions htmlColor="goldenrod" className="sharedIcon"/>
                            <span className="sharedOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="sharedButton" type="submit">Share</button>
               </form>
           </div>
        </div>
    )
}
