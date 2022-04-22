import React from 'react'
import { Row, Col, Container, Button } from 'reactstrap'

import NavBar from '../../../components/layout/Navbar'

//import UserInfo from '../../../components/UserInfo'
import routes from '../../../constants/routes.constants'
import { Link } from 'react-router-dom'

const StarsUp = () => {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col xl={9}>
          <div className="">
            <div className="inset_page">
              <div className="startrek__title1">
                <h1 className="h1_investbox">Investment plans</h1>
              </div>
              <div className="investbox_page">
                <div className="quote">
                  Invest your free coins to InvestBox! It’s a tool for devs to promote their coins.
                  It’s NOT Pyramid/HYIP, all payments are made from special fund.
                  <br />
                  InvestBoxes can change status from Active to «No coins», but you can close your
                  investment any time, it’s 100% safe.
                  <br />
                  InvestBoxes with «new» type - no investment close, you can only get daily percent.
                </div>
                <div className="clear"></div>
                <div className="mn">
                  <Link to={routes.starsUp} className="active">
                    Investment plans
                  </Link>
                  <span>/</span>
                  <Link to={routes.myinvestments}>My investments</Link>
                  <span>/</span>
                  <Link to={routes.investbox} className="active">
                    History
                  </Link>
                </div>
                <div className="clear"></div>
                <div className="create_new">
                  <table className="tables_line1">
                    <tbody>
                      <tr>
                        <td width="49%">
                          <div className="newline">
                            <div className="item title">Investment plans</div>
                            <div
                              id="investbox_boxes_list_wrapper"
                              className="dataTables_wrapper no-footer"
                            >
                              <div className="top"></div>
                              <div className="dataTables_scroll">
                                <div className="dataTables_scrollHead">
                                  <div className="dataTables_scrollHeadInner">
                                    <table
                                      className="tables_line investbox_table investbox_table_top dataTable no-footer"
                                      role="grid"
                                    >
                                      <thead>
                                        <tr role="row">
                                          <th
                                            className="first sorting_disabled"
                                            rowSpan="1"
                                            colSpan="1"
                                          >
                                            Coin
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            Percent
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            Period
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            MinInvest
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            MaxInvest
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            Action
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            Status
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            &nbsp;
                                          </th>
                                        </tr>
                                      </thead>
                                    </table>
                                  </div>
                                </div>
                                <div className="dataTables_scrollBody jspScrollable" tabIndex="0">
                                  <div className="jspContainer">
                                    <div className="jspPane">
                                      <table
                                        id="investbox_boxes_list"
                                        className="tables_line investbox_table investbox_table_top dataTable no-footer"
                                        role="grid"
                                      >
                                        <thead>
                                          <tr role="row">
                                            <th
                                              className="first sorting_disabled"
                                              rowSpan="1"
                                              colSpan="1"
                                            >
                                              <div className="dataTables_sizing">Coin</div>
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan="1"
                                              colSpan="1"
                                            >
                                              <div className="dataTables_sizing">Percent</div>
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan="1"
                                              colSpan="1"
                                            >
                                              <div className="dataTables_sizing">Period</div>
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan="1"
                                              colSpan="1"
                                            >
                                              <div className="dataTables_sizing">MinInvest</div>
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan="1"
                                              colSpan="1"
                                            >
                                              <div className="dataTables_sizing">MaxInvest</div>
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan="1"
                                              colSpan="1"
                                            >
                                              <div className="dataTables_sizing">Action</div>
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan="1"
                                              colSpan="1"
                                            >
                                              <div className="dataTables_sizing">Status</div>
                                            </th>
                                            <th
                                              className="sorting_disabled"
                                              rowSpan="1"
                                              colSpan="1"
                                            >
                                              <div className="dataTables_sizing">&nbsp;</div>
                                            </th>
                                          </tr>
                                        </thead>

                                        <tbody>
                                          <tr role="row" className="odd">
                                            <td>
                                              <div className="favyo"></div>
                                              YO
                                            </td>
                                            <td>0.2%</td>
                                            <td>Daily</td>
                                            <td>
                                              <Button
                                                href="#"
                                                onClick="$('#iboxsum834').val('0.5').trigger('change'); return false;"
                                              >
                                                0.5
                                              </Button>
                                            </td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum834').val('1500').trigger('change'); return false;"
                                              >
                                                1500
                                              </a>
                                            </td>
                                            <td>
                                              YO/BTC: 20 buy trades
                                              <br />
                                            </td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(834);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum834"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum834').val('').trigger('change');return false;"
                                                    >
                                                      YO
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr role="row" className="even">
                                            <td>LIZA2</td>
                                            <td>1%</td>
                                            <td>Daily</td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1453').val('10').trigger('change'); return false;"
                                              >
                                                10
                                              </a>
                                            </td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1453').val('10000000').trigger('change'); return false;"
                                              >
                                                10000000
                                              </a>
                                            </td>
                                            <td>BTC: 10 ds</td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(1453);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum1453"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum1453').val('').trigger('change');return false;"
                                                    >
                                                      LIZA2
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr role="row" className="odd">
                                            <td>EASY</td>
                                            <td>1%</td>
                                            <td>Daily</td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1203').val('1').trigger('change'); return false;"
                                              >
                                                1
                                              </a>
                                            </td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1203').val('10000000000').trigger('change'); return false;"
                                              >
                                                10000000000
                                              </a>
                                            </td>
                                            <td>EASY: 10 ds</td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(1203);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum1203"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum1203').val('').trigger('change');return false;"
                                                    >
                                                      EASY
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr role="row" className="even">
                                            <td>YOCHAT</td>
                                            <td>7%</td>
                                            <td>Weekly</td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1199').val('1000000').trigger('change'); return false;"
                                              >
                                                1000000
                                              </a>
                                            </td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1199').val('10000000000').trigger('change'); return false;"
                                              >
                                                10000000000
                                              </a>
                                            </td>
                                            <td>NO</td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(1199);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum1199"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum1199').val('').trigger('change');return false;"
                                                    >
                                                      YOCHAT
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr role="row" className="odd">
                                            <td>TALK</td>
                                            <td>1%</td>
                                            <td>Daily</td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1196').val('123456').trigger('change'); return false;"
                                              >
                                                123456
                                              </a>
                                            </td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1196').val('10000000000').trigger('change'); return false;"
                                              >
                                                10000000000
                                              </a>
                                            </td>
                                            <td>NO</td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(1196);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum1196"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum1196').val('').trigger('change');return false;"
                                                    >
                                                      TALK
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr role="row" className="even">
                                            <td>MASK</td>
                                            <td>1% (new)</td>
                                            <td>Daily</td>
                                            <td>no</td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1181').val('10000000000').trigger('change'); return false;"
                                              >
                                                10000000000
                                              </a>
                                            </td>
                                            <td>NO</td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(1181);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum1181"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum1181').val('').trigger('change');return false;"
                                                    >
                                                      MASK
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr role="row" className="odd">
                                            <td>YOMI</td>
                                            <td>1%</td>
                                            <td>Daily</td>
                                            <td>no</td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1163').val('10000000000').trigger('change'); return false;"
                                              >
                                                10000000000
                                              </a>
                                            </td>
                                            <td>
                                              YOMI/BTC: 10 buy trades + no YOMI sells
                                              <br />+ BTC: 10 ds
                                            </td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(1163);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum1163"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum1163').val('').trigger('change');return false;"
                                                    >
                                                      YOMI
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr role="row" className="even">
                                            <td>WATER</td>
                                            <td>3%</td>
                                            <td>Daily</td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1161').val('0.000001').trigger('change'); return false;"
                                              >
                                                0.000001
                                              </a>
                                            </td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1161').val('10000000000').trigger('change'); return false;"
                                              >
                                                10000000000
                                              </a>
                                            </td>
                                            <td>NO</td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(1161);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum1161"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum1161').val('').trigger('change');return false;"
                                                    >
                                                      WATER
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr role="row" className="odd">
                                            <td>WATER</td>
                                            <td>0.1% (new)</td>
                                            <td>Daily</td>
                                            <td>no</td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1159').val('10000000000').trigger('change'); return false;"
                                              >
                                                10000000000
                                              </a>
                                            </td>
                                            <td>
                                              WATER/BTC: 20 buy trades
                                              <br />
                                              BTC: 10 ds
                                            </td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(1159);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum1159"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum1159').val('').trigger('change');return false;"
                                                    >
                                                      WATER
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr role="row" className="even">
                                            <td>EDC</td>
                                            <td>0.17%</td>
                                            <td>Daily</td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1140').val('5000').trigger('change'); return false;"
                                              >
                                                5000
                                              </a>
                                            </td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1140').val('10000000000').trigger('change'); return false;"
                                              >
                                                10000000000
                                              </a>
                                            </td>
                                            <td>NO</td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(1140);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum1140"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum1140').val('').trigger('change');return false;"
                                                    >
                                                      EDC
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr role="row" className="odd">
                                            <td>ALISA</td>
                                            <td>8%</td>
                                            <td>Daily</td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1081').val('1000').trigger('change'); return false;"
                                              >
                                                1000
                                              </a>
                                            </td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1081').val('10000000000').trigger('change'); return false;"
                                              >
                                                10000000000
                                              </a>
                                            </td>
                                            <td>BTC: 10 ds + 20 Yo Tokens</td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(1081);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum1081"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum1081').val('').trigger('change');return false;"
                                                    >
                                                      ALISA
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr role="row" className="even">
                                            <td>YODA</td>
                                            <td>1% (new)</td>
                                            <td>Daily</td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1036').val('100').trigger('change'); return false;"
                                              >
                                                100
                                              </a>
                                            </td>
                                            <td>
                                              <a
                                                href="#"
                                                onClick="$('#iboxsum1036').val('10000000000').trigger('change'); return false;"
                                              >
                                                10000000000
                                              </a>
                                            </td>
                                            <td>BTC: 10 ds</td>
                                            <td>
                                              <div className="  ">Active</div>
                                            </td>
                                            <td>
                                              <div className="create_new2">
                                                <input
                                                  type="button"
                                                  className="invest "
                                                  onClick="doInvestBoxInvest(1036);return false;"
                                                  value="Invest"
                                                />
                                                <div className="poles">
                                                  <input
                                                    id="iboxsum1036"
                                                    maxLength="25"
                                                    type="text"
                                                    value="100.00000000"
                                                  />
                                                  <span className="currency">
                                                    <a
                                                      href="#"
                                                      onClick="$('#iboxsum1036').val('').trigger('change');return false;"
                                                    >
                                                      YODA
                                                    </a>
                                                  </span>
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div className="jspVerticalBar">
                                      <div className="jspCap jspCapTop"></div>
                                      <div className="jspTrack">
                                        <div className="jspDrag">
                                          <div className="jspDragTop"></div>
                                          <div className="jspDragBottom"></div>
                                        </div>
                                      </div>
                                      <div className="jspCap jspCapBottom"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="dataTables_paginate paging_simple_numbers"
                                id="investbox_boxes_list_paginate"
                              >
                                <Button
                                  className="paginate_button previous disabled"
                                  aria-controls="investbox_boxes_list"
                                  data-dt-idx="0"
                                  tabIndex="0"
                                  id="investbox_boxes_list_previous"
                                >
                                  Назад
                                </Button>
                                <span>
                                  <Button
                                    className="paginate_button current"
                                    aria-controls="investbox_boxes_list"
                                    data-dt-idx="1"
                                    tabIndex="0"
                                  >
                                    1
                                  </Button>
                                  <Button
                                    className="paginate_button "
                                    aria-controls="investbox_boxes_list"
                                    data-dt-idx="2"
                                    tabIndex="0"
                                  >
                                    2
                                  </Button>
                                  <Button
                                    className="paginate_button "
                                    aria-controls="investbox_boxes_list"
                                    data-dt-idx="3"
                                    tabIndex="0"
                                  >
                                    3
                                  </Button>
                                  <Button
                                    className="paginate_button "
                                    aria-controls="investbox_boxes_list"
                                    data-dt-idx="4"
                                    tabIndex="0"
                                  >
                                    4
                                  </Button>
                                  <Button
                                    className="paginate_button "
                                    aria-controls="investbox_boxes_list"
                                    data-dt-idx="5"
                                    tabIndex="0"
                                  >
                                    5
                                  </Button>
                                  <Button
                                    className="paginate_button "
                                    aria-controls="investbox_boxes_list"
                                    data-dt-idx="6"
                                    tabIndex="0"
                                  >
                                    6
                                  </Button>
                                </span>
                                <Button
                                  className="paginate_button next"
                                  aria-controls="investbox_boxes_list"
                                  data-dt-idx="7"
                                  tabIndex="0"
                                  id="investbox_boxes_list_next"
                                >
                                  Далее
                                </Button>
                              </div>
                              <div className="clear"></div>
                            </div>
                            <Button
                              type="button"
                              className="clInvestBoxCreate"
                              onClick='popupInvestBoxCreateBox(0,0,"","","","","","","","","","Create new plan")'
                            >
                              Create new plan
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default StarsUp
