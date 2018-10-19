
import { GET_LIST,LOAD_MORE_CLEAR } from './actions'

// 组件状态
const initialState = {
  allList: [],
  raisingList: [],
  ongoingList: [],
  expiredList: [],
  totalPages:0,
  totalRecords:0,
  pageNo:1,
  dataType:0
}
/**
 * 组件reducers
 *
 * @export
 * @param {*} [state=initialState]
 * @param {*} action
 * @returns
 */
export default function Reducers(state= initialState, action) {
  switch (action.type) {
    case GET_LIST: {
       if (action.dataType == 0) {
        return { 
          ...state,
          allList: state.allList.concat(action.data.list),
          totalPages: action.data.totalPages,
          totalRecords: action.data.totalRecords,
          pageNo: action.pageNo,
          dataType: action.dataType
        }
      } else if (action.dataType == 1) {
        return { 
          ...state, 
          raisingList: state.raisingList.concat(action.data.list),
          totalPages: action.data.totalPages,
          totalRecords: action.data.totalRecords,
          pageNo: action.pageNo,
          dataType: action.dataType
        }
      } else if (action.dataType == 2) {
        return { 
          ...state, 
          ongoingList: state.ongoingList.concat(action.data.list),
          totalPages: action.data.totalPages,
          totalRecords: action.data.totalRecords,
          pageNo: action.pageNo,
          dataType: action.dataType
         }
      } else {
        return { 
          ...state, 
          expiredList: state.expiredList.concat(action.data.list),
          totalPages: action.data.totalPages,
          totalRecords: action.data.totalRecords,
          pageNo: action.pageNo,
          dataType: action.dataType
         }
      }
    }
    case LOAD_MORE_CLEAR:
      return {
        ...state, 
        allList: [],
        raisingList: [],
        ongoingList: [],
        expiredList: [],
        pageNo: 1
      }
    default:
      return state
  }
}
