import React, { useState, useEffect } from 'react';
import './App.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import logo from './images/homePage_logo.png';

const images = Object.values(import.meta.glob('./images/slideshowPictures/*.{jpeg,jpg,png}', { eager: true })).map(
  (module) => module.default
);

function App() {
  // const images = [image1, image2, image3];  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='App center'>
      <div className='header'>
        <div className='header-content'>
          <img className="logo" src={logo} alt="Church Logo" />
          <h1 className='header-title'>
            밴쿠버 소망교회 
            <br/>
            (Korean Foursquare Gospel Church)
          </h1>
          <br/>
          <br/>
          <h1 className='header-subtitle'>
          예수님 이야기로 가득한 교회 
          </h1>
        </div>
      </div>




      <fieldset className="grid-container">
        <legend>예배시간</legend>
          <p>주일 예배 : 오후 2시</p>
          <p>소망 YG (Young Generation) : 오후 2시</p>
      </fieldset>

      <fieldset className="grid-container">
        <legend>기도회</legend>
          <p>아침기도회 : 아침 8시 (화~목)</p>
          <p>금요기도회 : 저녁 8시</p>
      </fieldset>

      <fieldset className="grid-container">
        <legend>성경공부</legend>
          <p>구약성경 파노라마 / 일대일 제자훈련 / 새신자 교육</p>
      </fieldset>

      <fieldset className="grid-container">
        <legend>교역자</legend>
          <p>남상국 원로목사 / 홍석인 목사 / 노승수 목사 / 서주혜 전도사 / 쥴리 정 전도사</p>
      </fieldset>

      <fieldset className="grid-container">
        <legend>찰칵! 우리의 모습!</legend>
          <div className='slideshow'>
            <span>
              <button className='left-arrow' onClick={goToPrevious}><FaArrowLeft /></button>
              <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='slide-image' />
              <button className='right-arrow' onClick={goToNext}><FaArrowRight /></button>
            </span>
          </div>

      </fieldset>


      <fieldset className="grid-container">
        <legend>클릭! 찬양 / 설교 보기</legend>
        <div className="youtubeLinkContainer">
          <a className='youtubeLink' href="https://www.youtube.com/@Jwpark57">링크로 가기!</a>
        </div>
      </fieldset>
      

      <fieldset className="grid-container">
        <legend>교회 연락처</legend>
          <p>전화: 604-437-5469</p>
          <p>주소: 5825 Nelson Ave, Burnaby, BC, V5H 3H6</p>
        <div className='map-container'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5210.716568619125!2d-122.99471700000001!3d49.231696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867657c12591c9%3A0x8c0b98ccd9354129!2s5825%20Nelson%20Ave%2C%20Burnaby%2C%20BC%20V5H%203H6!5e0!3m2!1sen!2sca!4v1724795429370!5m2!1sen!2sca"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy">
          </iframe>
        </div>
      </fieldset>

      </div>
  );
}

export default App;

// change header colour
// make login to add photos?
// bible and cross background adjustment for small screen
// think about how gallery can be implemented better
// add box color. no white wanted
// make a better system for slideshow



// spacing between pastor name
// make font size bigger
