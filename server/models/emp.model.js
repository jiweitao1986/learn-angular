var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var empModel = {

  tableConfigs: [
    { tableName: 'Emp',    parentTable: '',    primaryKey: 'ID', foreignKey: ''},
    { tableName: 'Edu',    parentTable: 'Emp', primaryKey: 'ID', foreignKey: 'EmpID'},
    { tableName: 'Job',    parentTable: 'Emp', primaryKey: 'ID', foreignKey: 'EmpID'},
    { tableName: 'Income', parentTable: 'Emp', primaryKey: 'ID', foreignKey: 'EmpID'},
  ],

  /**
   * 获取列表(只获取主表数据)
   */
  getList: function() {
    var self = this;
    var result = {};
    _.each(this.tables, function(table) {
      var tableName = table.tableName;
      if (table.parentTable === '') {
        result[tableName] = self.getJsonDataByFilter(tableName);
      } else {
        result[tableName] = [];
      }
    });
    return result;
  },

  /**
   * 获取员工信息
   */
  getInfo: function(id) {
    var self, result;
    self = this;
    result = {};

    _.each(this.tables, function(table) {
      var tableName, primaryKey, foreignKey, filter;
      tableName  = table.tableName;
      primaryKey = table.primaryKey;
      foreignKey = table.foreignKey;

      if (table.parentTable === '') {
        filter = _.set({}, primaryKey, id)
      } else {
        filter = _.set({}, foreignKey, id)
      }
      result[tableName] = self.getJsonDataByFilter(tableName, filter);
    });
    return result;
  },

  /**
   * 删除
   */
  del: function(id) {
    console.log('del');
  },

  /**
   * 批量删除
   */
  multiDel: function() {
    console.log('multiDel');
  },

  /**
   * 新增
   * [
   *  table1: [],
   *  table2: []
   * ]
   */
  save: function(data) {
    var self, result, tableConfig, tableData, id, allData, isExist;
    self = this;

    //获取主表记录的ID
    tableConfig = _.find(self.tableConfigs, {parentTable: ''});
    tableData = data[tableConfig.tableName];
    id = tableData[0][tableConfig.primaryKey];

    //如果已经存在，先删除相关数据
    allData = self.getAllDataFromFile();
    isExist = self.isExist(id, tableConfig);
    if (isEXist) {
      allData = self.delDataByID(allData, id);
    }

    //追加数据
    result = self.appendData(allData, data);
    return result;
  },

  /**
   * 批量保存
   */
  multiSave: function(data) {
    console.log('暂不实现');
  },


  // ----------------------------------------
  // 工具方法
  // ----------------------------------------



  /**
   * 获取主表信息
   */
  getParentTable() {
    const tableConfig = _.find(self.tableConfigs, {parentTable: ''});
    return tableConfig;
  }

  /**
   * 根据给定的主表id，获取data中检索相关数据
   */
  getDataByID(data, id) {
    var self, result;
    self = this;
    result = {};

    _.each(this.tableConfigs, function(tableConfig) {
      var tableName, tableData, filter;

      tableName  = tableConfig.tableName;
      tableData  = data[tableName];

      result[tableName] = _.filter(tableData, function(rowData) {
        if (tableConfig.parentTable === '') {
          return rowData[tableConfig.primaryKey] === id;
        } else {
          return rowData[tableConfig.foreignKey] === id;
        }
      });

    });

    return result;
  }

  /**
   * 根据给定的主表id，从给定data中移除相关数据
   */
  delDataByID(data, id) {
    var self, result;
    self = this;
    result = {};

    _.each(this.tables, function(table) {
      var tableName, tableData, filter;

      tableName  = table.tableName;
      tableData = data[tableName];

      result[tableName] = _.filter(tableData, function(rowData) {
        if (tableConfig.parentTable === '') {
          return rowData[tableConfig.primaryKey] !== id;
        } else {
          return rowData[tableConfig.foreignKey] !== id;
        }
      });

    });

    return result;
  }

  /**
   * 合并数据
   */
  appendData: function(data, dataToAppend) {
    var result = {}

    _.each(dataToAppend, function(tableDataToAppend, tableNameToAppend) {
      var tableData = data[tableName];
      if (tableData instanceof Array) {
        result[tableName] = tableData.contact(tableDataToAppend);
      }
    });

    return result;
  }



  /**
   * 判断是否是新增数据
   */
  isExist: function(table, id) {
    var tableData = self.getTableDataFromFile(tableName);
    var isExist = _.some(tableData, function(rowData) {
      rowData[table.primaryKey] = id;
    })
    return isExist;
  }

  /**
   * 获取主表配置
   */
  getParentTableConfig: function() {
    var table = _.find(this.tables, {parentTable: ''});
    return table;
  }


  // ----------------------------------------
  // JSON文件操作
  // ----------------------------------------

  /**
   * 获取表对应的JSON文件
   */
  getFilePath: function(tableName) {
    var fileName = tableName + '.json';
    return path.resolve(__dirname, '../data/' + fileName);
  },

  /**
   * 从JSON文件中获取员工列表
   */
  getTableDataFromFile: function(tableName) {
    var path = this.getFilePath(tableName);
    var json = fs.readFileSync(path);
    var list = JSON.parse(json);
    return list;
  },

  /**
   * 从JSON文件中获取全部数据
   */
  getAllDataFromFile() {
    var result = {};
    _.each(this.tables, function(table) {
      result[table.tableName] = self.getTableDataFromFile(tableName);
    });
    return result;
  },

  /**
   * 将员工列表写入到JSON文件中
   */
  saveTableDataToFile: function(tableName, tableData) {
    var path = this.getFilePath(tableName);
    list = _.orderBy(list, ['ID'], ['asc']);
    var json = JSON.stringify(list);
    fs.writeFileSync(path, json);
  },

  /**
   * 将数据设置到相关JSON文件中
   */
  saveAllDataToFile(data) {
    var self, result;
    self = this;
    result = {};

    _.each(this.tables, function(table) {
      var tableName, tableData;
      tableName = table.tableName;
      if (data[tableName]) {
        var tableData = data[tableName];
        self.saveTableData(tableName, tableData);
      }
    });
    return result;
  }

}

module.exports = empModel;