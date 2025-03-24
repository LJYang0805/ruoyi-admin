export const setToken = (token) => {
 return sessionStorage.setItem('TOKEN',token)
}

export const getToken = () => {
return  sessionStorage.getItem('TOKEN')
}

export const removeToken = () => {
return  sessionStorage.removeItem('TOKEN')
}