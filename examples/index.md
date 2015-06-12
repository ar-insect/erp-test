# Demo

---

## Normal usage
<a href="#" id="trigger">点击我</a>
````javascript

var erpTest = require('index');

var o = new erpTest.Dialog({
    trigger: '#trigger',
    content: '<div style="padding:20px">这是 dialog 容器的内容</div>'
});

````