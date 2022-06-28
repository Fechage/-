import zgRequest from '../../request'

// export function getTableDataRequest(pageUrl, queryInfo) {
//   return zgRequest.post({
//     url: pageUrl,
//     data: queryInfo
//   })
// }
// export function get(pageUrl, queryInfo) {
//   return zgRequest.post({
//     url: pageUrl,
//     data: queryInfo
//   })
// }

// export function newUserRequest(pageUrl, userInfo) {
//   return zgRequest.post({
//     url: pageUrl,
//     data: userInfo
//   })
// }

export function systemRequest(url, data, method) {
  console.log(url, data, method)
  return zgRequest[method]({ url, data })
}
