import { Visibility } from '@material-ui/icons';

import "./widgetSm.css";
function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://avatars.githubusercontent.com/u/8420841?v=4" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Toti Cavalcanti</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <buttom className="widgetSmButtom">
            <Visibility className="widgetSmIcon" />
            Display
          </buttom>
        </li>
        <li className="widgetSmListItem">
          <img src="https://avatars.githubusercontent.com/u/8420841?v=4" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Toti Cavalcanti</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <buttom className="widgetSmButtom">
            <Visibility className="widgetSmIcon" />
            Display
          </buttom>
        </li>
        <li className="widgetSmListItem">
          <img src="https://avatars.githubusercontent.com/u/8420841?v=4" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Toti Cavalcanti</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <buttom className="widgetSmButtom">
            <Visibility className="widgetSmIcon" />
            Display
          </buttom>
        </li>
        <li className="widgetSmListItem">
          <img src="https://avatars.githubusercontent.com/u/8420841?v=4" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Toti Cavalcanti</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <buttom className="widgetSmButtom">
            <Visibility className="widgetSmIcon"/>
            Display
          </buttom>
        </li>

        <li className="widgetSmListItem">
          <img src="https://avatars.githubusercontent.com/u/8420841?v=4" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Toti Cavalcanti</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <buttom className="widgetSmButtom">
            <Visibility className="widgetSmIcon"/>
            Display
          </buttom>
        </li>
        
      </ul>
    </div>
  )
}

export default WidgetSm
