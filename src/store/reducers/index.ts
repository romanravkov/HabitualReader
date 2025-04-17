import { combineReducers } from 'redux';

import AlertsReducer from 'src/store/reducers/alertsReducer.ts';
import BooksReducer from 'src/store/reducers/booksReducer.ts';

export default combineReducers({
    alerts: AlertsReducer,
    books: BooksReducer,
});
