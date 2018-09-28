import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BasePage from '../common/basePage'
import { BackTitle } from '../../components/baseTitle'
import { Tabs, DefaultTabBar } from 'rmc-tabs'
import './index.scss'
import ScrollContent from './scrollContent'
import { getDatas, loadMoreClear } from './actions'
import './rmc-tabs.css'


class Home extends BasePage{
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }
    /**
     * 获取标题信息
     *
     */
    getTitle() {
        return '首页'
    }
    //组件dom渲染前
    componentWillMount() {
        this.props.loadMoreClear()
        this._getDatas(0, 1)
    }
    _getDatas(type, pageNo) {
        let pageSize = 20
        this.props.getDatas(type, pageNo, pageSize)
    }
    //点击加载更多
    handleMore = type => {
        let pageNo = this.props.data.pageNo + 1
        this._getDatas(type, pageNo)
    }
    /**
     *
     *生成4个子Tab数组
    * @memberof TransactionRecord
    */
    renderContent = () => {
        let {
        allList,
        raisingList,
        ongoingList,
        expiredList,
        totalRecords,
        totalPages
        } = this.props.data
        return [
        <ScrollContent
            {...this.props}
            key="t1"
            data={allList}
            totalRecords={totalRecords}
            totalPages={totalPages}
            handleMore={this.handleMore}
            type="0"
            style={{ overflow: 'hidden' }}
        />,
        <ScrollContent
            {...this.props}
            key="t2"
            data={raisingList}
            totalRecords={totalRecords}
            totalPages={totalPages}
            handleMore={this.handleMore}
            type="1"
            style={{ overflow: 'hidden' }}
        />,
        <ScrollContent
            {...this.props}
            key="t3"
            data={ongoingList}
            totalRecords={totalRecords}
            totalPages={totalPages}
            handleMore={this.handleMore}
            type="2"
            style={{ overflow: 'hidden' }}
        />,
        <ScrollContent
            {...this.props}
            key="t4"
            data={expiredList}
            totalRecords={totalRecords}
            totalPages={totalPages}
            handleMore={this.handleMore}
            type="3"
            style={{ overflow: 'hidden' }}
        />
        ]
    }
    render(){
        let { data } = this.props
        return(
            <div className={
                (data.dataType == 0 && data.allList.length == 0) ||
                (data.dataType == 1 && data.raisingList.length == 0) ||
                (data.dataType == 2 && data.ongoingList.length == 0) ||
                (data.dataType == 3 && data.expiredList.length == 0)
                    ? 'p_home noList'
                    : 'p_home'
                }>
                <BackTitle titleName={this.getTitle()}/>
                <Tabs
                tabs={[
                    { key: 't1', title: '全部' },
                    { key: 't2', title: '募集中' },
                    { key: 't3', title: '进行中' },
                    { key: 't4', title: '已到期' }
                ]}
                initialPage={'t1'}
                onTabClick={(tab, index) => {
                    if (this.state.activeIndex!=index){
                        this.setState({
                            activeIndex: index
                        })
                        this.props.loadMoreClear()
                        this._getDatas(index, 1)
                    }
                }}
                swipeable={false}
                tabBarActiveTextColor={'#1C82DE'}
                tabBarInactiveTextColor={'#393939'}
                tabBarUnderlineStyle={{ color: '#1C82DE' }}
                tabBarTextStyle={{
                    fontWeight: 'normal',
                    fontSize: '14px',
                    lineHeight: '24px'
                }}
                renderTabBar={props => {
                    return (
                    <div style={{ borderBottom: '1px solid #E6E6E6' }}>
                        <DefaultTabBar {...props} />
                    </div>
                    )
                }}
                destroyInactiveTab={true}>
                {this.renderContent()}
                </Tabs>
            </div>
        )
    }
}

// 设置与当前组件相关的状态树
const mapStateToProps = state => ({
    data: state.homeRedux
})

// 设置与当前组件相关的action
const mapDispatchToProps = dispatch => ({
    getDatas: bindActionCreators(getDatas, dispatch),
    loadMoreClear: bindActionCreators(loadMoreClear, dispatch)
})

// 导出redux增强型组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

