import React from 'react';
import './SideBar.scss';
import Banner from '../../assets/assets/banner.png';
import dashboard from '../../assets/assets/dashboard.png';
import helpImg from '../../assets/assets/Bottom/help.png';
import communityImg from '../../assets/assets/Bottom/forum.png';
import arrowup from '../../assets/assets/Bottom/arrowup.png';
const SideBar = () => {
  return (
    <>
    <div className="sidebar-container">
        <div className='sidebar-container-content'>
            <div className='sidebar-container-content-upper'>
              <div className='sidebar-container-content-upper-logo'>
              <img src={Banner} alt="banner" />
              <h1>ADEELBUX</h1>
              </div>
              <div className="sidebar-container-content-upper-dashboard">
                <img src={dashboard} alt="asdf" />
                <h2>Dashboard</h2>
              </div>
            </div>
            <div className='sidebar-container-content-lower'>
              <div className="sidebar-container-content-lower-help">
              <img src={helpImg} alt="helpImg" />
              <p>Help</p>
              </div>

              <div className="sidebar-container-content-lower-community">
              <img src={communityImg} alt="CommunityImg" />
              <p>Community</p>
              </div>

              <div className="sidebar-container-content-lower-ateeb">
                <span></span>
                <p>Ateeb</p>
                <img src={arrowup} alt="arrowup" />
              </div>


            </div>
        </div>
    </div>
    
    </>
  )
}

export default SideBar 