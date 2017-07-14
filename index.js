#!/usr/bin/env node

var program = require('commander');
var Start = require('./lib/start');

program
  .version('0.1.0')
  .option('start', 'Starts a new project')
  .parse(process.argv);
 
if(program.args.length<2){
	if (program.start) Start.initProject(program);
	else program.help();
}
else console.log("One at a time Gentleman!");