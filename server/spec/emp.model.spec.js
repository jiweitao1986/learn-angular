var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var empModel = require('../models/emp.model');

describe("【Suite: EmpModel测试】", function () {

  var initDir = '../data/init-data/';
  var mockDir = '../data/mock-data/';

  beforeEach(function() {
    empModel.fileDir = mockDir;
  });


  it("【Spce1st: 验证表配置】", function () {
    var tableConfigs = empModel.tableConfigs
    expect(tableConfigs.length).toBe(4);
    expect(tableConfigs[0]['tableName']).toBe('Emp');
    expect(tableConfigs[1]['tableName']).toBe('Edu');
    expect(tableConfigs[2]['tableName']).toBe('Job');
    expect(tableConfigs[3]['tableName']).toBe('Income');
  });


  it("【Spce2nd: 验证JSON文件路径", function () {
    var expectedPath = path.resolve(__dirname, mockDir + 'Emp.json');
    expect(empModel.fileDir, mockDir);
    expect(empModel.getFilePath('Emp')).toBe(expectedPath);
  });


  it("【Spce3rd: 验证getTableDataFromFile返回结果是否正确", function () {
    var tableData = empModel.getTableDataFromFile('Emp');
    expect(tableData.length).toBe(10);
    expect(tableData[0]['Code']).toBe('LiuYi');
    expect(tableData[9]['Code']).toBe('ZhengShi');
  });


  it("【Spce4th: 验证getAllDataFromFile返回结果是否正确", function () {
    var allData = empModel.getAllDataFromFile();
    var empData    = allData['Emp'];
    var eduData    = allData['Edu'];
    var jobData    = allData['Job'];
    var incomeData = allData['Income'];

    // 验证表记录数是否正确
    expect(empData.length).toBe(10);
    expect(eduData.length).toBe(4);
    expect(jobData.length).toBe(4);
    expect(incomeData.length).toBe(4);

    // 验证Emp表的数据是否正确
    expect(empData[0]['Code']).toBe('LiuYi');
    expect(empData[9]['Code']).toBe('ZhengShi');
  });


  it("【Spce5th: 验证saveTableDataToFile是否正常", function () {
    var tableName = 'Test';
    var tableData = [
      {ID: '1',   Code: 'Record-1'},
      {ID: '2',   Code: 'Record-2'},
      {ID: '3',   Code: 'Record-3'},
      {ID: '10',  Code: 'Record-10'},
      {ID: '20',  Code: 'Record-20'},
      {ID: '100', Code: 'Record-100'}
    ];
    empModel.saveTableDataToFile(tableName, tableData);

    var savedTableData = empModel.getTableDataFromFile(tableName);
    var firstRecord = _.first(savedTableData);
    var lastRecord  = _.last(savedTableData);

    expect(savedTableData.length).toBe(6);
    expect(firstRecord['ID']).toBe('1');
    expect(lastRecord['ID']).toBe('100');
  });

});