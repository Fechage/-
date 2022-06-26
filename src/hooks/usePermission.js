import { useStore } from 'vuex'

export function usePermission(pageName, permission) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verify = permissions.find(
    (item) => item === `system:${pageName}:${permission}`
  )
  return !!verify
}
