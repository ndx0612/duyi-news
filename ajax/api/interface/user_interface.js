import ajax from '../../http.js'

// 用户登录
export const user_login = data => ajax({
  name: 'user_login',
  data
})
