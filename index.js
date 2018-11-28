'use strict';
var CreateFilePlugin = (function () {
    const write = require('write');
    const path = require('path');

    function CreateFilePlugin(options){
        if (options === void 0) { options = {}; }
        this.options = options;
    }

    CreateFilePlugin.prototype.apply = function (compiler) {
        const _this = this;

        compiler.plugin('done', function() {
            const fullPath = path.join(_this.options.path, _this.options.fileName);
            var content = _this.options.content;
            if (typeof content == 'function') {
              content = content();
            }
            write.sync(fullPath, content);
        });
    };

    return CreateFilePlugin;
})();

module.exports = CreateFilePlugin;
