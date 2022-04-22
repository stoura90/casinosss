import React from 'react'
import routes from '../../../../../../../constants/routes.constants'
import { Link } from 'react-router-dom'

const Viewport = () => {
  return (
    <div className="viewport">
      <div className="overview" id="market_base_list">
        <div id="trade_market_wrapper" className="dataTables_wrapper no-footer">
          <table id="trade_market" className="marketes no-footer dataTable">
            <tbody>
              <Link
                a="40001"
                c1="40001"
                c2="1"
                c1n="ETH"
                c2n="BTC"
                c1br="ETH"
                c2br="BTC"
                to={routes.exchange}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first"> ETHE</td>
                  <td>0.07120529</td>
                  <td className="red">- 2%</td>
                  <td title="2760.3 BTC">2760.3</td>
                </tr>
              </Link>
              <Link to={routes.dash}>
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.usd}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">USD</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.zec}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">ZEC</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.wawes}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">WAVES</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
              <Link
                className="even animg"
                p="9"
                c1="10"
                c2="1"
                c1n="DASH"
                c2n="BTC"
                c1br="DASH"
                c2br="BTC"
                to={routes.dash}
              >
                <tr
                  className="even"
                  p="9"
                  c1="10"
                  c2="1"
                  c1n="DASH"
                  c2n="BTC"
                  c1br="DASH"
                  c2br="BTC"
                >
                  <td className="first">DASH</td>
                  <td>0.00264008</td>
                  <td className="green">+ 1.2%</td>
                  <td>1108.5</td>
                </tr>
              </Link>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Viewport
