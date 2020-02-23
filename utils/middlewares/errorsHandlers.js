const fs = require('fs')
const moment = require('moment')

function logErrors (error, next) {
  // fs.appendFileSync(path.join(os.tmpdir(), `logs/${moment().format('DD[-]MM[-]YYYY')}.log`), `${error} \n `)
  fs.appendFileSync(`logs/${moment().format('DD[-]MM[-]YYYY')}.log`, `${error} \n `)

  next(error)
}

module.exports = {
  logErrors
}
