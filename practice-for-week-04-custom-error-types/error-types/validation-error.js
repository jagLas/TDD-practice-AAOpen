class ValidationError extends Error {
  constructor (...params) {
    super(...params);

    this.name = 'ValidationError';
    this.message = this.message || 'Invalid input';

    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }

  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}