import request from "..";
// 注册
export const reqRegister = (userInfo) => {
  return request({
    method: "POST",
    url: "/api/registerUsers",
    data: {
      username: userInfo.username,
      password: userInfo.password,
      id_card: userInfo.ID,
      peasantName: userInfo.peasantName,
    },
    interceptors: {
      responseInterceptors(data) {
        if (data.code === 201) {
          message("success", data.msg);
        } else {
          message("error", data.msg);
        }
        return data;
      },
    },
  });
};

// 检查用户名是否重复
export const reqCheckUsernameRepeat = (username) => {
  return request({
    method: "POST",
    url: "/api/checkRepeatUsername",
    showLoading: false,
    data: {
      username,
    },
  });
};

// 检查身份证号是否重复
export const reqCheckIDCard = (ID) => {
  return request({
    method: "POST",
    url: "/api/checkRepeatId_card",
    showLoading: false,
    data: {
      id_card: ID,
    },
  });
};
