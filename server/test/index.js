var Jasmine = require('jasmine');

//测试
var jasmine = new Jasmine();
jasmine.execute(
  [
    'simple.js',
    'model.spec.js'
  ],
  'a spec name'
);