export const LOGIN_STATUS = {
    PENDING: 'pending',
    NOT_LOGGED_IN: 'notLoggedIn',
    IS_LOGGED_IN: 'loggedIn',
  };
  
  export const SERVER = {
    AUTH_MISSING: 'auth-missing',
    AUTH_INSUFFICIENT: 'auth-insufficient',
    INVALID_EMAIL: 'invalid-email',
    REQUIRED_USERNAME: 'required-username',
    INVALID_USERNAME: 'invalid-username',
    REQUIRED_MESSAGE: 'required-message',
    REGISTER_USER:'register-user',
  };
  
  export const CLIENT = {
    NETWORK_ERROR: 'networkError',
    NO_SESSION: 'noSession',
  };
  
  export const MESSAGES = {
    [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network.  Please try again',
    [SERVER.AUTH_MISSING]: 'Invalid session. Please log in again reloading the page/clicking logout',
    [SERVER.AUTH_INSUFFICIENT]: 'Your username/password combination does not match any records, please try again.',
    [SERVER.INVALID_EMAIL]: 'Please enter valid email (including @) to continue',
    [SERVER.REQUIRED_USERNAME]: 'Please enter a valid (letters and/or numbers) username',
    [SERVER.INVALID_USERNAME]: 'The username entered should be less than 20 characters',
    [SERVER.REQUIRED_MESSAGE]: 'Please type a valid message',
    [SERVER.REGISTER_USER]: 'Signup to login',
    default: 'Something went wrong.  Please try again',
  };