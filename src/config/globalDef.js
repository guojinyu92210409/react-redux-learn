/*
 * Copyright (c) 2018-present, 网信智投, Inc.
 *
 * @Author: Jone.Lin
 * @Date: 2018-08-28 22:53:44
 * @Last Modified by: Jone.Lin
 * @Last Modified time: 2018-09-13 15:23:44
 * @Note 全局定义
 */

import * as ACTIONS from '../redux/actions'
import cot from 'cookie.js'

global.ACTIONS = ACTIONS

// 设置token
export const setToken = data => {
  try {
    cot.set('token', data)
  } catch (e) {}
}

/**
 * 获取token
 *
 * @returns
 * @memberof BuyPage
 */
export const getToken = () => {
  let token = cot.get('token')
  return token
}

// 是否显示title
export const isShowTitle = () => {
  try {
    let version = cot.get('app-version')
    if (version && version - 0 >= 1.1) {
      return true
    } else {
      return true
    }
  } catch (e) {}
}

// 设置版本
export const setAppVerion = data => {
  try {
    cot.set('app-version', data)
  } catch (e) {}
}

// 改变title
export const changeTitle = title => {
  let browser = {
    versions: (function() {
      var u = navigator.userAgent,
        app = navigator.appVersion
      return {
        //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端 || !!u.match(/AppleWebKit/)
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        safari: u.indexOf('Safari') > -1
      }
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
  if (browser.versions.mobile) {
    window.location.href = `firstp2p://api?type=local&action=changetitle&newtitle=${title}`
  }
}

export const finishPage = () => {
  let browser = {
    versions: (function() {
      var u = navigator.userAgent,
        app = navigator.appVersion
      return {
        //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端 || !!u.match(/AppleWebKit/)
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        safari: u.indexOf('Safari') > -1
      }
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
  try {
    if (browser.versions.android) {
      let doc = window.document
      let ifr = doc.createElement('iframe')
      //创建一个隐藏的iframe
      ifr.src = 'firstp2p://api?type=closeallpage'
      ifr.style.cssText = 'display:none;border:0;width:0;height:0;'
      doc.body.appendChild(ifr)
      setTimeout(function() {
        doc.body.removeChild(ifr)
      }, 1000)
    } else if (
      browser.versions.ios ||
      browser.versions.iPhone ||
      browser.versions.iPad ||
      browser.versions.safari
    ) {
      window.location.href = 'firstp2p://api?type=closeallpage'
    } else {
    }
  } catch (e) {}
}

// 是否iphone x
export const isIphoneX = () => {
  let browser = {
    versions: (function() {
      var u = navigator.userAgent,
        app = navigator.appVersion
      return {
        //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端 || !!u.match(/AppleWebKit/)
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        safari: u.indexOf('Safari') > -1
      }
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
  let flag = false
  if (browser.versions.ios && window.screen.height == 812) {
    flag = true
  }
  return flag
}

// 是否iphone
export const isIphone = () => {
  let browser = {
    versions: (function() {
      var u = navigator.userAgent,
        app = navigator.appVersion
      return {
        //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端 || !!u.match(/AppleWebKit/)
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        safari: u.indexOf('Safari') > -1
      }
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
  let flag = false
  if (browser.versions.ios) {
    flag = true
  }
  return flag
}

/**
 * 检查数据是否为空
 *
 * @param {*} item
 * @param {*} [=null] 默认值
 * @returns 返回数据或null、默认数据
 */
export const checkItemNull = (item, value = null) => {
  return item ? item : value
}
