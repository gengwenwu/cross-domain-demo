import { API_HOST, API_PROXY } from "@/config.js";

// 组装接口url
export const packApiUrl = (url) => {
  if (url.slice(0, 4) === "http" || url.slice(0, 5) === "https") {
    // http 或 https 开头的直接返回
    return url;
  } else {
    // 相对路径，添加代理前缀
    return API_HOST + API_PROXY + url;
  }
};
