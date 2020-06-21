const { join } = require('path')
const rootDir = process.cwd()

module.exports = {
  rootDir,
  roots: [
    join(__dirname, 'src')
  ],
  moduleDirectories: ['node_modules', '<rootDir>/node_modules'],
}
