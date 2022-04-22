import React from 'react'
import Banne from '../../../scss/media/kosmos.png'
import AOS from 'aos'
AOS.init()
AOS.refresh()
function Banner() {
  return (
    <div className="main-banner main-banner__logo" data-aos="flip-left">
      <img src={Banne} alt={Banne} width="100%" height="100%" />
    </div>
  )
}

export default Banner
