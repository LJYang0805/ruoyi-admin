import { userStore } from "../store/user"; 

export const authPermission = (permission) => {
 const all_permission = '*:*:*';
 const store = userStore()
 const permissions = store.permissions
 if (permission && permission.length > 0) {
  return permissions.some((v) => {
   return v===all_permission || v === permission
  })
 } else {
  return false
 }
}

export const authRole = (role) => {
 const super_admin = 'admin'
 const store = userStore()
 const roles = store.roles
if (role && role.length > 0) {
 return roles.some((v) => {
  return v === super_admin || v=== role
 })
} else {
 return false
}
}

 //验证用户是否含有指定权限，只需要包含一个
export function hasPermiOr(permissions) {
  return permissions.some((item) => {
  return authPermission(item)
  })
 }
//验证用户是否含有指定角色，只需包含一个
export function hasRoleOr(roles){
  return roles.some((item) => {
   return authRole(item)
  })
 }
 

//动态路由遍历，验证是否具备权限
export function filterDynamicRoutes(routes) {
 const res = []
 routes.forEach(route => {
  if (route.meta.permissions) {
   if (hasPermiOr(route.meta.permissions)) {
     res.push(route)
   }
  } else if(route.meta.roles){
    if (hasRoleOr(route.meta.roles)) {
      res.push(route)
    }
  }
});
  return res
 }