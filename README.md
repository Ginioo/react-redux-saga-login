## a simple login form

add reducer to reducers/index.js
```
import {LoginReducer} from 'react-redux-saga-login';
```

add saga to sagas/index.js
```
import {watchLogin} from 'react-redux-saga-login';
```

add action creator to a component
```
import {login, logout} from 'react-redux-saga-login';
```

uncomment this in 'firebase.config.js'
```
import {FIREBASE_PROJECT, FIREBASE_API_KEY, FIREBASE_ID} from '../../firebase.config.json';
```