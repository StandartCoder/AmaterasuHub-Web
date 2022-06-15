import React from 'react'

import PropTypes from 'prop-types'

import './slide.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide-slide slide ${props.rootClassName} `}
    >
      <div className="slide-max-width max-content-container">
        <div className="slide-left-side">
          <div className="slide-decorations-container">
            <img
              alt="image"
              src="/playground_assets/union-200h.png"
              className="slide-dots"
            />
            <div className="slide-squares-container">
              <div className="slide-light-green"></div>
              <div className="slide-orange"></div>
            </div>
          </div>
          <div className="slide-image-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="slide-image"
            />
          </div>
        </div>
        <div className="slide-right-side">
          <span className="slide-testimonial">{props.Review}</span>
          <span className="slide-author">{props.Author}</span>
          <span className="slide-role">{props.Role}</span>
        </div>
      </div>
    </div>
  )
}

Slide.defaultProps = {
  Author: 'Joe Biden (real)',
  Review:
    '"Love it! The discord server looks pretty clean, and the new bot to get the scripts so easy! And so many scripts, wow! The only bad thing are the linkvertise but that is ok!"',
  rootClassName: '',
  image_src:
    'https://image.gala.de/22587822/t/nz/v6/w960/r0.6667/-/25--peinliche-mikrofon-panne---3-2---spoton-article-1014760.jpg',
  image_alt: 'image',
  Role: 'Normal Member',
}

Slide.propTypes = {
  Author: PropTypes.string,
  Review: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Role: PropTypes.string,
}

export default Slide
