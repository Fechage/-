import zgRequest from '../../request'

export function getTableDataRequest(config) {
  return zgRequest.post({
    url: config.pageUrl,
    data: config.queryInfo
  })
}
