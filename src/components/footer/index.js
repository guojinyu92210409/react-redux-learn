import React from 'react'
import BasePage from '../../views/common/basePage'
import './index.scss'
import { Link } from 'react-router-dom'

class Footer extends BasePage{
    render(){
        return(
            <div className="p_footer">
                <ul>
                    <li>
                        <Link to='/list'>列表</Link>
                    </li>
                    <li>
                        <Link to='/select'>select</Link>
                    </li>
                    <li>other</li>
                </ul>
            </div>
        )
    }
}

export default(Footer)