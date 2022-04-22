import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import routes from '../../../../constants/routes.constants'
import { Row, Col, Container, Button } from 'reactstrap'
//import UserInfo from '../../../../components/UserInfo'
import NavBar from '../../../../components/layout/Navbar'

class Histori extends Component {
  render() {
    return (
      <Container className="root-page">
        <Row>
          <Col xl={3} className="d-none d-xl-block">
            <NavBar />
          </Col>
          <Col xl={9}>
            <div className="inset_page">
              <div className="startrek__title1">
                <h1 className="h1_investbox">History</h1>
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
                  <Link to={routes.starsUp}>Investment plans</Link>
                  <span>/</span>
                  <Link to={routes.myinvestments} className="active">
                    My investments
                  </Link>
                  <span>/</span>
                  <Link to={routes.investbox} className="active">
                    History
                  </Link>
                </div>
                <div className="clear"></div>
                <div className="create_new">
                  <div className="newline">
                    <div className="item title">History</div>
                    <div
                      id="investbox_pack_history_table_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <div className="top"></div>
                      <div className="dataTables_scroll">
                        <div className="dataTables_scrollHead">
                          <div className="dataTables_scrollHeadInner">
                            <table
                              className="tables_line big_table big_table_top ib_table_history dataTable no-footer"
                              role="grid"
                            >
                              <thead>
                                <tr role="row">
                                  <th
                                    width="10%"
                                    className="sorting_disabled"
                                    rowSpan="1"
                                    colSpan="1"
                                  >
                                    Date
                                  </th>
                                  <th
                                    width="10%"
                                    className="sorting_disabled"
                                    rowSpan="1"
                                    colSpan="1"
                                  >
                                    Event
                                  </th>
                                  <th
                                    width="6%"
                                    className="sorting_disabled"
                                    rowSpan="1"
                                    colSpan="1"
                                  >
                                    Packet
                                  </th>
                                  <th
                                    width="12%"
                                    className="sorting_disabled"
                                    rowSpan="1"
                                    colSpan="1"
                                  >
                                    Packet Dx
                                  </th>
                                  <th
                                    width="15%"
                                    className="sorting_disabled"
                                    rowSpan="1"
                                    colSpan="1"
                                  >
                                    Packet Before
                                  </th>
                                  <th
                                    width="15%"
                                    className="sorting_disabled"
                                    rowSpan="1"
                                    colSpan="1"
                                  >
                                    Packet After
                                  </th>
                                  <th
                                    width="12%"
                                    className="sorting_disabled"
                                    rowSpan="1"
                                    colSpan="1"
                                  >
                                    Balance Dx
                                  </th>
                                  <th
                                    width="10%"
                                    className="sorting_disabled"
                                    rowSpan="1"
                                    colSpan="1"
                                  >
                                    Balance Before
                                  </th>
                                  <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                    Balance After
                                  </th>
                                </tr>
                              </thead>
                            </table>
                          </div>
                        </div>
                        <div className="dataTables_scrollBody">
                          <div className="jspContainer">
                            <div className="jspPane">
                              <table
                                id="investbox_pack_history_table"
                                className="tables_line big_table big_table_top ib_table_history dataTable no-footer"
                                role="grid"
                              >
                                <thead>
                                  <tr role="row">
                                    <th
                                      width="10%"
                                      className="sorting_disabled"
                                      rowSpan="1"
                                      colSpan="1"
                                    >
                                      <div className="dataTables_sizing">Date</div>
                                    </th>
                                    <th
                                      width="10%"
                                      className="sorting_disabled"
                                      rowSpan="1"
                                      colSpan="1"
                                    >
                                      <div className="dataTables_sizing">Event</div>
                                    </th>
                                    <th
                                      width="6%"
                                      className="sorting_disabled"
                                      rowSpan="1"
                                      colSpan="1"
                                    >
                                      <div className="dataTables_sizing">Packet</div>
                                    </th>
                                    <th
                                      width="12%"
                                      className="sorting_disabled"
                                      rowSpan="1"
                                      colSpan="1"
                                    >
                                      <div className="dataTables_sizing">Packet Dx</div>
                                    </th>
                                    <th
                                      width="15%"
                                      className="sorting_disabled"
                                      rowSpan="1"
                                      colSpan="1"
                                    >
                                      <div className="dataTables_sizing">Packet Before</div>
                                    </th>
                                    <th
                                      width="15%"
                                      className="sorting_disabled"
                                      rowSpan="1"
                                      colSpan="1"
                                    >
                                      <div className="dataTables_sizing">Packet After</div>
                                    </th>
                                    <th
                                      width="12%"
                                      className="sorting_disabled"
                                      rowSpan="1"
                                      colSpan="1"
                                    >
                                      <div className="dataTables_sizing">Balance Dx</div>
                                    </th>
                                    <th
                                      width="10%"
                                      className="sorting_disabled"
                                      rowSpan="1"
                                      colSpan="1"
                                    >
                                      <div className="dataTables_sizing">Balance Before</div>
                                    </th>
                                    <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                      <div className="dataTables_sizing">Balance After</div>
                                    </th>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr className="odd">
                                    <td valign="top" colSpan="9" className="dataTables_empty">
                                      Нет записей
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="investbox_pack_history_table_paginate"
                      >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Button
                          className="paginate_button previous disabled"
                          aria-controls="investbox_pack_history_table"
                          data-dt-idx="0"
                          tabIndex="0"
                          id="investbox_pack_history_table_previous"
                        >
                          Назад
                        </Button>
                        <span></span>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Button
                          className="paginate_button next disabled"
                          aria-controls="investbox_pack_history_table"
                          data-dt-idx="1"
                          tabIndex="0"
                          id="investbox_pack_history_table_next"
                        >
                          Далее
                        </Button>
                      </div>
                      <div className="clear"></div>
                    </div>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Histori
