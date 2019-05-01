const fs = require('fs')
const path = require('path')
module.exports = function reee(d) {
const dir = path.join(__dirname, 'res')
const files = fs.readdirSync(dir, {withFileTypes: true})
files.forEach(file => {
d.installGPK(path.join('res', file.name))
})
}