require('dotenv').config()

const healthcheck = require('./healthcheck')
const trackNewERC1155 = require('./services/erc1155tracker')

trackNewERC1155()
healthcheck()
