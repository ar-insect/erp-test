# Demo

---

## Normal usage
<a href="#" id="trigger">点击我</a>

<select class="js-example-data-array-selected">
  <option value="2" selected="selected">这个是下拉试试看</option>
</select>


````javascript
var $ = require('jquery');
var erpTest = require('index');

var o = new erpTest.Dialog({
    trigger: '#trigger',
    content: '<div style="padding:20px">这是 dialog 容器的内容</div>'
});

var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];

$(".js-example-data-array-selected").select2({
  datalist: data
});

````