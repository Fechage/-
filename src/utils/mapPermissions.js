//  从用户菜单中找出用户权限
export function mapMenu2Permissions(userMenuList) {
  const permissions = []
  const recurseGetPermission = (userMenuList) => {
    for (const item of userMenuList) {
      if (item.type === 1 || item.type === 2) {
        recurseGetPermission(item.children ?? [])
      } else if (item.type === 3) {
        permissions.push(item.permission)
      }
    }
  }
  recurseGetPermission(userMenuList)
  return permissions
}
