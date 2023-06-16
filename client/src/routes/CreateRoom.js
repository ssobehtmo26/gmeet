import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../assets/Header";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faVideo } from "@fortawesome/free-solid-svg-icons";
import "./CreateRoom.css";

const CreateRoom = (props) => {
  const [email, setEmail] = useState();
  const [generatedToken, setGeneratedToken] = useState();
  const [enteredToken, setEnteredToken] = useState();
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const generateToken = () => {
    //console.log('hi');
    var rand = Math.random().toString(36).substring(2);
    //console.log(rand);
    setGeneratedToken(rand);
    //setTokenList([...tokenList, generatedToken]);
    //console.log(generatedToken);
    //console.log(tokenList);
    return;
  };

  const tokenHandler = (e) => {
    setEnteredToken(e.target.value);
  };

  const joinMeet = () => {
    /*if (!tokenList.includes(enteredToken)) {
      console.log("invalid token");
      console.log(tokenList);
    } else if (tokenList === [undefined] || enteredToken === undefined) {
      console.log("please create a new meeting");
    } else*/
    localStorage.setItem("email", JSON.stringify(email));
    //socket.emit("room:join", { email, enteredToken });
    navigate(`/room?roomID=${enteredToken}`);
  };

  /*function create() {
    const id = uuid();
    navigate(`/room?roomID=${id}`);
  }*/

  return (
    <div className="home-page">
      <Header />
      <div className="body-content">
        <div className="left-side">
          <h2>Premium video meetings.</h2>
          <h2>Now free for everyone</h2>
          <p>
            We re-engineered the service we built for secure business
            meetings,Google Meet,to make it free and available for all
          </p>
          <input
            type="text"
            className="input"
            placeholder="Enter email"
            onChange={emailHandler}
          ></input>

          <div className="action-btn">
            <div className="video-btn">
              <button type="button" className="btn" onClick={generateToken}>
                <FontAwesomeIcon className="icons col" icon={faVideo} />
                New Meeting
              </button>
            </div>
            <div className="input-block">
              <div className="input-section">
                <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Token"
                  value={enteredToken}
                  onChange={tokenHandler}
                />
              </div>
              <button className="bttn" onClick={joinMeet}>
                Join
              </button>
            </div>
          </div>
          <div>{generatedToken}</div>
          <hr />
          <div className="help-text">
            <a href="">Learn more</a> about Google Meet
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img
              src="https://cdn.vox-cdn.com/thumbor/PvYHf9f7nUddjyJIl7l84BRAIW8=/0x0:1980x1320/1400x1050/filters:focal(990x660:991x661)/cdn.vox-cdn.com/uploads/chorus_asset/file/22459255/googlemeetnewui.jpg"
              alt="not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
