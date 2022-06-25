import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import Aos from 'aos'
import "aos/dist/aos.css"

import './feature-card.css'
//import { useEffect } from 'react/cjs/react.production.min'

const FeatureCard = (props) => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div data-aos="fade-up" className="feature-card-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card-image"
      />
      <h4 className="feature-card-text heading4">{props.heading}</h4>
      <span className="feature-card-text1 content-Light">{props.text}</span>
      <span className="feature-card-text2"><a href="https://discord.gg/amaterasuhub" target="_blank" rel="noreferrer noopener">{props.text1}</a></span>
    </div>
  )
}

FeatureCard.defaultProps = {
  text1: 'test',
  text: 'test',
  heading: 'test',
  image_alt: 'test',
  image_src: 'https://apod.nasa.gov/apod/image/2110/LucyLaunchB_Kraus_2048.jpg',
}

FeatureCard.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard
