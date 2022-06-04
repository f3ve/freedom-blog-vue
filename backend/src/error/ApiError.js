const { INTERNAL_ERR_MSG } = require('../response/messages');
const {
  STATUS_BAD_REQUEST,
  STATUS_INTERNAL_ERROR,
} = require('../response/statusCodes');

class APIError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg) {
    return new APIError(STATUS_BAD_REQUEST, msg);
  }

  static internal(msg = INTERNAL_ERR_MSG) {
    return new APIError(STATUS_INTERNAL_ERROR, msg);
  }
}

module.exports = APIError;
