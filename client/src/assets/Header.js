import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuestionCircle,
    faExclamationCircle,
    faCog,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css"

const header = () => {
    return (
       
        <div className="header">
            <div className="logo">
                <img className="image" src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_2x_icon_124_40_292e71bcb52a56e2a9005164118f183b.png" alt="" />
                <span className="text">Meet Clone</span>
            </div>
            <div className="act-btn">
                <FontAwesomeIcon className="icons" icon={faQuestionCircle} />
                <FontAwesomeIcon className="icons" icon={faExclamationCircle} />
                <FontAwesomeIcon className="icons" icon={faCog} />
                <FontAwesomeIcon className="icons" icon={faUser} />
            </div></div>

    )
}
export default header;