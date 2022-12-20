const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength, ...params) {
    super(...params);

    if (!excessLength) {
      this.message = 'Maximum length exceeded';
    } else {
      this.message = `Maximum length exceeded by ${excessLength}`;
    }

    this.name = 'MaximumLengthExceededError';

    // if(Error.captureStackTrace) {
    //   Error.captureStackTrace(this, MaximumLengthExceededError);
    // }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}