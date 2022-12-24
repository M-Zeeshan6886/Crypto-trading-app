import React from 'react';
import './NetlifyMain.scss';
import Carousel from 'react-bootstrap/Carousel';
import Navigation from '../../Modules/sdNavigation/Navigation'
import SettingImg from '../../assets/assets/setting.svg';
import Iicon from '../../assets/assets/Shape.png';
import EIcons from '../../assets/assets/topicon.png';
import location from '../../assets/assets/location.png';
import zeephoto1 from '../../assets/assets/zeeph1.jpg';
import zeephoto2 from '../../assets/assets/zeeph2.jpg';
import zeephoto3 from '../../assets/assets/images.png';


const NetlifyMain = () => {
  return (
    <>
    <div className='netlify-container'>
    <Navigation />

    <div className='netlify-container-main'>
    <div className='netlify-container-main-topbar'>
        <p>Report Overview</p>
        <button>
            CONFIGRATION
        <img src={SettingImg} alt="settingImg" />
        </button>
    </div>

    <div className="netlify-container-main-cards">
        <div className="netlify-container-main-cards-content">
        <Card  Text="Total Requirerd Capital" Price="$ 120 546"/>
        <hr />
        <Card  Text="Total Requirerd Capital" Price="$ 120 546"/>
        <hr />
        <Card  Text="Total Requirerd Capital" Price="$ 120 546"/>
        <hr />
        <Card  Text="Total Requirerd Capital" Price="$ 120 546"/>
        <hr />
        <Card  Text="Total Requirerd Capital" Price="$ 120 546"/>
        <hr />
        <Card  Text="Total Requirerd Capital" Price="$ 120 546"/>
        {/* <hr /> */}
        </div>
    </div>

    

<div className="netlify-container-main-slider">
        <div className="netlify-container-main-slider-content">
         
         <div className="netlify-container-main-slider-content-left">
            <div>
                <img src={location} alt="location" />
                <p>Location</p>
            </div>
            <h1>Oeiras, Lisbon, Portugal</h1>
         </div>
         <div className="netlify-container-main-slider-content-right">
            <Slider />
         </div>

        </div>
    </div>

    </div>
        
    </div>
    
    </>
  )
}

export default NetlifyMain;


const Card=({Text,Price})=>{
    return(
        <>
        <div className="cardbox">
        <img src={EIcons} alt="economy-icon" />
        <div className="cardbox-text">
            <p>{Text}</p>
            <img src={Iicon} alt="i-icon" />
        </div>
        <p>{Price}</p>
        </div>
        </>
    )
}


function Slider () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"50vh"}}
            src={zeephoto1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"50vh"}}
        //   src={zeephoto2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"50vh"}}
          src={zeephoto3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}