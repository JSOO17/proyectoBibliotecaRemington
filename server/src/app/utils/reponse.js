const response = (req, res, body, statusCode) => {
   res.status(statusCode).json({
      body: body,
      statusCode: statusCode
   })
}

module.exports = {
   response
}