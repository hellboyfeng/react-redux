import React from 'react' // 引入react
import { Route, IndexRoute } from 'react-router' // 引入react路由
import { App, Home,Bar} from './../components' // 引入各容器组件

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="index" component={Home}/>
        <Route path="bar" component={Bar}/>
    </Route>
)
