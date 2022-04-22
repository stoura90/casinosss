import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import routes from '../../../../constants/routes.constants'
import { Row, Col, Container, Button } from 'reactstrap'
//import UserInfo from '../../../../components/UserInfo'
import NavBar from '../../../../components/layout/Navbar'

class Myinvest extends Component {
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
                <h1 className="h1_investbox">My investments</h1>
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
                  <table className="tables_line1">
                    <tbody>
                      <tr>
                        <td width="49%">
                          <div className="newline ">
                            <div className="item title">My investments</div>
                            <div
                              id="investbox_packs_list_wrapper"
                              className="dataTables_wrapper no-footer"
                            >
                              <div className="top"></div>
                              <div className="dataTables_scroll">
                                <div className="dataTables_scrollHead">
                                  <div className="dataTables_scrollHeadInner">
                                    <table
                                      className="tables_line ib_table_adaptive big_table big_table_top dataTable no-footer"
                                      role="grid"
                                    >
                                      <thead>
                                        <tr role="row">
                                          <th
                                            className="first sorting_disabled"
                                            rowSpan="1"
                                            colSpan="1"
                                          >
                                            Packet
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            Percent
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            Period
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            Amount
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            Status
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            Next
                                          </th>
                                          <th className="sorting_disabled" rowSpan="1" colSpan="1">
                                            &nbsp;
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
                                        id="investbox_packs_list"
                                        className="tables_line ib_table_adaptive big_table big_table_top dataTable no-footer"
                                        role="grid"
                                      >
                                        <thead>
                                          <tr role="row">
                                            <th
                                              className="first sorting_disabled"
                                              rowSpan="1"
                                              colSpan="1"
                                            >
                                              <div className="dataTables_sizing">Packet</div>
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
                                              <div className="dataTables_sizing">Amount</div>
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
                                              <div className="dataTables_sizing">Next</div>
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
                                          <tr className="odd">
                                            <td
                                              valign="top"
                                              colSpan="7"
                                              className="dataTables_empty"
                                            >
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
                                className="dataTables_paginate paging_simple"
                                id="investbox_packs_list_paginate"
                              >
                                <Button
                                  className="paginate_button previous disabled"
                                  aria-controls="investbox_packs_list"
                                  data-dt-idx="0"
                                  tabIndex="0"
                                  id="investbox_packs_list_previous"
                                >
                                  Назад
                                </Button>
                                <Button
                                  className="paginate_button next disabled"
                                  aria-controls="investbox_packs_list"
                                  data-dt-idx="1"
                                  tabIndex="0"
                                  id="investbox_packs_list_next"
                                >
                                  Далее
                                </Button>
                              </div>
                              <div className="clear"></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="clear"></div>
                <div className="create_new"></div>
                <div className="clear"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Myinvest
