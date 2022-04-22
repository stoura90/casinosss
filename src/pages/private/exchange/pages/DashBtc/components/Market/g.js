import SimpleBar from "simplebar-react";
import React from "react";

<SimpleBar style={{ height: 300, width: '100%' }}>
  <div className="scrolling myord" id="scrollbar5">
    <div className="viewport">
      <div className="overview">
        <table width="100%" className="trade_history_table">
          <tbody id="myord_table">
          <tr>
            <td className="first" colSpan="4">
              Нет открытых ордеров.
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</SimpleBar>
