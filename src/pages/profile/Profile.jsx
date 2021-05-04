import Nav from '../../components/Nav'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./profile.css"

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER 

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
                        <h4 className="profileInfoName">Jane Doe</h4>
                        <span className="profileInfoDesc">Mother and Nurse</span>
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
