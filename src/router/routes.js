import React from 'react'
import {
    HashRouter,
    Route,
    BrowserRouter,
    Switch,
    Router
} from 'react-router-dom'
import { history } from '../redux/configureStore'
import {
    ROUTE_INDEX,
    ROUTE_HOME,
    ROUTE_LIST,
    ROUTE_DETAIL,
    ROUTE_SELECT
} from './routeName'
import Loadable from 'react-loadable'

/**
 * 加载时显示组件
 *
 * @param {*} { isLoading, error }
 * @returns
 */
const LoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  } else {
    return null
  }
}

/**
 * 异步按需加载
 *
 * @param {*} routeComponet 路由组件
 * @returns
 */
const LoadAsyncRoute = (routeName, routeComponet, exact = true) => {
  let route = Loadable({
    loader: () => routeComponet,
    loading: LoadingComponent
  })

  return { name: routeName, component: route, exact: exact }
}

const routes=[
    LoadAsyncRoute(ROUTE_INDEX, import('../views/home')),
    LoadAsyncRoute(ROUTE_HOME,import('../views/home')),
    LoadAsyncRoute(ROUTE_LIST, import('../views/list')),
    LoadAsyncRoute(ROUTE_DETAIL,import('../views/detail')),
    LoadAsyncRoute(ROUTE_SELECT, import('../views/select'))
]

const Routes=()=>{
    return (
        <Router history={history}>
            <Switch>
                {routes.map((route, index) => {
                    return (
                    <Route
                        key={route.name}
                        path={route.name}
                        component={route.component}
                        exact={route.exact}
                    />
                    )
                })}
            </Switch>
        </Router>
    )
}

export default Routes