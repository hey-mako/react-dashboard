import { createStore } from 'redux';
import dashboardApp from './reducers'

const store = createStore(dashboardApp);

export default store;
