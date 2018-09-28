// import { UserAssetApi,checkResult } from '../../api/api'
import { showload } from '../../components/toast'

//  模板action类型定义
export const GET_LIST = 'GET_LIST'
export const LOAD_MORE_CLEAR = 'LOAD_MORE_CLEAR' //清除数据

export const getDatas = async (type, pageNo, pageSize) => {
  // showload(true)
  // let result = await UserAssetApi(
  //   type,
  //   pageNo,
  //   pageSize
  // )
  // showload(false)
  // if (checkResult(result)){
  //   return {
  //     type: GET_LIST,
  //     data: result.data,
  //     dataType:Number(type),
  //     pageNo: pageNo
  //   }
  // }
  showload(true)
  let list=[]
  if (type==0){
    list=[
      {
        accountBalanceId: 1368,
        accumulatedIncome: "0.00",
        fundCode: "XF0008",
        fundName: "先锋稳健领航1号资产",
        fundStatus: "4",
        holdShare: "0.00",
        marketValue: "0.00",
        netValue: "1",
        tradeAccount: "先锋支付-招商银行****5346"
      }, {
        accountBalanceId: 1368,
        accumulatedIncome: "0.00",
        fundCode: "SM6602",
        fundName: "网信私募二",
        fundStatus: "1",
        holdShare: "0.00",
        marketValue: "0.00",
        netValue: "1",
        tradeAccount: "先锋支付-招商银行****5346"
      }, {
        accountBalanceId: 1368,
        accumulatedIncome: "0.00",
        fundCode: "SM6601",
        fundName: "网信私募一",
        fundStatus: "1",
        holdShare: "0.00",
        marketValue: "0.00",
        netValue: "1",
        tradeAccount: "先锋支付-招商银行****5346"
      }
    ]
  }else if(type==1){
    list=[
      {
        accountBalanceId: 1368,
        accumulatedIncome: "0.00",
        fundCode: "XF0008",
        fundName: "先锋稳健领航1号资产",
        fundStatus: "4",
        holdShare: "0.00",
        marketValue: "0.00",
        netValue: "1",
        tradeAccount: "先锋支付-招商银行****5346"
      }, {
        accountBalanceId: 1368,
        accumulatedIncome: "0.00",
        fundCode: "SM6602",
        fundName: "网信私募二",
        fundStatus: "1",
        holdShare: "0.00",
        marketValue: "0.00",
        netValue: "1",
        tradeAccount: "先锋支付-招商银行****5346"
      }
    ]
  } else if (type == 3) {
    list = [{
      accountBalanceId: 1368,
      accumulatedIncome: "0.00",
      fundCode: "XF0008",
      fundName: "先锋稳健领航1号资产",
      fundStatus: "4",
      holdShare: "0.00",
      marketValue: "0.00",
      netValue: "1",
      tradeAccount: "先锋支付-招商银行****5346"
    }]
  }
  let data={
    totalPages: 2,
    totalRecords: "5",
    list:list
  }
  setTimeout(function(){
    showload(false)
  },500)
  return{
    type: GET_LIST,
    data: data,
    dataType:Number(type),
    pageNo: pageNo
  }
}
export const loadMoreClear = () => {
  return {
    type: LOAD_MORE_CLEAR
  }
}