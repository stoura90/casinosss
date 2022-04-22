import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../../../constants/routes.constants'
import luckyHaunter from '../uploads/games/icon/53/530c1c9f779a9366e9cc5f05bbdd512a0106b499.jpg'
function LuckyHaunter() {
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
                      <Link to={routes.cost}>
                        <div className="tmb-img">
                          <img src={luckyHaunter} />
                        </div>
                        <div className="tmb-title">Lucky Haunter</div>
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
export default LuckyHaunter
