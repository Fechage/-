export function mapMenu2Router(userMenuList) {
  // 找出所有需要路由的组件
  const routes = []
  const allRoutes = []
  const routeFiles = require.context('../router/main', true, /\.js/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 根据用户菜单添加路由表
  const recurseGetRoute = (menus) => {
    // 匹配用户菜单中的二级路由,如果存在则添加进路由表
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        recurseGetRoute(menu.children)
      }
    }
  }
  recurseGetRoute(userMenuList)
  return routes
}
