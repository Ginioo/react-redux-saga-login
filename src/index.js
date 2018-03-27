import LoginForm from './containers/LoginForm';
import LoginReducer from './reducers/Login';
import watchLogin from './sagas/Login';

export default {
  LoginForm,
  LoginReducer,
  watchLogin
}