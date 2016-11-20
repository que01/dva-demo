import { GET } from '../utils/query'
import { rapFlag, onlinePath } from '../config/config';
const API = 'member/list'
export default {
  namespace: 'test',
  state: {
    list:{
      data:[],
      loading:true,
    },
    pagination:{
      current:1,
      pageSize:10,
      total:null
    }
  },
  reducers: {
    fetchList(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *fetchRemote({ payload }, { call, put }) {
      let {current,pageSize} = payload;
      let { data } = yield call(GET,API,{
        pageNum:current,
        pageSize:pageSize,
      });
      if (data) {
        yield put({
          type: 'fetchList',
          payload: {
            list: {
              data:data.results,
              loading:false
            },
            pagination: data.info
          }
        });
      }
    },
  },
  subscriptions: {},
}
