import React from 'react'
import BasePage from '../common/basePage'
import { BackTitle } from '../../components/baseTitle'
import Footer from '../../components/footer'
import './index.scss'

class Home extends BasePage{
    // 获取标题信息
    getTitle() {
        return '首页'
    }
    render(){
        return (
            <div className="p_home">
                <BackTitle titleName={this.getTitle()} noBack={true}/>
                <Footer />
            </div>
        )
    }
}

export default(Home)