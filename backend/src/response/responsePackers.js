function packResponse(res, body, status = 200) {
  if (typeof body === 'string') {
    res.send(body);
  } else {
    res.status(status).json(body);
  }
}

module.exports = {
  packResponse,
};
