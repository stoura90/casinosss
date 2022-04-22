import React from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

const OrderBooc = () => {
  return (
    <div className="buy_orders_box">
      <div className="all_title title">Ордера на покупку</div>
      <div className="result">
        <table className="sell_orders" width="100%">
          <thead>
            <tr>
              <th width="35%" className="first">
                Цена
              </th>
              <th width="38%">DASH</th>
              <th width="27%">BTC</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="scrolling" id="scrollbar4">
        <SimpleBar style={{ height: 100, width: '100%' }}>
          <div className="viewport">
            <div className="overview">
              <table className="sell_orders" width="100%">
                <tbody id="buyord_table">
                  <tr
                    className="clRow "
                    a="0.23504477"
                    p="0.07663675"
                    ac="0.23504477"
                    tc="0.01801306"
                    title="Total ETH: 0.23504477, Total BTC: 0.01801306"
                  >
                    <td width="35%" className="first">
                      0.07663675
                    </td>
                    <td width="38%">0.23504477</td>
                    <td width="27%">0.01801306</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.35544959"
                    p="0.07663665"
                    ac="0.59049436"
                    tc="0.04525352"
                    title="Total ETH: 0.59049436, Total BTC: 0.04525352"
                  >
                    <td width="35%" className="first">
                      0.07663665
                    </td>
                    <td width="38%">0.35544959</td>
                    <td width="27%">0.02724046</td>
                  </tr>
                  <tr
                    className="clRow b"
                    a="12.60190442"
                    p="0.07663615"
                    ac="13.19239878"
                    tc="1.01101495"
                    title="Total ETH: 13.19239878, Total BTC: 1.01101495"
                  >
                    <td width="35%" className="first">
                      0.07663615
                    </td>
                    <td width="38%">12.60190442</td>
                    <td width="27%">0.96576143</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.03308878"
                    p="0.07655613"
                    ac="13.22548756"
                    tc="1.01354809"
                    title="Total ETH: 13.22548756, Total BTC: 1.01354809"
                  >
                    <td width="35%" className="first">
                      0.07655613
                    </td>
                    <td width="38%">0.03308878</td>
                    <td width="27%">0.00253314</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.08877266"
                    p="0.07655612"
                    ac="13.31426022"
                    tc="1.02034418"
                    title="Total ETH: 13.31426022, Total BTC: 1.02034418"
                  >
                    <td width="35%" className="first">
                      0.07655612
                    </td>
                    <td width="38%">0.08877266</td>
                    <td width="27%">0.00679609</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00134127"
                    p="0.07643482"
                    ac="13.31560149"
                    tc="1.02044669"
                    title="Total ETH: 13.31560149, Total BTC: 1.02044669"
                  >
                    <td width="35%" className="first">
                      0.07643482
                    </td>
                    <td width="38%">0.00134127</td>
                    <td width="27%">0.00010251</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.26189209"
                    p="0.07636733"
                    ac="13.57749358"
                    tc="1.04044668"
                    title="Total ETH: 13.57749358, Total BTC: 1.04044668"
                  >
                    <td width="35%" className="first">
                      0.07636733
                    </td>
                    <td width="38%">0.26189209</td>
                    <td width="27%">0.01999999</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00301254"
                    p="0.07636721"
                    ac="13.58050612"
                    tc="1.04067673"
                    title="Total ETH: 13.58050612, Total BTC: 1.04067673"
                  >
                    <td width="35%" className="first">
                      0.07636721
                    </td>
                    <td width="38%">0.00301254</td>
                    <td width="27%">0.00023005</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00201985"
                    p="0.07633731"
                    ac="13.58252597"
                    tc="1.04083091"
                    title="Total ETH: 13.58252597, Total BTC: 1.04083091"
                  >
                    <td width="35%" className="first">
                      0.07633731
                    </td>
                    <td width="38%">0.00201985</td>
                    <td width="27%">0.00015418</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00135727"
                    p="0.07630001"
                    ac="13.58388324"
                    tc="1.04093446"
                    title="Total ETH: 13.58388324, Total BTC: 1.04093446"
                  >
                    <td width="35%" className="first">
                      0.07630001
                    </td>
                    <td width="38%">0.00135727</td>
                    <td width="27%">0.00010355</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00491913"
                    p="0.07630000"
                    ac="13.58880237"
                    tc="1.04130978"
                    title="Total ETH: 13.58880237, Total BTC: 1.04130978"
                  >
                    <td width="35%" className="first">
                      0.07630000
                    </td>
                    <td width="38%">0.00491913</td>
                    <td width="27%">0.00037532</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00132000"
                    p="0.07629000"
                    ac="13.59012237"
                    tc="1.04141048"
                    title="Total ETH: 13.59012237, Total BTC: 1.04141048"
                  >
                    <td width="35%" className="first">
                      0.07629000
                    </td>
                    <td width="38%">0.00132000</td>
                    <td width="27%">0.00010070</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.07017970"
                    p="0.07625944"
                    ac="13.66030207"
                    tc="1.04676234"
                    title="Total ETH: 13.66030207, Total BTC: 1.04676234"
                  >
                    <td width="35%" className="first">
                      0.07625944
                    </td>
                    <td width="38%">0.07017970</td>
                    <td width="27%">0.00535186</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00492887"
                    p="0.07620000"
                    ac="13.66523094"
                    tc="1.04713791"
                    title="Total ETH: 13.66523094, Total BTC: 1.04713791"
                  >
                    <td width="35%" className="first">
                      0.07620000
                    </td>
                    <td width="38%">0.00492887</td>
                    <td width="27%">0.00037557</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.01002938"
                    p="0.07618120"
                    ac="13.67526032"
                    tc="1.04790196"
                    title="Total ETH: 13.67526032, Total BTC: 1.04790196"
                  >
                    <td width="35%" className="first">
                      0.07618120
                    </td>
                    <td width="38%">0.01002938</td>
                    <td width="27%">0.00076405</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00492904"
                    p="0.07610000"
                    ac="13.68018936"
                    tc="1.04827705"
                    title="Total ETH: 13.68018936, Total BTC: 1.04827705"
                  >
                    <td width="35%" className="first">
                      0.07610000
                    </td>
                    <td width="38%">0.00492904</td>
                    <td width="27%">0.00037509</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.29099404"
                    p="0.07609995"
                    ac="13.9711834"
                    tc="1.07042168"
                    title="Total ETH: 13.9711834, Total BTC: 1.07042168"
                  >
                    <td width="35%" className="first">
                      0.07609995
                    </td>
                    <td width="38%">0.29099404</td>
                    <td width="27%">0.02214463</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.01213519"
                    p="0.07607199"
                    ac="13.98331859"
                    tc="1.07134482"
                    title="Total ETH: 13.98331859, Total BTC: 1.07134482"
                  >
                    <td width="35%" className="first">
                      0.07607199
                    </td>
                    <td width="38%">0.01213519</td>
                    <td width="27%">0.00092314</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="1.01936916"
                    p="0.07600000"
                    ac="15.00268775"
                    tc="1.14881687"
                    title="Total ETH: 15.00268775, Total BTC: 1.14881687"
                  >
                    <td width="35%" className="first">
                      0.07600000
                    </td>
                    <td width="38%">1.01936916</td>
                    <td width="27%">0.07747205</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02514908"
                    p="0.07599000"
                    ac="15.02783683"
                    tc="1.15072794"
                    title="Total ETH: 15.02783683, Total BTC: 1.15072794"
                  >
                    <td width="35%" className="first">
                      0.07599000
                    </td>
                    <td width="38%">0.02514908</td>
                    <td width="27%">0.00191107</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.04253754"
                    p="0.07590001"
                    ac="15.07037437"
                    tc="1.15395653"
                    title="Total ETH: 15.07037437, Total BTC: 1.15395653"
                  >
                    <td width="35%" className="first">
                      0.07590001
                    </td>
                    <td width="38%">0.04253754</td>
                    <td width="27%">0.00322859</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.01090909"
                    p="0.07590000"
                    ac="15.08128346"
                    tc="1.15478452"
                    title="Total ETH: 15.08128346, Total BTC: 1.15478452"
                  >
                    <td width="35%" className="first">
                      0.07590000
                    </td>
                    <td width="38%">0.01090909</td>
                    <td width="27%">0.00082799</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.01006893"
                    p="0.07588197"
                    ac="15.09135239"
                    tc="1.15554857"
                    title="Total ETH: 15.09135239, Total BTC: 1.15554857"
                  >
                    <td width="35%" className="first">
                      0.07588197
                    </td>
                    <td width="38%">0.01006893</td>
                    <td width="27%">0.00076405</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07588000"
                    ac="15.11635239"
                    tc="1.15744557"
                    title="Total ETH: 15.11635239, Total BTC: 1.15744557"
                  >
                    <td width="35%" className="first">
                      0.07588000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00189700</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00493918"
                    p="0.07580000"
                    ac="15.12129157"
                    tc="1.15781995"
                    title="Total ETH: 15.12129157, Total BTC: 1.15781995"
                  >
                    <td width="35%" className="first">
                      0.07580000
                    </td>
                    <td width="38%">0.00493918</td>
                    <td width="27%">0.00037438</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00491955"
                    p="0.07570000"
                    ac="15.12621112"
                    tc="1.15819235"
                    title="Total ETH: 15.12621112, Total BTC: 1.15819235"
                  >
                    <td width="35%" className="first">
                      0.07570000
                    </td>
                    <td width="38%">0.00491955</td>
                    <td width="27%">0.00037240</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07566000"
                    ac="15.15121112"
                    tc="1.16008385"
                    title="Total ETH: 15.15121112, Total BTC: 1.16008385"
                  >
                    <td width="35%" className="first">
                      0.07566000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00189150</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00490992"
                    p="0.07560000"
                    ac="15.15612104"
                    tc="1.16045503"
                    title="Total ETH: 15.15612104, Total BTC: 1.16045503"
                  >
                    <td width="35%" className="first">
                      0.07560000
                    </td>
                    <td width="38%">0.00490992</td>
                    <td width="27%">0.00037118</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.01435445"
                    p="0.07555610"
                    ac="15.17047549"
                    tc="1.16153959"
                    title="Total ETH: 15.17047549, Total BTC: 1.16153959"
                  >
                    <td width="35%" className="first">
                      0.07555610
                    </td>
                    <td width="38%">0.01435445</td>
                    <td width="27%">0.00108456</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00490993"
                    p="0.07550000"
                    ac="15.17538542"
                    tc="1.16191028"
                    title="Total ETH: 15.17538542, Total BTC: 1.16191028"
                  >
                    <td width="35%" className="first">
                      0.07550000
                    </td>
                    <td width="38%">0.00490993</td>
                    <td width="27%">0.00037069</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07544000"
                    ac="15.20038542"
                    tc="1.16379628"
                    title="Total ETH: 15.20038542, Total BTC: 1.16379628"
                  >
                    <td width="35%" className="first">
                      0.07544000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00188600</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00490000"
                    p="0.07540000"
                    ac="15.20528542"
                    tc="1.16416574"
                    title="Total ETH: 15.20528542, Total BTC: 1.16416574"
                  >
                    <td width="35%" className="first">
                      0.07540000
                    </td>
                    <td width="38%">0.00490000</td>
                    <td width="27%">0.00036946</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00490000"
                    p="0.07530000"
                    ac="15.21018542"
                    tc="1.16453471"
                    title="Total ETH: 15.21018542, Total BTC: 1.16453471"
                  >
                    <td width="35%" className="first">
                      0.07530000
                    </td>
                    <td width="38%">0.00490000</td>
                    <td width="27%">0.00036897</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.10543414"
                    p="0.07528946"
                    ac="15.31561956"
                    tc="1.17247278"
                    title="Total ETH: 15.31561956, Total BTC: 1.17247278"
                  >
                    <td width="35%" className="first">
                      0.07528946
                    </td>
                    <td width="38%">0.10543414</td>
                    <td width="27%">0.00793807</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00300000"
                    p="0.07523596"
                    ac="15.31861956"
                    tc="1.17269848"
                    title="Total ETH: 15.31861956, Total BTC: 1.17269848"
                  >
                    <td width="35%" className="first">
                      0.07523596
                    </td>
                    <td width="38%">0.00300000</td>
                    <td width="27%">0.00022570</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07522000"
                    ac="15.34361956"
                    tc="1.17457898"
                    title="Total ETH: 15.34361956, Total BTC: 1.17457898"
                  >
                    <td width="35%" className="first">
                      0.07522000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00188050</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.04000000"
                    p="0.07520280"
                    ac="15.38361956"
                    tc="1.17758709"
                    title="Total ETH: 15.38361956, Total BTC: 1.17758709"
                  >
                    <td width="35%" className="first">
                      0.07520280
                    </td>
                    <td width="38%">0.04000000</td>
                    <td width="27%">0.00300811</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00640000"
                    p="0.07520000"
                    ac="15.39001956"
                    tc="1.17806837"
                    title="Total ETH: 15.39001956, Total BTC: 1.17806837"
                  >
                    <td width="35%" className="first">
                      0.07520000
                    </td>
                    <td width="38%">0.00640000</td>
                    <td width="27%">0.00048128</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00287860"
                    p="0.07518085"
                    ac="15.39289816"
                    tc="1.17828478"
                    title="Total ETH: 15.39289816, Total BTC: 1.17828478"
                  >
                    <td width="35%" className="first">
                      0.07518085
                    </td>
                    <td width="38%">0.00287860</td>
                    <td width="27%">0.00021641</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00144301"
                    p="0.07516193"
                    ac="15.39434117"
                    tc="1.17839323"
                    title="Total ETH: 15.39434117, Total BTC: 1.17839323"
                  >
                    <td width="35%" className="first">
                      0.07516193
                    </td>
                    <td width="38%">0.00144301</td>
                    <td width="27%">0.00010845</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00133168"
                    p="0.07510009"
                    ac="15.39567285"
                    tc="1.17849323"
                    title="Total ETH: 15.39567285, Total BTC: 1.17849323"
                  >
                    <td width="35%" className="first">
                      0.07510009
                    </td>
                    <td width="38%">0.00133168</td>
                    <td width="27%">0.00010000</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00490000"
                    p="0.07510000"
                    ac="15.40057285"
                    tc="1.17886122"
                    title="Total ETH: 15.40057285, Total BTC: 1.17886122"
                  >
                    <td width="35%" className="first">
                      0.07510000
                    </td>
                    <td width="38%">0.00490000</td>
                    <td width="27%">0.00036799</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07502000"
                    ac="15.42557285"
                    tc="1.18073672"
                    title="Total ETH: 15.42557285, Total BTC: 1.18073672"
                  >
                    <td width="35%" className="first">
                      0.07502000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00187550</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.14514131"
                    p="0.07500000"
                    ac="15.57071416"
                    tc="1.19162231"
                    title="Total ETH: 15.57071416, Total BTC: 1.19162231"
                  >
                    <td width="35%" className="first">
                      0.07500000
                    </td>
                    <td width="38%">0.14514131</td>
                    <td width="27%">0.01088559</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00638001"
                    p="0.07490000"
                    ac="15.57709417"
                    tc="1.19210017"
                    title="Total ETH: 15.57709417, Total BTC: 1.19210017"
                  >
                    <td width="35%" className="first">
                      0.07490000
                    </td>
                    <td width="38%">0.00638001</td>
                    <td width="27%">0.00047786</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07488000"
                    ac="15.60209417"
                    tc="1.19397217"
                    title="Total ETH: 15.60209417, Total BTC: 1.19397217"
                  >
                    <td width="35%" className="first">
                      0.07488000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00187200</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00381783"
                    p="0.07484349"
                    ac="15.605912"
                    tc="1.1942579"
                    title="Total ETH: 15.605912, Total BTC: 1.1942579"
                  >
                    <td width="35%" className="first">
                      0.07484349
                    </td>
                    <td width="38%">0.00381783</td>
                    <td width="27%">0.00028573</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00303939"
                    p="0.07480099"
                    ac="15.60895139"
                    tc="1.19448524"
                    title="Total ETH: 15.60895139, Total BTC: 1.19448524"
                  >
                    <td width="35%" className="first">
                      0.07480099
                    </td>
                    <td width="38%">0.00303939</td>
                    <td width="27%">0.00022734</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00489019"
                    p="0.07480000"
                    ac="15.61384158"
                    tc="1.19485102"
                    title="Total ETH: 15.61384158, Total BTC: 1.19485102"
                  >
                    <td width="35%" className="first">
                      0.07480000
                    </td>
                    <td width="38%">0.00489019</td>
                    <td width="27%">0.00036578</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.01163452"
                    p="0.07470000"
                    ac="15.6254761"
                    tc="1.19572011"
                    title="Total ETH: 15.6254761, Total BTC: 1.19572011"
                  >
                    <td width="35%" className="first">
                      0.07470000
                    </td>
                    <td width="38%">0.01163452</td>
                    <td width="27%">0.00086909</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07466000"
                    ac="15.6504761"
                    tc="1.19758661"
                    title="Total ETH: 15.6504761, Total BTC: 1.19758661"
                  >
                    <td width="35%" className="first">
                      0.07466000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00186650</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00487900"
                    p="0.07460000"
                    ac="15.6553551"
                    tc="1.19795058"
                    title="Total ETH: 15.6553551, Total BTC: 1.19795058"
                  >
                    <td width="35%" className="first">
                      0.07460000
                    </td>
                    <td width="38%">0.00487900</td>
                    <td width="27%">0.00036397</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00887807"
                    p="0.07451000"
                    ac="15.66423317"
                    tc="1.19861208"
                    title="Total ETH: 15.66423317, Total BTC: 1.19861208"
                  >
                    <td width="35%" className="first">
                      0.07451000
                    </td>
                    <td width="38%">0.00887807</td>
                    <td width="27%">0.00066150</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00483429"
                    p="0.07450497"
                    ac="15.66906746"
                    tc="1.19897225"
                    title="Total ETH: 15.66906746, Total BTC: 1.19897225"
                  >
                    <td width="35%" className="first">
                      0.07450497
                    </td>
                    <td width="38%">0.00483429</td>
                    <td width="27%">0.00036017</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00639821"
                    p="0.07450000"
                    ac="15.67546567"
                    tc="1.19944891"
                    title="Total ETH: 15.67546567, Total BTC: 1.19944891"
                  >
                    <td width="35%" className="first">
                      0.07450000
                    </td>
                    <td width="38%">0.00639821</td>
                    <td width="27%">0.00047666</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07444000"
                    ac="15.70046567"
                    tc="1.20130991"
                    title="Total ETH: 15.70046567, Total BTC: 1.20130991"
                  >
                    <td width="35%" className="first">
                      0.07444000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00186100</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00488616"
                    p="0.07440000"
                    ac="15.70535183"
                    tc="1.20167344"
                    title="Total ETH: 15.70535183, Total BTC: 1.20167344"
                  >
                    <td width="35%" className="first">
                      0.07440000
                    </td>
                    <td width="38%">0.00488616</td>
                    <td width="27%">0.00036353</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00488618"
                    p="0.07430000"
                    ac="15.71023801"
                    tc="1.20203648"
                    title="Total ETH: 15.71023801, Total BTC: 1.20203648"
                  >
                    <td width="35%" className="first">
                      0.07430000
                    </td>
                    <td width="38%">0.00488618</td>
                    <td width="27%">0.00036304</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.01098655"
                    p="0.07425230"
                    ac="15.72122456"
                    tc="1.20285225"
                    title="Total ETH: 15.72122456, Total BTC: 1.20285225"
                  >
                    <td width="35%" className="first">
                      0.07425230
                    </td>
                    <td width="38%">0.01098655</td>
                    <td width="27%">0.00081577</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07422000"
                    ac="15.74622456"
                    tc="1.20470775"
                    title="Total ETH: 15.74622456, Total BTC: 1.20470775"
                  >
                    <td width="35%" className="first">
                      0.07422000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00185550</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00488621"
                    p="0.07420000"
                    ac="15.75111077"
                    tc="1.2050703"
                    title="Total ETH: 15.75111077, Total BTC: 1.2050703"
                  >
                    <td width="35%" className="first">
                      0.07420000
                    </td>
                    <td width="38%">0.00488621</td>
                    <td width="27%">0.00036255</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.10819318"
                    p="0.07416012"
                    ac="15.85930395"
                    tc="1.21309391"
                    title="Total ETH: 15.85930395, Total BTC: 1.21309391"
                  >
                    <td width="35%" className="first">
                      0.07416012
                    </td>
                    <td width="38%">0.10819318</td>
                    <td width="27%">0.00802361</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00488624"
                    p="0.07410000"
                    ac="15.86419019"
                    tc="1.21345598"
                    title="Total ETH: 15.86419019, Total BTC: 1.21345598"
                  >
                    <td width="35%" className="first">
                      0.07410000
                    </td>
                    <td width="38%">0.00488624</td>
                    <td width="27%">0.00036207</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00200000"
                    p="0.07402200"
                    ac="15.86619019"
                    tc="1.21360402"
                    title="Total ETH: 15.86619019, Total BTC: 1.21360402"
                  >
                    <td width="35%" className="first">
                      0.07402200
                    </td>
                    <td width="38%">0.00200000</td>
                    <td width="27%">0.00014804</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07402000"
                    ac="15.89119019"
                    tc="1.21545452"
                    title="Total ETH: 15.89119019, Total BTC: 1.21545452"
                  >
                    <td width="35%" className="first">
                      0.07402000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00185050</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="1.18801097"
                    p="0.07400100"
                    ac="17.07920116"
                    tc="1.30336851"
                    title="Total ETH: 17.07920116, Total BTC: 1.30336851"
                  >
                    <td width="35%" className="first">
                      0.07400100
                    </td>
                    <td width="38%">1.18801097</td>
                    <td width="27%">0.08791399</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00800113"
                    p="0.07400000"
                    ac="17.08720229"
                    tc="1.30396059"
                    title="Total ETH: 17.08720229, Total BTC: 1.30396059"
                  >
                    <td width="35%" className="first">
                      0.07400000
                    </td>
                    <td width="38%">0.00800113</td>
                    <td width="27%">0.00059208</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00487614"
                    p="0.07390000"
                    ac="17.09207843"
                    tc="1.30432093"
                    title="Total ETH: 17.09207843, Total BTC: 1.30432093"
                  >
                    <td width="35%" className="first">
                      0.07390000
                    </td>
                    <td width="38%">0.00487614</td>
                    <td width="27%">0.00036034</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07388000"
                    ac="17.11707843"
                    tc="1.30616793"
                    title="Total ETH: 17.11707843, Total BTC: 1.30616793"
                  >
                    <td width="35%" className="first">
                      0.07388000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00184700</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00487616"
                    p="0.07380000"
                    ac="17.12195459"
                    tc="1.30652779"
                    title="Total ETH: 17.12195459, Total BTC: 1.30652779"
                  >
                    <td width="35%" className="first">
                      0.07380000
                    </td>
                    <td width="38%">0.00487616</td>
                    <td width="27%">0.00035986</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00487617"
                    p="0.07370000"
                    ac="17.12683076"
                    tc="1.30688716"
                    title="Total ETH: 17.12683076, Total BTC: 1.30688716"
                  >
                    <td width="35%" className="first">
                      0.07370000
                    </td>
                    <td width="38%">0.00487617</td>
                    <td width="27%">0.00035937</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07366000"
                    ac="17.15183076"
                    tc="1.30872866"
                    title="Total ETH: 17.15183076, Total BTC: 1.30872866"
                  >
                    <td width="35%" className="first">
                      0.07366000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00184150</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00487619"
                    p="0.07360000"
                    ac="17.15670695"
                    tc="1.30908754"
                    title="Total ETH: 17.15670695, Total BTC: 1.30908754"
                  >
                    <td width="35%" className="first">
                      0.07360000
                    </td>
                    <td width="38%">0.00487619</td>
                    <td width="27%">0.00035888</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00201189"
                    p="0.07352275"
                    ac="17.15871884"
                    tc="1.30923545"
                    title="Total ETH: 17.15871884, Total BTC: 1.30923545"
                  >
                    <td width="35%" className="first">
                      0.07352275
                    </td>
                    <td width="38%">0.00201189</td>
                    <td width="27%">0.00014791</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.04592219"
                    p="0.07350000"
                    ac="17.20464103"
                    tc="1.31261073"
                    title="Total ETH: 17.20464103, Total BTC: 1.31261073"
                  >
                    <td width="35%" className="first">
                      0.07350000
                    </td>
                    <td width="38%">0.04592219</td>
                    <td width="27%">0.00337528</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07344000"
                    ac="17.22964103"
                    tc="1.31444673"
                    title="Total ETH: 17.22964103, Total BTC: 1.31444673"
                  >
                    <td width="35%" className="first">
                      0.07344000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00183600</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00336600"
                    p="0.07340000"
                    ac="17.23300703"
                    tc="1.31469379"
                    title="Total ETH: 17.23300703, Total BTC: 1.31469379"
                  >
                    <td width="35%" className="first">
                      0.07340000
                    </td>
                    <td width="38%">0.00336600</td>
                    <td width="27%">0.00024706</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00628278"
                    p="0.07330000"
                    ac="17.23928981"
                    tc="1.31515431"
                    title="Total ETH: 17.23928981, Total BTC: 1.31515431"
                  >
                    <td width="35%" className="first">
                      0.07330000
                    </td>
                    <td width="38%">0.00628278</td>
                    <td width="27%">0.00046052</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00218732"
                    p="0.07328571"
                    ac="17.24147713"
                    tc="1.3153146"
                    title="Total ETH: 17.24147713, Total BTC: 1.3153146"
                  >
                    <td width="35%" className="first">
                      0.07328571
                    </td>
                    <td width="38%">0.00218732</td>
                    <td width="27%">0.00016029</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07322000"
                    ac="17.26647713"
                    tc="1.3171451"
                    title="Total ETH: 17.26647713, Total BTC: 1.3171451"
                  >
                    <td width="35%" className="first">
                      0.07322000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00183050</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00336600"
                    p="0.07320000"
                    ac="17.26984313"
                    tc="1.31739149"
                    title="Total ETH: 17.26984313, Total BTC: 1.31739149"
                  >
                    <td width="35%" className="first">
                      0.07320000
                    </td>
                    <td width="38%">0.00336600</td>
                    <td width="27%">0.00024639</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00218730"
                    p="0.07319048"
                    ac="17.27203043"
                    tc="1.31755157"
                    title="Total ETH: 17.27203043, Total BTC: 1.31755157"
                  >
                    <td width="35%" className="first">
                      0.07319048
                    </td>
                    <td width="38%">0.00218730</td>
                    <td width="27%">0.00016008</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.11877048"
                    p="0.07316800"
                    ac="17.39080091"
                    tc="1.32624176"
                    title="Total ETH: 17.39080091, Total BTC: 1.32624176"
                  >
                    <td width="35%" className="first">
                      0.07316800
                    </td>
                    <td width="38%">0.11877048</td>
                    <td width="27%">0.00869019</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00151911"
                    p="0.07312173"
                    ac="17.39232002"
                    tc="1.32635283"
                    title="Total ETH: 17.39232002, Total BTC: 1.32635283"
                  >
                    <td width="35%" className="first">
                      0.07312173
                    </td>
                    <td width="38%">0.00151911</td>
                    <td width="27%">0.00011107</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00336600"
                    p="0.07310000"
                    ac="17.39568602"
                    tc="1.32659888"
                    title="Total ETH: 17.39568602, Total BTC: 1.32659888"
                  >
                    <td width="35%" className="first">
                      0.07310000
                    </td>
                    <td width="38%">0.00336600</td>
                    <td width="27%">0.00024605</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00235213"
                    p="0.07309524"
                    ac="17.39803815"
                    tc="1.3267708"
                    title="Total ETH: 17.39803815, Total BTC: 1.3267708"
                  >
                    <td width="35%" className="first">
                      0.07309524
                    </td>
                    <td width="38%">0.00235213</td>
                    <td width="27%">0.00017192</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.10481695"
                    p="0.07304772"
                    ac="17.5028551"
                    tc="1.33442743"
                    title="Total ETH: 17.5028551, Total BTC: 1.33442743"
                  >
                    <td width="35%" className="first">
                      0.07304772
                    </td>
                    <td width="38%">0.10481695</td>
                    <td width="27%">0.00765663</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07302000"
                    ac="17.5278551"
                    tc="1.33625293"
                    title="Total ETH: 17.5278551, Total BTC: 1.33625293"
                  >
                    <td width="35%" className="first">
                      0.07302000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00182550</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02629781"
                    p="0.07300536"
                    ac="17.55415291"
                    tc="1.33817281"
                    title="Total ETH: 17.55415291, Total BTC: 1.33817281"
                  >
                    <td width="35%" className="first">
                      0.07300536
                    </td>
                    <td width="38%">0.02629781</td>
                    <td width="27%">0.00191988</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00425432"
                    p="0.07300100"
                    ac="17.55840723"
                    tc="1.33848337"
                    title="Total ETH: 17.55840723, Total BTC: 1.33848337"
                  >
                    <td width="35%" className="first">
                      0.07300100
                    </td>
                    <td width="38%">0.00425432</td>
                    <td width="27%">0.00031056</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.07064737"
                    p="0.07300000"
                    ac="17.6290546"
                    tc="1.34364062"
                    title="Total ETH: 17.6290546, Total BTC: 1.34364062"
                  >
                    <td width="35%" className="first">
                      0.07300000
                    </td>
                    <td width="38%">0.07064737</td>
                    <td width="27%">0.00515725</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00453518"
                    p="0.07296633"
                    ac="17.63358978"
                    tc="1.34397153"
                    title="Total ETH: 17.63358978, Total BTC: 1.34397153"
                  >
                    <td width="35%" className="first">
                      0.07296633
                    </td>
                    <td width="38%">0.00453518</td>
                    <td width="27%">0.00033091</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07290000"
                    ac="17.63724978"
                    tc="1.34423834"
                    title="Total ETH: 17.63724978, Total BTC: 1.34423834"
                  >
                    <td width="35%" className="first">
                      0.07290000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026681</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.01019617"
                    p="0.07289300"
                    ac="17.64744595"
                    tc="1.34498156"
                    title="Total ETH: 17.64744595, Total BTC: 1.34498156"
                  >
                    <td width="35%" className="first">
                      0.07289300
                    </td>
                    <td width="38%">0.01019617</td>
                    <td width="27%">0.00074322</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02035093"
                    p="0.07289000"
                    ac="17.66779688"
                    tc="1.34646493"
                    title="Total ETH: 17.66779688, Total BTC: 1.34646493"
                  >
                    <td width="35%" className="first">
                      0.07289000
                    </td>
                    <td width="38%">0.02035093</td>
                    <td width="27%">0.00148337</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07288000"
                    ac="17.69279688"
                    tc="1.34828693"
                    title="Total ETH: 17.69279688, Total BTC: 1.34828693"
                  >
                    <td width="35%" className="first">
                      0.07288000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00182200</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00260642"
                    p="0.07287000"
                    ac="17.6954033"
                    tc="1.34847685"
                    title="Total ETH: 17.6954033, Total BTC: 1.34847685"
                  >
                    <td width="35%" className="first">
                      0.07287000
                    </td>
                    <td width="38%">0.00260642</td>
                    <td width="27%">0.00018992</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02017020"
                    p="0.07285000"
                    ac="17.7155735"
                    tc="1.34994624"
                    title="Total ETH: 17.7155735, Total BTC: 1.34994624"
                  >
                    <td width="35%" className="first">
                      0.07285000
                    </td>
                    <td width="38%">0.02017020</td>
                    <td width="27%">0.00146939</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00802918"
                    p="0.07283300"
                    ac="17.72360268"
                    tc="1.35053102"
                    title="Total ETH: 17.72360268, Total BTC: 1.35053102"
                  >
                    <td width="35%" className="first">
                      0.07283300
                    </td>
                    <td width="38%">0.00802918</td>
                    <td width="27%">0.00058478</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07280000"
                    ac="17.72726268"
                    tc="1.35079746"
                    title="Total ETH: 17.72726268, Total BTC: 1.35079746"
                  >
                    <td width="35%" className="first">
                      0.07280000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026644</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00454583"
                    p="0.07279542"
                    ac="17.73180851"
                    tc="1.35112837"
                    title="Total ETH: 17.73180851, Total BTC: 1.35112837"
                  >
                    <td width="35%" className="first">
                      0.07279542
                    </td>
                    <td width="38%">0.00454583</td>
                    <td width="27%">0.00033091</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.05085197"
                    p="0.07279520"
                    ac="17.78266048"
                    tc="1.35483014"
                    title="Total ETH: 17.78266048, Total BTC: 1.35483014"
                  >
                    <td width="35%" className="first">
                      0.07279520
                    </td>
                    <td width="38%">0.05085197</td>
                    <td width="27%">0.00370177</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02944155"
                    p="0.07277834"
                    ac="17.81210203"
                    tc="1.35697284"
                    title="Total ETH: 17.81210203, Total BTC: 1.35697284"
                  >
                    <td width="35%" className="first">
                      0.07277834
                    </td>
                    <td width="38%">0.02944155</td>
                    <td width="27%">0.00214270</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.06300000"
                    p="0.07277777"
                    ac="17.87510203"
                    tc="1.36155783"
                    title="Total ETH: 17.87510203, Total BTC: 1.36155783"
                  >
                    <td width="35%" className="first">
                      0.07277777
                    </td>
                    <td width="38%">0.06300000</td>
                    <td width="27%">0.00458499</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00278000"
                    p="0.07277425"
                    ac="17.87788203"
                    tc="1.36176014"
                    title="Total ETH: 17.87788203, Total BTC: 1.36176014"
                  >
                    <td width="35%" className="first">
                      0.07277425
                    </td>
                    <td width="38%">0.00278000</td>
                    <td width="27%">0.00020231</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07270000"
                    ac="17.88154203"
                    tc="1.36202622"
                    title="Total ETH: 17.88154203, Total BTC: 1.36202622"
                  >
                    <td width="35%" className="first">
                      0.07270000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026608</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07266000"
                    ac="17.90654203"
                    tc="1.36384272"
                    title="Total ETH: 17.90654203, Total BTC: 1.36384272"
                  >
                    <td width="35%" className="first">
                      0.07266000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00181650</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07260000"
                    ac="17.91020203"
                    tc="1.36410843"
                    title="Total ETH: 17.91020203, Total BTC: 1.36410843"
                  >
                    <td width="35%" className="first">
                      0.07260000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026571</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00325496"
                    p="0.07252000"
                    ac="17.91345699"
                    tc="1.36434447"
                    title="Total ETH: 17.91345699, Total BTC: 1.36434447"
                  >
                    <td width="35%" className="first">
                      0.07252000
                    </td>
                    <td width="38%">0.00325496</td>
                    <td width="27%">0.00023604</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07250000"
                    ac="17.91711699"
                    tc="1.36460982"
                    title="Total ETH: 17.91711699, Total BTC: 1.36460982"
                  >
                    <td width="35%" className="first">
                      0.07250000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026535</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00235733"
                    p="0.07248000"
                    ac="17.91947432"
                    tc="1.36478067"
                    title="Total ETH: 17.91947432, Total BTC: 1.36478067"
                  >
                    <td width="35%" className="first">
                      0.07248000
                    </td>
                    <td width="38%">0.00235733</td>
                    <td width="27%">0.00017085</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00257516"
                    p="0.07247300"
                    ac="17.92204948"
                    tc="1.36496729"
                    title="Total ETH: 17.92204948, Total BTC: 1.36496729"
                  >
                    <td width="35%" className="first">
                      0.07247300
                    </td>
                    <td width="38%">0.00257516</td>
                    <td width="27%">0.00018662</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00158171"
                    p="0.07247200"
                    ac="17.92363119"
                    tc="1.36508191"
                    title="Total ETH: 17.92363119, Total BTC: 1.36508191"
                  >
                    <td width="35%" className="first">
                      0.07247200
                    </td>
                    <td width="38%">0.00158171</td>
                    <td width="27%">0.00011462</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00153633"
                    p="0.07247100"
                    ac="17.92516752"
                    tc="1.36519324"
                    title="Total ETH: 17.92516752, Total BTC: 1.36519324"
                  >
                    <td width="35%" className="first">
                      0.07247100
                    </td>
                    <td width="38%">0.00153633</td>
                    <td width="27%">0.00011133</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07244000"
                    ac="17.95016752"
                    tc="1.36700424"
                    title="Total ETH: 17.95016752, Total BTC: 1.36700424"
                  >
                    <td width="35%" className="first">
                      0.07244000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00181100</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07240000"
                    ac="17.95382752"
                    tc="1.36726922"
                    title="Total ETH: 17.95382752, Total BTC: 1.36726922"
                  >
                    <td width="35%" className="first">
                      0.07240000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026498</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="1.19689625"
                    p="0.07230260"
                    ac="19.15072377"
                    tc="1.45380793"
                    title="Total ETH: 19.15072377, Total BTC: 1.45380793"
                  >
                    <td width="35%" className="first">
                      0.07230260
                    </td>
                    <td width="38%">1.19689625</td>
                    <td width="27%">0.08653871</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07230000"
                    ac="19.15438377"
                    tc="1.45407254"
                    title="Total ETH: 19.15438377, Total BTC: 1.45407254"
                  >
                    <td width="35%" className="first">
                      0.07230000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026461</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.06800000"
                    p="0.07222222"
                    ac="19.22238377"
                    tc="1.45898365"
                    title="Total ETH: 19.22238377, Total BTC: 1.45898365"
                  >
                    <td width="35%" className="first">
                      0.07222222
                    </td>
                    <td width="38%">0.06800000</td>
                    <td width="27%">0.00491111</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07222000"
                    ac="19.24738377"
                    tc="1.46078915"
                    title="Total ETH: 19.24738377, Total BTC: 1.46078915"
                  >
                    <td width="35%" className="first">
                      0.07222000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00180550</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07220000"
                    ac="19.25104377"
                    tc="1.4610534"
                    title="Total ETH: 19.25104377, Total BTC: 1.4610534"
                  >
                    <td width="35%" className="first">
                      0.07220000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026425</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00214955"
                    p="0.07216832"
                    ac="19.25319332"
                    tc="1.46120852"
                    title="Total ETH: 19.25319332, Total BTC: 1.46120852"
                  >
                    <td width="35%" className="first">
                      0.07216832
                    </td>
                    <td width="38%">0.00214955</td>
                    <td width="27%">0.00015512</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00513614"
                    p="0.07210000"
                    ac="19.25832946"
                    tc="1.46157883"
                    title="Total ETH: 19.25832946, Total BTC: 1.46157883"
                  >
                    <td width="35%" className="first">
                      0.07210000
                    </td>
                    <td width="38%">0.00513614</td>
                    <td width="27%">0.00037031</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00409581"
                    p="0.07207852"
                    ac="19.26242527"
                    tc="1.46187404"
                    title="Total ETH: 19.26242527, Total BTC: 1.46187404"
                  >
                    <td width="35%" className="first">
                      0.07207852
                    </td>
                    <td width="38%">0.00409581</td>
                    <td width="27%">0.00029521</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07202000"
                    ac="19.28742527"
                    tc="1.46367454"
                    title="Total ETH: 19.28742527, Total BTC: 1.46367454"
                  >
                    <td width="35%" className="first">
                      0.07202000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00180050</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02141085"
                    p="0.07201230"
                    ac="19.30883612"
                    tc="1.46521638"
                    title="Total ETH: 19.30883612, Total BTC: 1.46521638"
                  >
                    <td width="35%" className="first">
                      0.07201230
                    </td>
                    <td width="38%">0.02141085</td>
                    <td width="27%">0.00154184</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.01295927"
                    p="0.07200000"
                    ac="19.32179539"
                    tc="1.46614944"
                    title="Total ETH: 19.32179539, Total BTC: 1.46614944"
                  >
                    <td width="35%" className="first">
                      0.07200000
                    </td>
                    <td width="38%">0.01295927</td>
                    <td width="27%">0.00093306</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.10000000"
                    p="0.07195200"
                    ac="19.42179539"
                    tc="1.47334464"
                    title="Total ETH: 19.42179539, Total BTC: 1.47334464"
                  >
                    <td width="35%" className="first">
                      0.07195200
                    </td>
                    <td width="38%">0.10000000</td>
                    <td width="27%">0.00719520</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00139006"
                    p="0.07193943"
                    ac="19.42318545"
                    tc="1.47344464"
                    title="Total ETH: 19.42318545, Total BTC: 1.47344464"
                  >
                    <td width="35%" className="first">
                      0.07193943
                    </td>
                    <td width="38%">0.00139006</td>
                    <td width="27%">0.00010000</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00140825"
                    p="0.07191900"
                    ac="19.4245937"
                    tc="1.47354591"
                    title="Total ETH: 19.4245937, Total BTC: 1.47354591"
                  >
                    <td width="35%" className="first">
                      0.07191900
                    </td>
                    <td width="38%">0.00140825</td>
                    <td width="27%">0.00010127</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07190000"
                    ac="19.4282537"
                    tc="1.47380906"
                    title="Total ETH: 19.4282537, Total BTC: 1.47380906"
                  >
                    <td width="35%" className="first">
                      0.07190000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026315</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.02500000"
                    p="0.07188000"
                    ac="19.4532537"
                    tc="1.47560606"
                    title="Total ETH: 19.4532537, Total BTC: 1.47560606"
                  >
                    <td width="35%" className="first">
                      0.07188000
                    </td>
                    <td width="38%">0.02500000</td>
                    <td width="27%">0.00179700</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07180000"
                    ac="19.4569137"
                    tc="1.47586884"
                    title="Total ETH: 19.4569137, Total BTC: 1.47586884"
                  >
                    <td width="35%" className="first">
                      0.07180000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026278</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.07300000"
                    p="0.07177777"
                    ac="19.5299137"
                    tc="1.48110861"
                    title="Total ETH: 19.5299137, Total BTC: 1.48110861"
                  >
                    <td width="35%" className="first">
                      0.07177777
                    </td>
                    <td width="38%">0.07300000</td>
                    <td width="27%">0.00523977</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07170000"
                    ac="19.5335737"
                    tc="1.48137103"
                    title="Total ETH: 19.5335737, Total BTC: 1.48137103"
                  >
                    <td width="35%" className="first">
                      0.07170000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026242</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07160000"
                    ac="19.5372337"
                    tc="1.48163308"
                    title="Total ETH: 19.5372337, Total BTC: 1.48163308"
                  >
                    <td width="35%" className="first">
                      0.07160000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026205</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07150000"
                    ac="19.5408937"
                    tc="1.48189477"
                    title="Total ETH: 19.5408937, Total BTC: 1.48189477"
                  >
                    <td width="35%" className="first">
                      0.07150000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026169</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07140000"
                    ac="19.5445537"
                    tc="1.48215609"
                    title="Total ETH: 19.5445537, Total BTC: 1.48215609"
                  >
                    <td width="35%" className="first">
                      0.07140000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026132</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07130000"
                    ac="19.5482137"
                    tc="1.48241704"
                    title="Total ETH: 19.5482137, Total BTC: 1.48241704"
                  >
                    <td width="35%" className="first">
                      0.07130000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026095</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.07800000"
                    p="0.07122222"
                    ac="19.6262137"
                    tc="1.48797237"
                    title="Total ETH: 19.6262137, Total BTC: 1.48797237"
                  >
                    <td width="35%" className="first">
                      0.07122222
                    </td>
                    <td width="38%">0.07800000</td>
                    <td width="27%">0.00555533</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00243446"
                    p="0.07120093"
                    ac="19.62864816"
                    tc="1.4881457"
                    title="Total ETH: 19.62864816, Total BTC: 1.4881457"
                  >
                    <td width="35%" className="first">
                      0.07120093
                    </td>
                    <td width="38%">0.00243446</td>
                    <td width="27%">0.00017333</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07120000"
                    ac="19.63230816"
                    tc="1.48840629"
                    title="Total ETH: 19.63230816, Total BTC: 1.48840629"
                  >
                    <td width="35%" className="first">
                      0.07120000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00026059</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.13848000"
                    p="0.07110000"
                    ac="19.77078816"
                    tc="1.49825221"
                    title="Total ETH: 19.77078816, Total BTC: 1.49825221"
                  >
                    <td width="35%" className="first">
                      0.07110000
                    </td>
                    <td width="38%">0.13848000</td>
                    <td width="27%">0.00984592</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00141967"
                    p="0.07108822"
                    ac="19.77220783"
                    tc="1.49835313"
                    title="Total ETH: 19.77220783, Total BTC: 1.49835313"
                  >
                    <td width="35%" className="first">
                      0.07108822
                    </td>
                    <td width="38%">0.00141967</td>
                    <td width="27%">0.00010092</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00141000"
                    p="0.07100010"
                    ac="19.77361783"
                    tc="1.49845324"
                    title="Total ETH: 19.77361783, Total BTC: 1.49845324"
                  >
                    <td width="35%" className="first">
                      0.07100010
                    </td>
                    <td width="38%">0.00141000</td>
                    <td width="27%">0.00010011</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.03897577"
                    p="0.07100000"
                    ac="19.8125936"
                    tc="1.50122051"
                    title="Total ETH: 19.8125936, Total BTC: 1.50122051"
                  >
                    <td width="35%" className="first">
                      0.07100000
                    </td>
                    <td width="38%">0.03897577</td>
                    <td width="27%">0.00276727</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.05844567"
                    p="0.07090991"
                    ac="19.87103927"
                    tc="1.50536488"
                    title="Total ETH: 19.87103927, Total BTC: 1.50536488"
                  >
                    <td width="35%" className="first">
                      0.07090991
                    </td>
                    <td width="38%">0.05844567</td>
                    <td width="27%">0.00414437</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07090000"
                    ac="19.87469927"
                    tc="1.50562437"
                    title="Total ETH: 19.87469927, Total BTC: 1.50562437"
                  >
                    <td width="35%" className="first">
                      0.07090000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00025949</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.10000000"
                    p="0.07087272"
                    ac="19.97469927"
                    tc="1.51271164"
                    title="Total ETH: 19.97469927, Total BTC: 1.51271164"
                  >
                    <td width="35%" className="first">
                      0.07087272
                    </td>
                    <td width="38%">0.10000000</td>
                    <td width="27%">0.00708727</td>
                  </tr>
                  <tr
                    className="clRow "
                    a="0.00366000"
                    p="0.07080000"
                    ac="19.97835927"
                    tc="1.51297076"
                    title="Total ETH: 19.97835927, Total BTC: 1.51297076"
                  >
                    <td width="35%" className="first">
                      0.07080000
                    </td>
                    <td width="38%">0.00366000</td>
                    <td width="27%">0.00025912</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}
export default OrderBooc
