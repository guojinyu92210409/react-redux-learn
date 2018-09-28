/*
 * Copyright (c) 2018-present, 网信智投, Inc.
 *
 * @Author: Jone.Lin
 * @Date: 2018-08-28 18:13:10
 * @Last Modified by: Jone.Lin
 * @Last Modified time: 2018-09-18 18:12:49
 * @Note 基础页面组件
 */
import React, { Component } from 'react'
import {
  setToken,
  setAppVerion,
  changeTitle,
  isShowTitle
} from '../../config/globalDef'
import { toast } from '../../components/toast'
import { parse } from '../../utils/queryString'
import cot from 'cookie.js'

/**
 * 基础页面组件
 *
 * @export
 * @class BasePage
 * @extends {Component}
 */
export default class BasePage extends Component {
  constructor(props: any) {
    super(props)

    // 设置title
    document
      .getElementsByTagName('head')[0]
      .getElementsByTagName('title')[0].innerText = this.getTitle()
    // 设置默认背景色
    this.setBackGroundColor('#fff')

    let token = this.getQueryUrlParam('token')

    // 设置token
    if (token) {
      setToken(token)
    }

    //  设置版本
    let version = this.getQueryUrlParam('version')
    if (version) {
      setAppVerion(version)
    }

    // 判断是否显示标题
    if (!isShowTitle()) {
      changeTitle(this.getTitle())
    }
  }

  /**
   * 设置背景颜色
   *
   * @param {*} color
   * @memberof BaseComponent
   */
  setBackGroundColor(color) {
    document.body.style.backgroundColor = color
    document.getElementsByTagName('html')[0].style.backgroundColor = color
  }

  /**
   * 获取标题信息
   *
   */
  getTitle() {
    return ''
  }

  /**
   * 第一次渲染结束
   *
   */
  componentDidMount() {
    this.getData()
  }

  /**
   * 获取后端数据
   *
   */
  getData() {}

  /**
   * push路由
   *
   * @param {*} pathname 路由名称
   * @param {*} search 参数 在路由地址上的参数，在返回的时候不会清除
   * @param {*} params 参数 路由跳转地址 返回无效参数
   * @memberof BasePage
   */
  push(pathname, search,params) {
    console.log(search)

    if (!this.props.history) {
      toast('当前页面没有history,请检查')
      return
    }

    this.props.history.push({
      pathname: pathname,
      params: params,
      search: this.paramsToGet(search)
    })
  }




  /**
   * 路由替换
   *
   * @param {*} pathname 路由名称
   * @param {*} params 路由参数
   * @memberof BasePage
   */
  replace(pathname, params) {
    if (!this.props.history) {
      toast('当前页面没有history,请检查')
      return
    }

    this.props.history.replace({
      pathname: pathname,
      // params: params,
      search: this.paramsToGet(params)
    })
  }

  /**
   * 回退
   *
   * @memberof BasePage
   */
  goBack() {
    if (!this.props.history) {
      toast('当前页面没有history,请检查')
      return
    }

    this.props.history.goBack()
  }

  /**
   * 跳转
   *
   * @param {*} index 路由层数
   * @memberof BasePage
   */
  go(index) {
    if (!this.props.history) {
      toast('当前页面没有history,请检查')
      return
    }

    this.props.history.go(index)
  }

  /**
   * 获取路由参数
   *
   * @param {*} key key值
   * @param {*} [defaultValue=null] 默认值
   * @returns
   * @memberof BasePage
   */
  getParam(key, defaultValue = null) {
    if (!this.props.location) {
      toast('当前页面没有location,请检查')
      return defaultValue
    }

    let value = null
    // 优先查找params
    if (this.props.location.params) {
      value = this.props.location.params[key]
    }

    // 查找search
    if (!value) {
      value = this.getQueryUrlParam(key)
    }

    if (value == 'false') {
      value = false
    } else if (value == 'true') {
      value = true
    }

    // 如果为空则设置默认值
    if (value == null || value == undefined) {
      return defaultValue
    }
    return value
  }

  /**
   * 获取url Query参数
   *
   * @param {*} key  参数key
   * @returns
   * @memberof BasePage
   */
  getQueryUrlParam(key) {
    if (!this.props.location) {
      toast('当前页面没有location,请检查')
      return null
    }
    const data = parse(this.props.location.search)
    if (data) {
      return data[key]
    }

    return null
  }

  /**
   * 参数转换Get
   *
   * @param {*} params
   * @returns
   */
  paramsToGet(params) {
    let param = null
    for (let key in params) {
      if (!param) {
        param = key + '=' + params[key]
      } else {
        param = param + '&' + key + '=' + params[key]
      }
    }

    if (param) {
      param = '?' + param
    }

    return param
  }
}
