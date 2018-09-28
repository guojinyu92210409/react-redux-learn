/*
 * Copyright (c) 2018-present, 网信智投, Inc.
 *
 * @Author: Jone.Lin
 * @Date: 2018-08-29 23:06:50
 * @Last Modified by: Jone.Lin
 * @Last Modified time: 2018-09-14 17:37:01
 * @Note TitleBar
 */

import React, { Component } from 'react'
import './baseTitle.scss'
import { history } from '../redux/configureStore'
import {
  finishPage,
  isIphone,
  isIphoneX,
  isShowTitle
} from '../config/globalDef'

/**
 * 带回退建title
 *
 * @export
 * @class BackTitle
 * @prop back 回退回调
 * @prop titleName 标题
 * @prop rightTitle 右侧标题
 * @prop rightBack 右侧点击回调
 * @extends {Component}
 */
export class BackTitle extends Component {
  render() {
    if (!isShowTitle()) {
      return <div />
    }

    return (
      <div>
        <div
          className={`title postion ${getPostionClassName()} ${getClassName(
            this.props
          )}`}>
          <div
            className={`back ${getBackClassName()}`}
            onClick={() => {
              if (this.props.back) {
                this.props.back()
              } else {
                if (this.props.from && this.props.from == 'wx') {
                  finishPage()
                } else {
                  history.goBack()
                }
              }
            }}>
            {/* <img src={this.props.isPosition?require(`../asset/title-back-white.png`):require(`../asset/title-back.png`)}/> */}
            <span className={this.props.isPosition?"back-icon white":"back-icon"}></span>
            <span>返回</span>
          </div>
          <div
            className={
              this.props.rightTitle ? 'titleName-hasRight' : 'titleName'
            }>
            {this.props.titleName || '---'}
          </div>
          {this.props.rightTitle && (
            <span
              className={`rightTitle ${getRightClassName()}`}
              onClick={this.props.rightBack}>
              {this.props.rightTitle}
            </span>
          )}
        </div>
        <div className={`${getBlockClassName(this.props)}`} />
        {
          !this.props.isPosition
          ?<div className={`${getTitleClassName()}`} />
          :null
        }
      </div>
    )
  }
}


const getPostionClassName = () => {
  return isIphoneX() ? 'iosx-title' : isIphone() ? 'ios-title' : ''
}

const getClassName = props => {
  return props.className ? props.className : ''
}

const getBlockClassName = props => {
  return isIphoneX()
    ? 'baseiosx-block'
    : isIphone()
      ? 'baseios-block'
      : props.isPosition
      ? 'base-block positionTitle'
      :'base-block'
}

const getBackClassName = () => {
  return isIphoneX() ? 'iosx-back' : isIphone() ? 'ios-back' : ''
}
const getRightClassName = () => {
  return isIphoneX() ? 'iosx-right' : isIphone() ? 'ios-right' : ''
}
const getTitleClassName = () => {
  return isIphoneX()
    ? 'titleiosx-line'
    : isIphone()
      ? 'titleios-line'
      : 'title-line'
}

const getMarginClassName = () => {
  return isIphoneX() ? 'marginx-top' : isIphone() ? 'margin-top' : ''
}
