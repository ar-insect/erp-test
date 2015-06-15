var erpTest = {};
var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];

var $ = require('select2/3.5.2/spm_modules/jquery/2.1.3/jquery');
require('select2');
// 这里引用样式
require('arale-dialog/src/dialog.css');
// dialog
erpTest.Dialog = require('arale-dialog');

$(".js-example-data-array-selected").select2({
  data: data
});

module.exports = erpTest;
