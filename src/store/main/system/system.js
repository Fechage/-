import { getTableDataRequest } from '@/service/main/system/system'
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
      const tableDataList = await getTableDataRequest(payload)
      commit('saveTableDataList', tableDataList.data)
    }
  }
}
