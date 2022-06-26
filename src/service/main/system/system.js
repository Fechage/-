import zgRequest from '../../request'

export function getTableDataRequest(pageUrl, queryInfo) {
  return zgRequest.post({
    url: pageUrl,
    data: queryInfo
  })
}
export function createUserRequest(pageUrl, userInfo) {
  return zgRequest.post({
    url: pageUrl,
    data: userInfo
  })
}
