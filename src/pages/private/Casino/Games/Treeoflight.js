import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../../../constants/routes.constants'
import treeoflight from '../uploads/games/promo_1920_1080.png'
function Treeoflight() {
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
                      <Link to={routes.lacs}>
                        <div className="tmb-img">
                          <img src={treeoflight} />
                        </div>
                        <div className="tmb-title">Treeo flight</div>
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
export default Treeoflight
