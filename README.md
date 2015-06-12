# erp-test [![spm version](http://spmjs.io/badge/erp-test)](http://spmjs.io/package/erp-test)

---



## Install

```
$ spm install erp-test --save
```

## Usage

```js
var erpTest = require('erp-test');
// use erpTest
```

## help

`mkdir erp-test`

`cd erp-test`

初始化项目：

`spm init`

安装项目所需要的依赖：

`spm install`

安装spm组件：

`spm install arale-dialog --save`

启动本地服务：

`spm doc`

引入样式可以；`require('arale-dialog/src/dialog.css');`

### about build

进入组件目录执行：`spm build`

如果涉及到样式可以在package.json里面加入配置项

比如：output:['src/dialog.css']

注意：线上就是直接使用dist打包后的文件

