import "./Nav.css"
import {Search, Person, Chat, Notifications} from "@material-ui/icons"

export default function Nav() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Lamasocial</span>    
            </div>         
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search" className="searchInput"/>
                </div>
            </div>   
            <div className="topbarRight">
                <div className="navLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImage" />
            </div>
        </div>
    )
}
