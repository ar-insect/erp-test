# erp-test

---

## 使用帮助
```
$ mkdir erp-test
```

```
cd erp-test
```

初始化项目：
```
spm init
```

安装项目所需要的依赖：
```
spm install
```
安装spm组件：
```
spm install arale-dialog --save
```
更多组件请到`http://spmjs.io`去找

启动本地服务：
```
spm doc
```
引入样式可以：
```js
require('arale-dialog/src/dialog.css');
```
关于打包组件

进入组件目录执行：
```
spm build
```

如果涉及到样式可以在`package.json`里面加入配置项

比如：
```
output:['src/dialog.css']
```

### 注意

*如果在使用jQuery插件时候发现不能使用请修改组件包内的package.json将jquery配置为框架默认的版本1.7.2

*线上就是直接使用dist打包后的文件

[具体配置项参考](https://github.com/spmjs/docs/tree/3.4/zh-cn/package.json)
