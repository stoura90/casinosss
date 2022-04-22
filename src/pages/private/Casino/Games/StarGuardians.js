import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../../../constants/routes.constants'
import starGuardians from '../uploads/games/starguardians_720x340.jpg'
function StarGuardians() {
  return (
    <div className="wrapp">
      <div className="grid-wrapp">
        <div className="grid-col__left">
          <div className="mainsu">
            <div className="con cnt-pt">
              <div className="grid-wrapp">
                <div className="grid-wrapp-cols pd-sm-both game-listen">
                  <div className="grid-col__4-12">
                    <div className="tmbv">
                      <i className="stickerc"></i>
                      <div className="tmb-fav">
                        <div className="icoc icoc-tmb-fav"></div>
                      </div>
                      <Link to={routes.blaa}>
                        <div className="tmb-img">
                          <img src={starGuardians} />
                        </div>
                        <div className="tmb-title">Star Guardians</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StarGuardians
