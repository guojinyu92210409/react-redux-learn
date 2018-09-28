/*
 * Copyright (c) 2018-present, 网信智投, Inc.
 *
 * @Author: CHuanhui.Hu
 * @Date: 2018-09-04 14:03:52
 * @Last Modified by: CHuanhui.Hu
 * @Last Modified time: 2018-09-04 15:59:26
 * @Note 交易记录组件
 */

import React, { Component } from 'react'
import './index.scss'
import { ROUTE_DETAIL } from '../../router/routeName'
import ListItem from '../../components/ListItem'

export default class ScrollContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.data || [],
      totalRecords: props.totalRecords,
      type: props.type,
      totalPages: props.totalPages
    }
  }

  componentDidMount() {}

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.setState({
        list: newProps.data,
        totalRecords: newProps.totalRecords,
        type: newProps.type,
        totalPages: newProps.totalPages
      })
    }
  }
  //遍历列表
  _showList(list) {
    let listDom = []
    list.map((item,i) => {
      listDom.push(<ListItem itemData={item} key={i} {...this.props}/>)})
    return listDom
  }
  //点击加载更多
  handleMore=()=>{
    if (this.props.handleMore){
      this.props.handleMore(this.state.type)
    }
  }
  /**
   * 组件渲染
   *
   */
  render() {
    let { list,totalRecords,totalPages } = this.state
    return (
      <div className="list">
        <div className="empty-54" />
        {
          list.length>0
          ? <ul className="listCon">{this._showList(list)}</ul>
          :<div className="noList">
              <img src={require('./images/noList.png')} alt=""/>
              <h3>这里空空如也</h3>
          </div>
        }
        {
          totalPages > 1
          ?list.length < totalRecords
          ?<div className="more-txt" onClick={this.handleMore}>
            <span>点击加载更多</span>
            <img src={require(`../../asset/arrow-right-90.png`)} alt="" />
          </div>
          :<div className="more-txt">
            <span>没有更多了</span>
          </div>
          :null
        }
      </div>
    )
  }
}
