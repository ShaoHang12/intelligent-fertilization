// 简单的 store 模式，代替 Vuex
const store = {
  state: {
    // 当前高亮的元素
    currEl: 1,
    // 用户信息
    userInfo: {
      username: '',
    },
    // 是否已经登录
    isLogin: false
  },
  // 设置高亮元素接口
  setCurrEl(newVal){
    this.state.currEl = newVal
  },
  // 设置登录接口
  setLogin(state){
    this.state.isLogin = state
  },
  // 提交用户信息接口
  setUserInfo(userinfo){
    this.state.userInfo.username = userinfo.username || ""
    // console.log("userInfo: ",this.state.userInfo)
  }
}

export default store


