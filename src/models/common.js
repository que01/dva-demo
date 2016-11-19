export default {
  namespace: 'common',
  state: {
    breadcrumb:[
      {
        name:'首页',
        path:'/dashboard'
      }
    ]
  },
  reducers: {
    changeBreadcrumb(state,{ payload: breadcrumb }) {
      return {...state, ...breadcrumb}
    }
  },
  effects: {},
  subscriptions: {},
}
