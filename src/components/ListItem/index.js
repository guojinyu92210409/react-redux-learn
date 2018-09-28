import React from 'react'
import './index.scss'
import BasePage from '../../views/common/basePage'
import { ROUTE_DETAIL } from '../../router/routeName'
import { toast } from '../../components/toast'

class PositionItem extends BasePage {
  constructor(props) {
    super(props)
    this.state = {}
  }
  //点击查看详情
  handleClickLi() {
    toast('正在跳转详情')
    let fundCode = this.props.itemData.fundCode
    let accountBalanceId = this.props.itemData.accountBalanceId
    this.push(ROUTE_DETAIL, {
      fundCode: fundCode,
      accountBalanceId: accountBalanceId
    })
  }
  render() {
    let { itemData } = this.props
    return (
      <li className="positionLi">
        <div onClick={this.handleClickLi.bind(this)}>
          <div className="liTitle">
            <h3 className="ellipsis">{itemData.fundName}</h3>
            <p>
              {itemData.fundStatus == 0 || itemData.fundStatus == 1
                ? '募集中'
                : itemData.fundStatus == 2
                  ? '进行中'
                  : itemData.fundStatus == 3
                    ? '已到期'
                    : '已取消'}
            </p>
          </div>
          <div className="liCon">
            <div className="item">
              <h3>参考市值(元)</h3>
              <h2>{itemData.marketValue}</h2>
            </div>
            <div className="item">
              <h3>持有份额</h3>
              <h2>{itemData.holdShare}</h2>
            </div>
            <div className="item">
              <h3>累计收益(元)</h3>
              <h2>{itemData.accumulatedIncome}</h2>
            </div>
            <h2 className="info ellipsis">支付渠道&nbsp;&nbsp; {itemData.tradeAccount}</h2>
          </div>
        </div>
        {itemData.fundStatus == 0 || itemData.fundStatus == 1 ? (
          <div className="liBottom">
            <p>取消交易</p>
            <p className="right">
              追加购买
            </p>
          </div>
        ) : null}
      </li>
    )
  }
}

export default PositionItem
