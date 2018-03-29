# react-redux-saga-login
## a React login form using Redux, Redux-Saga pattern, and authenticate with Google firebase

1. add reducer to reducers/index.js
```
import {LoginReducer} from 'react-redux-saga-login';

...

const rootReducer = combineReducers({
  login: LoginReducer,

  ...

});
```

2. add saga to sagas/index.js
```
import {watchLogin} from 'react-redux-saga-login';

...

export default function* rootSaga() {
  yield all([

    ...

    watchLogin(),

    ...

  ]);
}
```

3. add action creator to a component
```
import {login, logout} from 'react-redux-saga-login';
```

4. add 'firebase.config.json' under project root folder
```
{
  "FIREBASE_PROJECT": "YOUR PROJECT NAME",
  "FIREBASE_API_KEY": "SAMPLE FIREBASE API KEY",
  "FIREBASE_ID": 9999999999
}
```

5. Do the styling for your login form
```
#login-form .card {}
#login-form .processing {}
#login-form .title {}
#login-form .form {}
#login-form .input {}
#login-form .email {}
#login-form .pwd {}
#login-form .error-message {}
#login-form .btn {}
```