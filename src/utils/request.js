import { packApiUrl } from "@/utils/common.js";

/**
 * 网络请求基类
 **/
export function request(config = {}) {
  // 解构参数
  let {
    url,
    method = "GET",
    // 严谨一些设置空对象 {}
    header = {},
    data = {},
  } = config;

  url = packApiUrl(url);

  return new Promise((resolve, reject) => {
    uni.request({
      url,
      data,
      method,
      header,
      // 通信成功
      success: (res) => {
        if (res.data.status == 0) {
          // 正确
          resolve(res.data.data);
        } else {
          // 其它错误
          uni.showToast({
            title: res.data.message,
            icon: "none",
          });
          reject(res.data.data);
        }
      },
      // 通信异常
      fail: (err) => {
        reject(res.err);
      },
    });
  });
}
