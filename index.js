var inquirer = require('inquirer')
const chalk = require('chalk');
var  init = require('./init')
global.log = require('./Util/logger');
inquirer
  .prompt([{
      type: 'list',
      name: 'do',
      message: '你要干嘛?',
      choices: ['提交代码', '生成模板代码', '项目初始化', '发布代码','依赖更新' ,'占卜'],
    },
  ])
  .then(answers => {
      switch (answers.do) {
          case '项目初始化':
          inquirer.prompt(init.config).then(answers=>{init.callback(answers)})
           break;
      }
  });
