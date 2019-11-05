import request from '@/utils/request'

export function getAllMenus (params, data) {
  return request({
    url: '/authority/get_all_menus',
    method: 'post',
    params,
    data
  })
}
