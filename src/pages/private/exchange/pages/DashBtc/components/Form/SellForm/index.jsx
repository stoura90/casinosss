/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import formatCurrency from 'format-currency'
import { Button, Input } from 'reactstrap'
import OrderBooc from '../../orderBook/OrderBooc'
import BalanceSell from '../../Balance/BalanceSell'

const SellFormComponent = ({ priceSell }) => {
  const optsIDR = { format: '%v %c', code: 'IDR' }
  const [priceValue, setPriceValue] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const total = totalValue * priceValue
  const fee = total * (0.2 / 100)
  const netAmount = totalValue * priceValue - fee

  // set default prive value
  // when component mounted with useEffect hooks
  useEffect(() => {
    setPriceValue(priceSell)
  }, [priceSell])

  return (
    <div className="col_2">
      <div className="sell_box fild_box">
        <div className="inset clSellForm">
          <input type="hidden" name="order_type" value="2" />
          <input type="hidden" name="fee_type" value="2" />
          <div className="meta">
            <div className="all_title title">ПРОДАЖА</div>
            <div className="sm" id="label_bestsell">
              0.07644793
            </div>
          </div>
          <BalanceSell />
          <div className="line">
            <span>Количество:</span>
            <div className="poles">
              <Input
                name="amount"
                maxLength="25"
                type="text"
                min={0}
                onChange={(event) => {
                  setTotalValue(event.target.value)
                }}
                value={totalValue}
              />
              <span className="currency">DASH</span>
            </div>
          </div>
          <div className="line">
            <span>Цена:</span>
            <div className="poles">
              <Input
                name="price"
                maxLength="25"
                type="text"
                onChange={(event) => {
                  setPriceValue(event.target.value)
                }}
                value={priceValue}
              />
              <span className="currency">BTC</span>
            </div>
          </div>
          <div className="line">
            <span>Всего:</span>
            <div className="poles">
              <Input
                name="total"
                maxLength="25"
                type="text"
                min={0}
                onChange={(event) => {
                  setTotalValue(event.target.value)
                }}
                value={totalValue}
              />
              <span className="currency">BTC</span>
            </div>
          </div>
          <div className="line">
            <span>Ком (0.2%):</span>
            <div className="poles">
              <Input name="fee" maxLength="25" type="text" value={fee} disabled="">
                {formatCurrency(fee, optsIDR)}
              </Input>
              <span className="currency">BTC</span>
            </div>
          </div>
          <div className="line">
            <span>Всего-Ком:</span>
            <div className="poles">
              <Input name="totalfee" maxLength="25" type="text" value={netAmount} disabled="">
                {formatCurrency(netAmount, optsIDR)}
              </Input>
              <span className="currency">BTC</span>
            </div>
          </div>
          <div className="line" flow="horizontal">
            <div float="left" width="98px">
              <Button type="button" className="clCreateOrder" origin="Продать" value="Продать">
                Продать
              </Button>
            </div>
          </div>
        </div>
        <OrderBooc />
      </div>
    </div>
  )
}

export default SellFormComponent
