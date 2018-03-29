'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkEmail = exports.CHECK_EMAIL_FAILED = exports.CHECK_EMAIL_SUCCESS = exports.CHECK_EMAIL = exports.logout = exports.LOGOUT = exports.loginApi = exports.firebaseApp = exports.login = exports.LOGIN_FAILED = exports.LOGIN_SUCCESS = exports.LOGIN = undefined;

var _firebase = require('firebase');

var firebase = _interopRequireWildcard(_firebase);

var _firebase2 = require('../../firebase.config');

var _firebase3 = _interopRequireDefault(_firebase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var LOGIN = exports.LOGIN = 'LOGIN';
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
var LOGIN_FAILED = exports.LOGIN_FAILED = 'LOGIN_FAILED';
var login = exports.login = function login(email, pwd) {
  return {
    type: LOGIN,
    email: email,
    pwd: pwd
  };
};

// todo: you could implement your own authentication logic here if you don't want to use firebase;

firebase.initializeApp(_firebase3.default);
var firebaseApp = exports.firebaseApp = firebase;
var loginApi = exports.loginApi = function loginApi(account, pwd) {
  return firebase.auth().signInWithEmailAndPassword(account, pwd);
};

var LOGOUT = exports.LOGOUT = 'LOGOUT';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const LOGOUT_FAILED = 'LOGOUT_FAILED';
var logout = exports.logout = function logout() {
  return {
    type: LOGOUT
  };
};

var CHECK_EMAIL = exports.CHECK_EMAIL = 'CHECK_EMAIL';
var CHECK_EMAIL_SUCCESS = exports.CHECK_EMAIL_SUCCESS = 'CHECK_EMAIL_SUCCESS';
var CHECK_EMAIL_FAILED = exports.CHECK_EMAIL_FAILED = 'CHECK_EMAIL_FAILED';
var checkEmail = exports.checkEmail = function checkEmail(email) {
  return {
    type: CHECK_EMAIL,
    email: email
  };
};