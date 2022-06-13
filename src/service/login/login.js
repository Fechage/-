import zgRequest from '@/service/request'

export function accountLoginRequest(account) {
  return zgRequest.post({
    url: '/login',
    data: account
  })
}

export function requestUserInfoById(id) {
  return zgRequest.get({
    url: `/users/${id}`
  })
}

export function requestUserMenuList(id) {
  return zgRequest.get({
    url: `/role/${id}/menu`
  })
}
