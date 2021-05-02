import Nav from '../../components/Nav'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./home.css"

export default function Home() {
    return (
        <div>
            <>
                <Nav />
                <div className="homeContainer">
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                </div>
            </>
           
        </div>
    )
}
