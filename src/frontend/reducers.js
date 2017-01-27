// Libs
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import roomsReducer from './app/pages/rooms/rooms.reducer';
import headerReducer from './app/shared/header/header.reducer';

export default combineReducers({
  // ...reducers,
  room: roomsReducer,
  header: headerReducer,
  routing: routerReducer,
})