import { Plugin } from "vue"

// 創建插件
const MyPlugin: Plugin = {
  install(app) {
    // 定義一個全域的方法
    app.config.globalProperties.$loading = () => {
      console.log('My Method Called');
    };
  },
};

// 導出插件
export default MyPlugin;
