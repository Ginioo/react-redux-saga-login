'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactRedux=require('react-redux');var _redux=require('redux');var _Login=require('../../actions/Login');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}// import 'w3css/w3.css';
// import './style.scss';
var LoginForm=function(_Component){_inherits(LoginForm,_Component);function LoginForm(props){_classCallCheck(this,LoginForm);var _this=_possibleConstructorReturn(this,(LoginForm.__proto__||Object.getPrototypeOf(LoginForm)).call(this,props));_this.state={email:'',password:''};return _this}_createClass(LoginForm,[{key:'render',value:function render(){var _this2=this;var _props=this.props,loginState=_props.loginState,login=_props.login,title=_props.title;return _react2.default.createElement('div',{id:'login-form'},_react2.default.createElement('div',{className:'w3-card'},loginState.isFetching?_react2.default.createElement('p',{className:'w3-center w3-text-teal w3-xxlarge'},'Processing...'):_react2.default.createElement('div',null,_react2.default.createElement('p',{className:'w3-center w3-text-teal w3-xxlarge'},title),_react2.default.createElement('form',{className:'w3-container'},_react2.default.createElement('input',{className:'w3-input',type:'email',value:this.state.email,onChange:function onChange(event){return _this2.setState({email:event.target.value})},placeholder:'user@example.com'}),_react2.default.createElement('input',{className:'w3-input',type:'password',value:this.state.password,onChange:function onChange(event){return _this2.setState({password:event.target.value})},placeholder:'password'})),loginState.error&&_react2.default.createElement('div',{className:'w3-panel w3-text-red'},_react2.default.createElement('p',{className:'w3-large'},loginState.error.message)),_react2.default.createElement('div',{className:'w3-center'},_react2.default.createElement('button',{className:'w3-button w3-block w3-teal',onClick:function onClick(){login(_this2.state.email,_this2.state.password);_this2.setState({password:''})}},'Login')))))}}]);return LoginForm}(_react.Component);function mapStateToProps(state){return{loginState:state.login}}function mapDispatchToProps(dispatch){return(0,_redux.bindActionCreators)({login:_Login.login},dispatch)}exports.default=(0,_reactRedux.connect)(mapStateToProps,mapDispatchToProps)(LoginForm);