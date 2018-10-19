import React from 'react'
import BasePage from '../common/basePage'
import { BackTitle } from '../../components/baseTitle'
import './index.scss'
import Picker from 'better-picker'

class Select extends BasePage{
    constructor(props) {
        super(props)
        this.state = {
            lists: [],
            lists2: [],
            lists3: [],
            lists4: [],
            selectValue:'',
            selectValue2:''
        }
    }
    componentDidMount(){
        this._getList()
        this._getList2()
    }
    _getList(){
        let list=[
            {
                text:'第一个option',
                value:0
            },
            {
                text: '第二个option',
                value: 0
            },
            {
                text: '第三个option',
                value: 0
            },
            {
                text: '第四个option',
                value: 0
            },
            {
                text: '第五个option',
                value: 0
            }
        ]
        this.setState({
            lists: list
        }, () => {
            this._picker()
        })
    }
    _getList2(){
        let list=[
            {
                text:'第一个option',
                value:0
            },
            {
                text: '第二个option',
                value: 0
            },
            {
                text: '第三个option',
                value: 0
            },
            {
                text: '第四个option',
                value: 0
            },
            {
                text: '第五个option',
                value: 0
            }
        ]
        let list2=[
            {
                text: '小美',
                value: 0
            },
            {
                text: '小明',
                value: 0
            }
        ]
        let list3=[
            {
                text: '小美2',
                value: 0
            },
            {
                text: '小明2',
                value: 0
            },
            {
                text: '小明3',
                value: 0
            }
        ]
        this.setState({
            lists2: list,
            lists3: list2,
            lists4: list3
        }, () => {
            this._picker2()
        })
    }
    _picker(){
        let {lists} = this.state
        let nameEl = document.getElementById('name');
        let picker = new Picker({
            data: [lists],
            selectedIndex: [0]
        });

        picker.on('picker.select', (selectedVal, selectedIndex)=>{
            this.setState({
                selectValue:lists[selectedIndex[0]].text
            })
        })

        nameEl.addEventListener('click', function () {
            picker.show();
        });
    }
    _picker2(){
        let {lists2,lists3,lists4} = this.state
        let nameEl2 = document.getElementById('name2');
        let picker = new Picker({
            data: [lists2, lists3, lists4],
            selectedIndex: [0,1,2]
        });

        picker.on('picker.select', (selectedVal, selectedIndex)=>{
            this.setState({
                selectValue2:lists2[selectedIndex[0]].text + ' ' + lists3[selectedIndex[1]].text + ' ' + lists4[selectedIndex[2]].text
            })
        })

        nameEl2.addEventListener('click', function () {
            picker.show();
        });
    }
    // 获取标题信息
    getTitle() {
        return 'select组件'
    }
    render(){
        let {selectValue,selectValue2} = this.state
        return(
            <div className="p_select">
                <BackTitle titleName={this.getTitle()}/>
                <div className="wayBox">
                    <h3>汇款用途</h3>
                    <p id='name'>{selectValue?`用于购买${selectValue}`:`请选择`}</p>
                    <img src={require('./images/more.png')} alt=""/>
                </div>
                <div className="wayBox">
                    <h3>汇款用途2</h3>
                    <p id='name2'>{selectValue2?`用于购买${selectValue2}`:`请选择`}</p>
                    <img src={require('./images/more.png')} alt=""/>
                </div>
            </div>
        )
    }
}

export default(Select)