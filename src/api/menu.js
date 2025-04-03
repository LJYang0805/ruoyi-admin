import requests from '../utils.js/requests'

export const getRouter = () => {
 return requests({
  url: "/getRouters",
  method:'GET'
 })
}