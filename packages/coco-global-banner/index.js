import Component from './index.vue';
import config from './package.json';

// 为组件提供 install 安装方法，供按需引入
Component.install = function (Vue) {
  Vue.component(`${config.name}.${config.version}`, Component);
};

// 默认导出组件
export {
  Component,
  config,
};
