'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _Login=require('../actions/Login');var INITAIL_STATE={isFetching:false,error:null,token:null};exports.default=function(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:INITAIL_STATE;var action=arguments[1];switch(action.type){case _Login.LOGIN:return _extends({},state,{isFetching:true});case _Login.LOGIN_SUCCESS:return _extends({},state,{isFetching:false,token:action.payload.la.Ca});case _Login.LOGIN_FAILED:return _extends({},state,{isFetching:false,error:action.error});case _Login.LOGOUT:return _extends({},state,{token:null});// case LOGOUT_SUCCESS:
// case LOGOUT_FAILED:
case _Login.CHECK_EMAIL:case _Login.CHECK_EMAIL_SUCCESS:case _Login.CHECK_EMAIL_FAILED:default:return state;}};