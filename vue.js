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
  return result
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
  return result
}

module.exports.getSchoolInfo = getSCHInfo
exports.getStudentInfo = getSInfo
