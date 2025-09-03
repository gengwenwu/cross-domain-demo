// 系统信息
export const SYSTEM_INFO = uni.getSystemInfoSync();

// 域名地址
export const HOST = "https://tiyu.baidu.com";

// 域名地址
export const API_HOST = SYSTEM_INFO.uniPlatform === "web" ? "" : HOST;

// 代理前缀
export const API_PROXY = SYSTEM_INFO.uniPlatform === "web" ? "/h5api" : "";
