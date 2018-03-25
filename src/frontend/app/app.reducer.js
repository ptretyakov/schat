import io from 'socket.io-client';

import {
  SWITCH_LEFT_MENU,
} from './app.constants';

const socket = io.connect('http://localhost:3002')

const initState = {
  socket,
  isLeftMenuOpen: false,
}

export default function(state = initState, action) {
  switch(action.type) {
  case SWITCH_LEFT_MENU:
    return { ...state, isLeftMenuOpen: !state.isLeftMenuOpen }

  default:
    return { ...state };
  }
}
