import { createStore, combineReducers, applyMiddleware , compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

// reducers
import auth from './Auth/reducer';
import device from './DevicePage/reducer';
import shop from './Shop/reducer'



const reducers = combineReducers({
    auth: auth,
    device: device,
    shop: shop,
    form: formReducer,
    
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk),
);

const store = createStore(reducers, enhancer);

window.__store__ = store;

export default store;