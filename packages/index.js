import button from "./no-button";
import buttonGroup from "./no-button-group";
import modal from "./no-modal";
import table from "./no-table";
import tableColumn from "./no-table-column";
import message from "./no-message";
import editor from "./no-editor";

import "./style/bootstrap.css";
import "./style/normalize.css";
import "./style/animate.css";
import "./style/fontawesome.css";
// 存储组件列表
const components = [
    button,
    buttonGroup,
    modal,
    table,
    tableColumn,
    editor
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component));

    const Message = Vue.extend(message);
    Vue.prototype.$Message =  (options = {})=> {
        let instance = new Message(options).$mount();
        document.body.appendChild(instance.$el); // 动态插入
        return instance;
    }
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    ...components
}