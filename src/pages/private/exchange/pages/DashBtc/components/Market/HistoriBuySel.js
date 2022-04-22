import React from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
const HistoriBuySel = () => {
  return (
    <div className="col_3">
      <div className="trade_history myord0" id="thc">
        <div className="all_title title">История сделок</div>
        <div className="result myord">
          <table width="100%" className="trade_history_table">
            <thead>
              <tr>
                <th width="27%" className="first">
                  Время
                </th>
                <th width="30%">Цена</th>
                <th width="29%">
                  <table>
                    <thead>
                      <tr>
                        <th width="75%">ETH</th>
                        <th width="25%">[C]</th>
                      </tr>
                    </thead>
                  </table>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="result">
          <table width="100%" className="trade_history_table">
            <thead>
              <tr>
                <th width="27%" className="first">
                  Время
                </th>
                <th width="14%" />
                <th width="30%">Цена</th>
                <th width="29%">DASH</th>
              </tr>
            </thead>
          </table>
        </div>
        <SimpleBar style={{ height: 200, width: '100%' }}>
          <div className="scrolling" id="scrollbar6">
            <div className="viewport">
              <div className="overview">
                <table width="100%" className="trade_history_table">
                  <tbody id="microhistory_table">
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 11:05:56">
                        11:05:56
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713307</td>
                      <td width="29%">
                        35.076<i>5130</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 11:00:43">
                        11:00:43
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713194</td>
                      <td width="29%">
                        76.237<i>6260</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:55:17">
                        10:55:17
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713320</td>
                      <td width="29%">
                        19.575<i>0000</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:49:44">
                        10:49:44
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713179</td>
                      <td width="29%">
                        31.619<i>5890</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:44:49">
                        10:44:49
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713418</td>
                      <td width="29%">
                        190.269<i>000</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:44:37">
                        10:44:37
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07663835</td>
                      <td width="29%">
                        0.044<i>95398</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:44:36">
                        10:44:36
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07663835</td>
                      <td width="29%">
                        0.006<i>14160</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:44:35">
                        10:44:35
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07663835</td>
                      <td width="29%">
                        0.025<i>76440</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:44:28">
                        10:44:28
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07663825</td>
                      <td width="29%">
                        0.161<i>12030</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:43:44">
                        10:43:44
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07663755</td>
                      <td width="29%">
                        0.006<i>28825</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:42:49">
                        10:42:49
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07663665</td>
                      <td width="29%">
                        0.014<i>14363</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:42:49">
                        10:42:49
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07666397</td>
                      <td width="29%">
                        0.000<i>01341</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:38:50">
                        10:38:50
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713339</td>
                      <td width="29%">
                        78.300<i>0000</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:34:28">
                        10:34:28
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07666457</td>
                      <td width="29%">
                        0.015<i>34977</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:32:51">
                        10:32:51
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713480</td>
                      <td width="29%">
                        0.004<i>30263</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:32:50">
                        10:32:50
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713140</td>
                      <td width="29%">
                        45.022<i>5000</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:31:52">
                        10:31:52
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713480</td>
                      <td width="29%">
                        0.005<i>85314</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:31:52">
                        10:31:52
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713480</td>
                      <td width="29%">
                        0.012<i>37000</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:31:52">
                        10:31:52
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713463</td>
                      <td width="29%">
                        0.088<i>28344</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:31:52">
                        10:31:52
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713463</td>
                      <td width="29%">
                        0.008<i>47741</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:31:52">
                        10:31:52
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713462</td>
                      <td width="29%">
                        0.032<i>97528</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:27:26">
                        10:27:26
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713316</td>
                      <td width="29%">
                        266.220<i>000</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:22:02">
                        10:22:02
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713280</td>
                      <td width="29%">
                        55.932<i>4250</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:18:21">
                        10:18:21
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07682000</td>
                      <td width="29%">
                        0.001<i>34000</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:18:03">
                        10:18:03
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07636753</td>
                      <td width="29%">
                        0.339<i>86933</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:18:03">
                        10:18:03
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07640000</td>
                      <td width="29%">
                        0.003<i>40000</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:18:03">
                        10:18:03
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07640000</td>
                      <td width="29%">
                        0.001<i>51348</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:18:03">
                        10:18:03
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07640000</td>
                      <td width="29%">
                        0.001<i>54018</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:18:03">
                        10:18:03
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07640000</td>
                      <td width="29%">
                        0.001<i>50000</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:18:03">
                        10:18:03
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07643482</td>
                      <td width="29%">
                        0.001<i>34000</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:18:03">
                        10:18:03
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07646613</td>
                      <td width="29%">
                        0.002<i>15420</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:16:31">
                        10:16:31
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713294</td>
                      <td width="29%">
                        90.593<i>1000</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:16:28">
                        10:16:28
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07693553</td>
                      <td width="29%">
                        0.003<i>57142</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 10:16:23">
                        10:16:23
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07693553</td>
                      <td width="29%">
                        0.092<i>32199</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:11:35">
                        10:11:35
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713208</td>
                      <td width="29%">
                        37.677<i>9450</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:06:12">
                        10:06:12
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713323</td>
                      <td width="29%">
                        40.746<i>8160</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 10:00:32">
                        10:00:32
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07713354</td>
                      <td width="29%">
                        267.629<i>400</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:55:36">
                        09:55:36
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708271</td>
                      <td width="29%">
                        33.669<i>0000</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:50:19">
                        09:50:19
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708134</td>
                      <td width="29%">
                        46.065<i>2570</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:50:18">
                        09:50:18
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708456</td>
                      <td width="29%">
                        0.002<i>64034</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:44:55">
                        09:44:55
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708199</td>
                      <td width="29%">
                        103.425<i>160</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:43:58">
                        09:43:58
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708487</td>
                      <td width="29%">
                        0.007<i>73930</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:40:54">
                        09:40:54
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708497</td>
                      <td width="29%">
                        0.002<i>97774</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:40:47">
                        09:40:47
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708497</td>
                      <td width="29%">
                        0.003<i>36692</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:40:31">
                        09:40:31
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708497</td>
                      <td width="29%">
                        0.004<i>49050</i>
                      </td>
                    </tr>
                    <tr className="red animr">
                      <td width="27%" className="first" title="2022-01-17 09:40:20">
                        09:40:20
                      </td>
                      <td width="14%">SELL</td>
                      <td width="30%">0.07683508</td>
                      <td width="29%">
                        0.013<i>68698</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:40:18">
                        09:40:18
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708508</td>
                      <td width="29%">
                        0.026<i>24674</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:39:49">
                        09:39:49
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708530</td>
                      <td width="29%">
                        0.002<i>46324</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:39:48">
                        09:39:48
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708530</td>
                      <td width="29%">
                        0.014<i>79009</i>
                      </td>
                    </tr>
                    <tr className="green animg">
                      <td width="27%" className="first" title="2022-01-17 09:39:45">
                        09:39:45
                      </td>
                      <td width="14%">BUY</td>
                      <td width="30%">0.07708530</td>
                      <td width="29%">
                        0.004<i>45473</i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}
export default HistoriBuySel
