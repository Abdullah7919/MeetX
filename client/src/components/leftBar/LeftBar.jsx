import './leftBar.scss'
import Profile from '../../assets/1.png'
import Friend from '../../assets/2.png'
import Group from '../../assets/3.png'
import Marketplace from '../../assets/4.png'
import Watch from '../../assets/5.png'
import Memories from '../../assets/6.png'
import Event from '../../assets/7.png'
import Gaming from '../../assets/8.png'
import Gallery from '../../assets/9.png'
import Video from '../../assets/10.png'
import Message from '../../assets/11.png'
import Fundraiser from '../../assets/12.png'
import Tutorial from '../../assets/13.png'
import Course from '../../assets/14.png'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'


function LeftBar() {

  const {currentUser}=useContext(AuthContext);

  return (
    <div className='leftBar'>
      <div className="container">
          <div className="menu">

            <div className="user">
            <img src={"/upload/"+currentUser.profilePic} alt=''/>
            <span>{currentUser.name}</span>
            </div>
            
            <div className="item">
                <img src={Friend} alt=''/>
                <span>Friends</span>
            </div>
            <div className="item">
                <img src={Group} alt=''/>
                <span>Group</span>
            </div>
            <div className='item'>
                <img src={Marketplace} alt=''/>
                <span>Marketplace</span>
            </div>
            <div className='item'>
                <img src={Watch} alt=''/>
                <span>Watch</span>
            </div>
            <div className="item">
                <img src={Memories} alt=''/>
                <span>Memories</span>
            </div>
          </div>

          <hr/>

          <div className="menu">
            <span>Your Shortcut</span>
            <div className="item">
                <img src={Event} alt=''/>
                <span>Events</span>
            </div>
            <div className="item">
                <img src={Gaming} alt=''/>
                <span>Gaming</span>
            </div>
            <div className='item'>
                <img src={Gallery} alt=''/>
                <span>Gallery</span>
            </div>
            <div className='item'>
                <img src={Message} alt=''/>
                <span>Messaging</span>
            </div>
          </div>
          <hr/>
          <div className="menu">
            <span>Others</span>
            <div className="item">
                <img src={Fundraiser} alt=''/>
                <span>Fundraiser</span>
            </div>
            <div className='item'>
                <img src={Tutorial} alt=''/>
                <span>Tutorials</span>
            </div>
            <div className='item'>
                <img src={Course} alt=''/>
                <span>Courses</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default LeftBar