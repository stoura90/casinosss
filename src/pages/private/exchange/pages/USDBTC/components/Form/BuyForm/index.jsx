/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import formatCurrency from 'format-currency'
import { Button, Input } from 'reactstrap'
import OrderBook from '../../orderBook/OrderBook'
import Balance from '../../Balance/Balance'

const BuyFormComponent = ({ priceBuy }) => {
  const optsBTC = { format: '%v %c', code: 'BTC', maxFraction: 4 }
  const [priceValue, setPriceValue] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const estimatedAmount = totalValue * priceValue
  const fee = estimatedAmount * (0.2 / 100)

  // set default prive value
  // when component mounted with useEffect hooks
  useEffect(() => {
    setPriceValue(priceBuy)
  }, [priceBuy])
  const [totalBalanse, setTotalBalanse] = useState('Anil')
  return (
    <div className="col_1">
      <div className="buy_box fild_box">
        <div className="inset clBuyForm">
          <input type="hidden" name="order_type" value="1" />
          <input type="hidden" name="fee_type" value="1" />
          <div className="meta">
            <div className="all_title title">ПОКУПКА</div>
            <div className="sm" id="label_bestbuy">
              1.00000000
            </div>
          </div>
          <Balance />
          <div className="line">
            <span className="span">Количество:</span>
            <div className="poles">
              <Input
                name="amount"
                type="text"
                placeholder=""
                min={0}
                onChange={(event) => {
                  setTotalValue(event.target.value)
                  setTotalBalanse(event.target.value)
                }}
                value={totalValue}
              />
              <span className="currency">BTC</span>
            </div>
          </div>
          <div className="line">
            <span className="span">Цена:</span>
            <div className="poles">
              <Input
                name="price"
                maxLength="25"
                type="text"
                onChange={(event) => {
                  setPriceValue(event.target.value)
                }}
                value={priceValue}
                aria-valuemax={totalBalanse}
              />
              <span className="currency">USD</span>
            </div>
          </div>
          <div className="line">
            <span className="span">Всего:</span>
            <div className="poles">
              <Input
                name="total"
                maxLength="25"
                type="text"
                min={0}
                onChange={(event) => {
                  setTotalValue(event.target.value)
                  setTotalBalanse(event.target.value)
                }}
                value={totalValue}
                aria-valuemax={totalBalanse}
              />
              <span className="currency">BTC</span>
            </div>
          </div>
          <div className="line">
            <span className="span">Ком (0.2%):</span>
            <div className="poles">
              <Input name="fee" maxLength="25" type="text" value={fee} disabled="">
                {formatCurrency(fee, optsBTC)}
              </Input>
              <span className="currency">USD</span>
            </div>
          </div>
          <div className="line">
            <span className="span">Всего+Ком:</span>
            <div className="poles">
              <Input
                name="totalfee"
                maxLength="25"
                type="text"
                value={estimatedAmount + fee}
                disabled=""
              >
                {formatCurrency(estimatedAmount + fee, optsBTC)}
              </Input>
              <span className="currency">USD</span>
            </div>
          </div>
          <div className="line" flow="horizontal">
            <div float="left" width="98px">
              <Button type="button" className="clCreateOrder" origin="Купить">
                Купить
              </Button>
            </div>
          </div>
        </div>
        <OrderBook />
      </div>
    </div>
  )
}

export default BuyFormComponent
