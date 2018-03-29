## a simple login form

1. add reducer to reducers/index.js
```
import {LoginReducer} from 'react-redux-saga-login';
```

2. add saga to sagas/index.js
```
import {watchLogin} from 'react-redux-saga-login';
```

3. add action creator to a component
```
import {login, logout} from 'react-redux-saga-login';
```

4. add 'firebase.config.json' under project root folder;