/*
 * Copyright (c) 2018-present, 网信智投, Inc.
 *
 * @Author: Jone.Lin
 * @Date: 2018-08-28 18:26:18
 * @Last Modified by: Jone.Lin
 * @Last Modified time: 2018-09-20 14:55:53
 * @Note redux store
 */

import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'
import {
  routerMiddleware
} from 'react-router-redux'
// 引入thunk 中间件，处理异步操作
import {
  createLogger
} from 'redux-logger'
import ThunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import {
  enableBatching,
  batchDispatchMiddleware
} from 'redux-batched-actions'
import reducers from './reducers'
import createHistory from 'history/createHashHistory'
// import createHistory from 'history/createBrowserHistory'
import {
  _DEV_
} from '../config/config'

export const history = createHistory()

// 日志中间件
const logger = createLogger({
  // predicate, // if specified this function will be called before each action is processed with this middleware.
  // collapsed, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
  duration: true, // print the duration of each action?
  timestamp: true, // print the timestamp with each action?

  level: 'log', // 'log' | 'console' | 'warn' | 'error' | 'info',  console's level
  // colors: ColorsObject, // colors for title, prev state, action and next state: https://github.com/evgenyrodionov/redux-logger/blob/master/src/defaults.js#L12-L18
  // titleFormatter, // Format the title used when logging actions.

  // stateTransformer, // Transform state before print. Eg. convert Immutable object to plain JSON.
  // actionTransformer, // Transform action before print. Eg. convert Immutable object to plain JSON.
  // errorTransformer, // Transform error before print. Eg. convert Immutable object to plain JSON.

  // logger = console: LoggerObject, // implementation of the `console` API.
  logErrors: true, // should the logger catch, log, and re-throw errors?

  diff: true // (alpha) show diff between states?
  // diffPredicate // (alpha) filter function for showing states diff, similar to `predicate`
})

// 生成 router中间件
const routeMiddleware = routerMiddleware(history)

// 中间插件
const middlewares = [
  ThunkMiddleware,
  promiseMiddleware,
  batchDispatchMiddleware,
  routeMiddleware
]

// 开发版本添加日志
if (_DEV_) {
  middlewares.push(logger)
}

// 中间插件
const middleware = applyMiddleware(...middlewares)

/*
 辅助使用chrome浏览器进行redux调试
 */
// 判断当前浏览器是否安装了 REDUX_DEVTOOL 插件
const shouldCompose =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

/*
 如果浏览器安装的 redux 工具，则使用 redux 工具 扩展过的 compose
 compose 是一个 createStore 增强工具，
 他是一个高阶函数，最终会返回新的增强后的 createStore
 */
const composeEnhancers = shouldCompose ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  }) :
  compose

/*
 调用 applyMiddleware ，使用 middleware 来增强 createStore
 */

const store = createStore(enableBatching(reducers), middleware)

// const configureStore = composeEnhancers(middleware)(
//   createStore
// )

/**
 * 派发action
 *
 * @export
 * @param {*} action
 */
export function dispatchAction(action) {
  store.dispatch(action)
}

export default store
