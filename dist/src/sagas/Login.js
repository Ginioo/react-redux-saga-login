'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.watchLogin = watchLogin;

var _effects = require('redux-saga/effects');

var _Login = require('../actions/Login');

var _marked = /*#__PURE__*/regeneratorRuntime.mark(login),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchLogin);

function login(action) {
  var payload;
  return regeneratorRuntime.wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_Login.loginApi, action.email, action.pwd);

        case 3:
          payload = _context.sent;
          _context.next = 6;
          return (0, _effects.put)({ type: _Login.LOGIN_SUCCESS, payload: payload });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return (0, _effects.put)({ type: _Login.LOGIN_FAILED, error: _context.t0 });

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function watchLogin() {
  return regeneratorRuntime.wrap(function watchLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(_Login.LOGIN, login);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}