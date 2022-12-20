import React from 'react';
import './Dashboard.scss';
import SideBar from '../../../Common/SideBar/SideBar'
import Dashb1middle from '../../../Components/Dashb1Mainbody/Dashb1mainbody';
const Dashboard = () => {
  return (
    <>
    <div className='dashboard-container'>
      
    <SideBar />
    <Dashb1middle />
    </div>
    
    
    </>
  )
}

export default Dashboard