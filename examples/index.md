# Demo

---

## Normal usage
<a href="#" id="trigger">点击我</a>
<span class="js-example-data-array-selected" style="width:200px" selected="2">
</span>

````javascript
var $ = require('jquery');
var erpTest = require('index');

var o = new erpTest.Dialog({
    trigger: '#trigger',
    content: '<div style="padding:20px">这是 dialog 容器的内容</div>'
});

var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];

$(".js-example-data-array-selected").select2({
  data: data
})

````