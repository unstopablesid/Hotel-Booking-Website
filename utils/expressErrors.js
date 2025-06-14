class ExpressError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Indicates that this error is operational and can be handled gracefully
  }
}


module.exports = ExpressError;