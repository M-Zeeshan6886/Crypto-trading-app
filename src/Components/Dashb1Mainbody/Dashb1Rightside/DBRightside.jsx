import React from 'react';
import './DBRightside.scss';

const DBRightside = () => {
  return (
    <>
    <div className='rightside-container'>
            10 October 2022
        <div className='rightside-container-content'>
        <p>News & Announcements</p>
      <Blackbox />
      <Blackbox />
      <Blackbox />
        </div>
    </div>
    
    </>
  )
}

export default DBRightside;



const Blackbox=()=>{
    return(
        <div className='blackbox'></div>
    )
}
