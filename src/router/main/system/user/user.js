const user = () => import('@/views/main/system/user/user')
export default {
  path: '/main/system/user',
  name: 'user',
  component: user,
  children: []
}
