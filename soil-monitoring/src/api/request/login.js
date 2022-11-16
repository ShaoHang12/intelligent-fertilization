import  request  from "..";
// 账号密码登录 POST
export const reqGetLogin=(userInfo)=> {
    return request({
      method: 'POST',
      url: '/api/login',
      data: {
        username: userInfo.username,
        password: userInfo.password,
        rememberMe: userInfo.rememberMe
      }
    })
  }