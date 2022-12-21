import React from 'react';
import './Dashboard.scss';
import SideBar from '../../../Common/SideBar/SideBar'
import Dashb1middle from '../../../Components/Dashb1Mainbody/Dashb1mainbody';
import DBRightside from '../../../Components/Dashb1Mainbody/Dashb1Rightside/DBRightside';
const Dashboard = () => {
  return (
    <>
    <div className='dashboard-container'>
      
    <SideBar />
    <Dashb1middle />
    <DBRightside />
    </div>
    
    
    </>
  )
}

export default Dashboard