import router from '@/router'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuList
} from '@/service/login/login'
import useCache from '@/utils/cache'
import { mapMenu2Router } from '@/utils/mapRoutes'

const login = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenuList: {}
    }
  },
  getters: {},
  mutations: {
    saveToken(state, token) {
      state.token = token
    },
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    saveUserMenuList(state, userMenuList) {
      state.userMenuList = userMenuList

      // 注册动态路由
      const routes = mapMenu2Router(userMenuList)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    // 登陆验证, 获取用户id, token, 用户信息, 用户权限菜单
    async accountLoginAction({ commit }, payload) {
      // 向服务器发送登陆验证,获取{id,token}
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      // 保存token
      commit('saveToken', token)
      useCache.setCache('token', token)

      // 用id向服务器请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('saveUserInfo', userInfo)
      useCache.setCache('userInfo', userInfo)

      // 向服务器请求用户菜单
      const userMenuListResult = await requestUserMenuList(userInfo.role.id)
      const userMenuList = userMenuListResult.data
      commit('saveUserMenuList', userMenuList)
      useCache.setCache('userMenuList', userMenuList)

      // 登陆成功,切换到首页
      router.push('/main')
    },

    //刷新页面重新获取登陆状态
    loadLoginStatus({ commit }) {
      const token = useCache.getCache('token')
      const userInfo = useCache.getCache('userInfo')
      const userMenuList = useCache.getCache('userMenuList')
      if (token) {
        commit('saveToken', token)
      }
      if (userInfo) {
        commit('saveUserInfo', userInfo)
      }
      if (userMenuList) {
        commit('saveUserMenuList', userMenuList)
      }
    }
  }
}
export default login
