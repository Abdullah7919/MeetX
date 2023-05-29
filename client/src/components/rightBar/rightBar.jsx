import "./rightBar.scss";
import Profile from "../../assets/1.png";

function rightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggetions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={Profile} alt="" />
              <span>Smith</span>
            </div>
            <div className="buttons">
              <button type="button">Follow</button>
              <button type="button">Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Profile} alt="" />
              <span>Smith</span>
            </div>
            <div className="buttons">
              <button type="button">Follow</button>
              <button type="button">Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={Profile} alt="" />
              <p>
                <span>Smith</span> chnage thier cover
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Profile} alt="" />
              <p>
                <span>Smith</span> chnage thier cover
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Profile} alt="" />
              <p>
                <span>Smith</span> chnage thier cover
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Profile} alt="" />
              <p>
                <span>Smith</span> chnage thier cover
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={Profile} alt="" />
              <div className="online"/>
              <span>Smith</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Profile} alt="" />
              <div className="online"/>
              <span>Smith</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Profile} alt="" />
              <div className="online"/>
              <span>Smith</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Profile} alt="" />
              <div className="online"/>
              <span>Smith</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Profile} alt="" />
              <div className="online"/>
              <span>Smith</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default rightBar;
