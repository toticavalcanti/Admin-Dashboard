import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Section</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">
              2 
            </span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">
              2 
            </span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img 
            src="https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?cs=srgb&dl=pexels-hassan-ouajbir-1535244.jpg&fm=jpg" 
            alt="" 
            className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
