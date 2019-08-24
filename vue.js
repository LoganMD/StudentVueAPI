function getSTInfo(id, password, url) {
    var spawn = require("child_process").spawn;
    var process = spawn('python',["./getStudentInfo.py", id, password, url] );
    return new Promise(resolve => {
      process.stdout.on('data', function(data) {
        resolve(data.toString());
      })
  });
}

async function getSInfo(id, password, url) {
  var result = await getSTInfo(id, password, url)
  return JSON.parse(result)
}

function getSCInfo(id, password, url) {
    var spawn = require("child_process").spawn;
    var process = spawn('python',["./getSchoolInfo.py", id, password, url] );
    return new Promise(resolve => {
      process.stdout.on('data', function(data) {
        resolve(data.toString());
      })
  });
}

async function getSCHInfo(id, password, url) {
  var result = await getSCInfo(id, password, url)
  return JSON.parse(result)
}

function getC(id, password, url) {
    var spawn = require("child_process").spawn;
    var process = spawn('python',["./getClasses.py", id, password, url] );
    return new Promise(resolve => {
      process.stdout.on('data', function(data) {
        resolve(data.toString());
      })
  });
}

async function getCL(id, password, url) {
  var result = await getC(id, password, url)
  return JSON.parse(result)
}

module.exports.getSchoolInfo = getSCHInfo
module.exports.getStudentInfo = getSInfo
module.exports.getClasses = getCL
