import isValidEmail from 'is-valid-email';

/**
 * tip: this util was separated in a wrapper in order to allow easy
 * implementation of custom validations. e.g. enterprise domain validation.
 */
export default (email: string): boolean =>
  isValidEmail(email);
