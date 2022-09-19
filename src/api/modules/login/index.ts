import http from '../../index'

// 登录
export const userLogin = data =>
  http.post({
    url: '/ygt-user/user/login',
    data,
  })

// 获取token
export const getToken = data =>
  http.post({
    url: '/ygt-api/general/getToken',
    data,
  })

// 获取菜单权限
// export const getLoginMenus = (params) =>
//   http.get({
//     url: `/ygt-user/role/getLoginMenus`,
//     params,
//   })

export const getLoginMenuById = params =>
  http.get({
    url: '/ygt-user/tbMhLoginMenu/getLoginMenuById',
    params,
  })
// 获取组织角色下拉(登录界面)
// ?loginname=
// GET
// loginname：登录名
export const getLoginOrgRoles = params =>
  http.get({
    url: '/ygt-user/role3/getLoginOrgRoles',
    params,
  })
// 获取登录菜单

export const getLoginMenus = data =>
  http.post({
    url: '/ygt-user/role3/getLoginMenus',
    data,
  })
// POST
// {
// 	appIds：[]应用id
// 	userRoleRefId：用户绑定角色id(登录时选择的)
// }
