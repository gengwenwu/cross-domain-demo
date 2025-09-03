## 在 uniapp Vue3 中解决 web/H5 网页跨域问题

[参考文献](https://blog.csdn.net/qq_18798149/article/details/135544336)

项目中，采用通用方案，步骤如下：

1. 配置 `vue.config.js` 文件，添加代理

```
    export default defineConfig({
        plugins: [uni()],
        server: {
            host: "localhost", // 指定服务器应该监听哪个IP地址, 默认：localhost
            port: 5174, // 指定服务器端口,
            proxy: {    // 配置自定义代理规则
                "/h5api": { // 匹配所有以 '/h5api' 开头的请求路径
                    target: "https://tiyu.baidu.com", // 被替换的目标接口
                    changeOrigin: true,  // 是否换源
                    rewrite: (path) => path.replace(/^\/h5api/, ""), // 重写路径
                },
            },
        },
    });
```

2. 新建 `config.js`文件，配置 API host 和 proxy

```
    // 系统信息
    export const SYSTEM_INFO = uni.getSystemInfoSync();

    // 域名地址
    export const HOST = "https://tiyu.baidu.com";

    // 域名地址
    export const API_HOST = SYSTEM_INFO.uniPlatform === "web" ? "" : HOST;

    // 代理前缀
    export const API_PROXY = SYSTEM_INFO.uniPlatform === "web" ? "/h5api" : "";

```

3. 新建 `common.js` 文件，重新组装 `url` 地址

```
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
```

4. 请求接口基类中(`request.js`)，统一处理 `url` 地址 (通过`packApiUrl` 方法)

```
    export function request(config = {}) {
        // 发送请求前代码 ...

        // 处理url
        url = packApiUrl(url);

        //开始发送请求代码...
    }
```
