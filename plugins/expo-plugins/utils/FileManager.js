const {existsSync, mkdirSync, promises} = require('fs')

async function readFileAsync(path) {
  try {
    return promises.readFile(path, 'utf8')
  } catch (e) {
    throw `❌ [Error] - saveFile: ${e}`
  }
}

async function saveFileAsync(path, content) {
  try {
    return promises.writeFile(path, content, 'utf8')
  } catch (e) {
    throw `❌ [Error] - saveFile: ${e}`
  }
}

const createDir = dirname => {
  if (existsSync(dirname)) {
    console.log(`✅ [SUCCESS] - ${dirname} directory already exists`)
    return
  }

  try {
    mkdirSync(dirname, {recursive: true})
  } catch (e) {
    throw `❌ [Error] - mkdirSync trying to create ${dirname} directory: ${e}`
  }
}

module.exports = {
  createDir,
  readFileAsync,
  saveFileAsync,
}
