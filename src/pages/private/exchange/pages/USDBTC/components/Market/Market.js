import React from 'react'
import Result from '../result'
import { Button } from 'reactstrap'
import Viewport from '../marketlist'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

const Market = () => {
  return (
    <div className="left_bar">
      <div className="market_box">
        <div className="all_title title">Маркет</div>
        <div>
          <div className="market_base_container">
            <div>
              <Button
                href="javascript:void(0)"
                value="top"
                onClick="changeMarketBase('top')"
                className="active"
              >
                TOP
              </Button>
              <Button href="javascript:void(0)" value="btc" onClick="changeMarketBase('btc')">
                BTC
              </Button>
              <Button href="javascript:void(0)" value="eth" onClick="changeMarketBase('eth')">
                ETH
              </Button>
              <Button
                href="javascript:void(0)"
                value="usd"
                onClick="changeMarketBase('usd')"
                className="manimr"
              >
                USD
              </Button>
              <Button href="javascript:void(0)" value="rur" onClick="changeMarketBase('rur')">
                RUR
              </Button>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <Result />
        <SimpleBar style={{ height: 150, width: '100%' }}>
          <Viewport />
        </SimpleBar>
      </div>
    </div>
  )
}
export default Market
