import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

import './copyright.css'

const Copyright = (props) => {

  return (
    <div className="copyright-copyright">
      <div className="copyright-max-width max-content-container">
        <span className="copyright-text">
          <span className="copyright-text1">
            © 2022 Amaterasu Hub. All rights reserved. Powerd by StandartCoder!
          </span>
        </span>
      </div>
    </div>
  )
}

export default Copyright
