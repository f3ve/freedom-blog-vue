const { NODE_ENV } = require('../config');
const APIError = require('./ApiError');
const { INTERNAL_ERR_MSG } = require('../response/messages');
const { STATUS_INTERNAL_ERROR } = require('../response/statusCodes');
const { packResponse } = require('../response/responsePackers');
const logger = require('../logger');

/**
 * Custom middleware function that captures server errors and returns a response
 * with status code 500
 *
 * @param {Object} err - Express error object
 * @param {*} req - Express request object
 * @param {*} res - Express response object
 * @param {*} next - This is a callback function that executes the middleware succeeding the current middleware
 */
function apiErrorHandler(err, req, res, next) {
  if (NODE_ENV === 'development') {
    logger.error(err);
  }

  if (err instanceof APIError) {
    packResponse(res, err.message, err.code);
    return;
  }

  packResponse(res, INTERNAL_ERR_MSG, STATUS_INTERNAL_ERROR);
}

module.exports = apiErrorHandler;
