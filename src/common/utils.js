/**
 * 工具类
 */

class utils {
    /**
     * 去空格
     * @param {*} str
     */
    static trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }

};

var obj = {
    install(Vue) {
        Vue.prototype.utils = utils;
    }
};

export {
    obj as default,
    utils
};
