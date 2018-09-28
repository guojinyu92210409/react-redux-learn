import React from 'react'
import BasePage from '../common/basePage'
import { BackTitle } from '../../components/baseTitle'

class Detail extends BasePage{
    /**
     * 获取标题信息
     *
     */
    getTitle() {
        return '详情'
    }
    render(){
        return(
            <div className="p_detail">
                <BackTitle titleName={this.getTitle()}/>
                <h2>这里是详情哦</h2>
            </div>
        )
    }
}

export default Detail