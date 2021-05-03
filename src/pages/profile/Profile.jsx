import Nav from '../../components/Nav'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./profile.css"

export default function Profile() {
    return (
        <>
        <Nav />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assets/post/3.jpeg" alt="" className="profileCoverImg"/>
                        <img src="assets/person/5.jpeg" alt="" className="profileUserImg"/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">My name</h4>
                        <span className="profileInfoDesc">My name</span>
                    </div>
                </div>
                <div className="profileRightBottom"></div>
                <Feed />
                <Rightbar profile/>
            </div>                    
        </div>
     </>
    )
}
