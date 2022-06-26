import {
  getTableDataRequest
  // createUserRequest
} from '@/service/main/system/system'
export default {
  namespaced: true,
  state: () => {
    return {
      list: [],
      totalCount: 0
    }
  },
  mutations: {
    saveTableDataList: (state, data) => {
      state.list = data.list
      state.totalCount = data.totalCount
    }
  },
  actions: {
    // 请求并保存表单的数据
    async getTableDataAction({ commit }, payload) {
      const pageUrl = `/${payload.pageName}/list`
      const tableDataList = await getTableDataRequest(
        pageUrl,
        payload.queryInfo
      )
      commit('saveTableDataList', tableDataList.data)
    },
    async createUserAction() {}
  }
}
