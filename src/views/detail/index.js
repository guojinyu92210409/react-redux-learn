import React from 'react'
import BasePage from '../common/basePage'
import { BackTitle } from '../../components/baseTitle'
import './index.scss'

class Detail extends BasePage{
    //获取标题信息
    getTitle() {
        return '详情'
    }
    render(){
        return(
            <div className="p_detail">
                <BackTitle titleName={this.getTitle()}/>
                <h2>这里是详情哦</h2>
                <div className="itemBox">
                    <div className="item">
                        <img src={require('./images/list31.png')} alt=""/>
                        <span>Business scale and number of users keep growing steadily.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail