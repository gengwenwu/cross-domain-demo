import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

export default defineConfig({
  plugins: [uni()],
  server: {
    host: "localhost", // 指定服务器应该监听哪个IP地址, 默认：localhost
    port: 5174, // 指定服务器端口,
    proxy: {  // 为开发服务器配置自定义代理规则
      "/h5api": { // 匹配所有以 '/h5api' 开头的请求路径
        target: "https://tiyu.baidu.com", // 目标接口
        changeOrigin: true, // 是否换源
        rewrite: (path) => path.replace(/^\/h5api/, ""), // 重写路径
      },
    },
  },
});
