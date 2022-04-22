import React from 'react'
import { Container, Table } from 'reactstrap'

function Balla() {
  return (
    <div className="dataTables_scrollBody jspScrollable" tabIndex="0">
      <Container className="jspContainer">
        <div className="jspPane">
          <Table
            className="big_table big_table_top wallet_table dataTable no-footer"
            id="wallets_table"
          >
            <thead>
              <tr>
                <th
                  width="62.8438px"
                  className="sorting"
                  aria-controls="wallets_table"
                  rowSpan="1"
                  colSpan="1"
                  aria-label="Валюта: activate to sort column ascending"
                >
                  <div className="dataTables_sizing">Валюта</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd">
                <td width="8%" className="first cl">
                  <a href="/ru/history/deposits/BTC">BTC</a>
                </td>
                <td width="17%" className="cl">
                  0.00000000
                </td>
                <td width="15%" className="cl"></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  )
}

export default Balla
