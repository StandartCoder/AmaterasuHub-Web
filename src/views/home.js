import React, { useEffect } from 'react'

import { Helmet } from 'react-helmet'
import Aos from 'aos'
import "aos/dist/aos.css"

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import Slide from '../components/slide'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './home.css'

const Home = (props) => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="home-container">
      <Helmet>
        <title>Amaterasu Hub</title>
        <meta property="og:title" content="Amaterasu Hub" />
      </Helmet>
      <Navbar></Navbar>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text">
                <span>
                  Are you searching for good &amp; quality scripts?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Join <span className="home-text09">Amaterasu Hub</span></span>
              </h1>
              <div className="home-features-container">
                <div data-aos="fade-right" className="home-feature">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text04">
                    Every day an giveaway, nice community.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div data-aos="fade-right" className="home-feature1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon2"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text05">
                    Our own free &amp; paid hub, high quality hub.
                  </span>
                </div>
                <div data-aos="fade-right" className="home-feature2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon4"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text06">
                    Over 23k+ Members, and good staff.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="home-image-container">
              <iframe
                src="https://discord.com/widget?id=946215480434249768&amp;theme=dark"
                className="home-iframe"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <h2 className="home-text07 heading2">
              <span>
                Reason&apos;s why
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text09">you</span>
              <span> should join!</span>
            </h2>
            <div className="home-cards-container">
              <FeatureCard
                image_src="/playground_assets/stars-200h.png"
                heading="Giveaways"
                text="Every day/week we are hosting some events like giveaways or movie nights!"
                text1="Join &gt;"
              ></FeatureCard>
              <FeatureCard
                text1="Join &gt;"
                heading="We love our community"
                image_src="/playground_assets/hearth-200h.png"
                text="We always love our community, everyone is allowed there only bad bois not!"
              ></FeatureCard>
              <FeatureCard
                text1="Join &gt;"
                heading="Scripts"
                image_src="/playground_assets/mail-200h.png"
                text="We have the best scripts, we always tell you when a script get updated!"
              ></FeatureCard>
              <FeatureCard
                text1="Join &gt;"
                heading="Not that many PINGS!!!"
                image_src="/playground_assets/paper-200h.png"
                text="On our server we don't ping often! And you can decide if you want get pinged if script updated!"
              ></FeatureCard>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="home-section-four section-container">
          <div className="home-max-width2 max-content-container">
            <h2 className="home-text11 heading2">
              <span>People love Amaterasu.</span>
              <br></br>
              <span className="home-text09">So would you.</span>
              <span className="home-text14"></span>
            </h2>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide></Slide>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <Copyright data-aos="fade-right" ></Copyright>
    </div>
  )
}

export default Home
