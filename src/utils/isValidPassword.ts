/**
 * tip: here is possible to implement a enterprise-wide password validation.
 * e.g. one enterprise has stricter password security rules such a requirement for symbols.
 */
export default (password: string): boolean =>
  password.length >= 8 && password.match(/\W/) !== null;
