import React, { useState, useEffect } from 'react';
import './App.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import logo from './images/homePage_logo.png';
import churchImage from './images/bg2.jpeg';
import image1 from './images/bg1.jpeg';  // Add your images here
import image2 from './images/bg2.jpeg';  // Add your images here
import image3 from './images/homePageBG.jpeg';  // Add your images here
import cross_bible_bg from './images/cross_bible_bg.avif'

function App() {
  const images = [image1, image2, image3];  // Add all your images here
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
          <h2 className='header-subtitle'>
            원로목사: 남상국 담임목사: 홍석인
          </h2>
          <p className='header-contact'>
            5825 Nelson Ave Burnaby BC V5H 3H6 / 604-437-5469
          </p>
        </div>
      </div>




      <fieldset className="grid-container">
        <legend>예배시간</legend>
          <p>주일 예배: 오후 2시</p>
          {/* make this bigger */}
          <p>소망 YG (Young Generation): 오후 2시</p>
      </fieldset>

      <fieldset className="grid-container">
        <legend>기도회</legend>
          <p>아침기도회: 아침 8시 (화~목)</p>
          {/* make this bigger */}
          <p>금요기도회: 저녁 8시</p>
      </fieldset>

      <fieldset className="grid-container">
        <legend>성경공부</legend>
          <p>구약성경 파노라마 / 일대일 제자훈련 / 새신자 교육</p>
      </fieldset>

      <fieldset className="grid-container">
        <legend>교역자</legend>
          <p>남상국 원로목사 / 홍석인 목사 / 노승수 목사 / 서주혜 전도사</p>
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
        <legend>클릭! 찬약 / 설교 다시보기!</legend>
        <a href="https://www.youtube.com/@Jwpark57">https://www.youtube.com/@Jwpark57</a>
      </fieldset>

      <fieldset className="grid-container">
        <legend>클릭! 찬약 / 설교 다시보기!</legend>
          <p>전화: 604-437-5469</p>
          <p>주소: 5825 Nelson Ave, Burnaby, BC, V5H 3H6</p>
        <div className='map-container'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.864765044608!2d-122.99729162351406!3d49.2316961713852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867657c6e0d855%3A0x7956374b1411816f!2s5825%20Nelson%20Ave%2C%20Burnaby%2C%20BC%20V5H%203H6!5e1!3m2!1sen!2sca!4v1724457634369!5m2!1sen!2sca"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </fieldset>

      </div>
  );
}

export default App;


// - add headers for each section !!!
// - make login to add photos?
// - bible and cross background 
// - think about how gallery can be implemented better
// - add box color. no white wanted