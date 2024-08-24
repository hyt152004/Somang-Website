import './App.css'
import logo from './images/homePage_logo.png'
import churchImage from './images/bg2.jpeg'  // Import your church image

function App() {


  return (
    <div className='App center'>
      <h1 className='header center'>
        <img className="logo" src={logo} alt="Church Logo"/>
        밴쿠버 소망교회 (Korean Foursquare Gospel Church)
      </h1>

      <div className="introduction center">
        <img className="church-image" src={churchImage} alt="Our Church"/>
        <h1>
          하나님 앞에서!
          <br />
          예수님 이야기로 가득한 교회
        </h1>
       </div>

      <div className="grid-container ServiceTimeTable center">
        <div className="grid-item">주일 예배: 오후 2시</div>
        <div className="grid-item">소망 YG (Young Generation): 오후 2시</div>
      </div>

      <div className="grid-container PrayerTimeTable center">
        <div className="grid-item">아침기도회: 아침 8시 (화~목)</div>
        <div className="grid-item">금요기도회: 저녁 8시</div>
      </div>

      <div className='BibleStudy center'>
        <div>구약성경 파노라마 / 일대일 제자훈련 / 새신자 교육</div>
      </div>

      <div className='Educators center'>
        <div>남상국 원로목사 / 홍석인 목사 / 노승수 목사 / 서주혜 전도사</div>
      </div>

      <div className='Gallery center'>
        <div>Images Here</div>
      </div>

      <div className='SocialLinks center'>
        <a href="https://www.youtube.com/@Jwpark57">Youtube</a>
      </div>

      <div className='Contact center'>
        <div className="grid-item">전화: 604-437-5469</div>
        <div className="grid-item">주소: 5825 Nelson Ave, Burnaby, BC, V5H 3H6</div>
        <div className='map-container'>
          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.864765044608!2d-122.99729162351406!3d49.2316961713852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867657c6e0d855%3A0x7956374b1411816f!2s5825%20Nelson%20Ave%2C%20Burnaby%2C%20BC%20V5H%203H6!5e1!3m2!1sen!2sca!4v1724457634369!5m2!1sen!2sca" 
              width="600" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
      </div>
    </div>
  )
}

export default App
