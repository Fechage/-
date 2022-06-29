import { systemRequest } from '@/service/main/system/system'

export default {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      departmentList: []
    }
  },
  mutations: {
    // 保存用户表格数据
    saveTableDataList: (state, data) => {
      state.userList = data.list
      state.userCount = data.totalCount
    },
    saveRoleList: (state, data) => {
      state.roleList = data.list
    },
    saveDepartmentList: (state, data) => {
      state.departmentList = data.list
    }
  },
  actions: {
    // 用户表格数据请求
    async getTableDataAction({ commit }, payload) {
      const pageUrl = `/${payload.pageName}/list`
      const tableDataList = await systemRequest(
        pageUrl,
        payload.queryInfo,
        'post'
      )
      commit('saveTableDataList', tableDataList.data)
    },
    // 列表数据请求
    async getSystemListAction({ commit }, payload) {
      const { pageName, data } = payload
      const pageUrl = `/${pageName}/list`
      const list = await systemRequest(pageUrl, data, 'post')
      const listName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`save${listName}ListAndCount`, list)
    },
    // 部门和角色列表请求
    async getRoleAndDepartmentListAction({ commit }) {
      const roleList = await systemRequest(
        '/role/list',
        { offset: 0, size: 100 },
        'post'
      )
      const departmentList = await systemRequest(
        '/department/list',
        { offset: 0, size: 100 },
        'post'
      )
      commit('saveRoleList', roleList.data)
      commit('saveDepartmentList', departmentList.data)
    },
    // 新建用户请求
    async newUserAction({ dispatch }, payload) {
      const pageUrl = `/${payload.pageName}`
      await systemRequest(pageUrl, payload.data, 'post')
      // 获取新建后的表格数据
      dispatch('getTableDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 5 }
      })
    },
    // 编辑用户请求
    async editUserAction({ dispatch }, payload) {
      const pageUrl = `/${payload.pageName}/${payload.id}`
      await systemRequest(pageUrl, payload.data, 'patch')
      // 获取新建后的表格数据
      dispatch('getTableDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 5 }
      })
    },
    // 删除用户请求
    async deleteUserAction({ dispatch }, payload) {
      const pageUrl = `/${payload.pageName}/${payload.id}`
      await systemRequest(pageUrl, null, 'delete')
      // 获取新建后的表格数据
      dispatch('getTableDataAction', {
        pageName: payload.pageName,
        queryInfo: { offset: 0, size: 5 }
      })
    }
  }
}
