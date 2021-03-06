// import makeId from 'makeId';
import SHA256 from 'crypto-js/sha256';

import {
  ADD_ROOM,
  ADD_MESSAGE,
  SET_CURRENT_ROOM,
  TOGGLE_ROOM_FAVOR,
  UPDATE_CONTROL_KEY,
  CLEAR_SEARCH_ROOMS_RESULT,
  UPDATE_SEARCH_ROOMS_RESULT,
} from './rooms.constants';

const initState = {
  list: [
    {
      id: 'idrooom3242342',
      key: SHA256('key').toString(),
      title: 'Titile room title',
      favor: false,
      
      messages: [],
    },
  ],
  current: null,
  searchResult: [],
}

export default function(state = initState, action) {
  switch(action.type) {
    case ADD_ROOM:
    // key: SHA256(action.payload.key).toString(),  
      return {
        ...state,
        list: [
          ...state.list,
          action.payload,
        ],
      };
    
    case ADD_MESSAGE: {
      let roomsListCopy = state.list.slice();
      let findRoom = roomsListCopy.find(element => {
        return element.id === action.payload.roomId;
      });

      findRoom.messages.push({
        id: action.payload.id,
        me: action.payload.me,
        message: action.payload.message,
      });
      return { ...state, list: roomsListCopy};
    }

    case UPDATE_CONTROL_KEY: {
      let roomsListCopy = state.list.slice();
      let findRoom = roomsListCopy.find(element => {
        return element.id === action.payload.roomId;
      });

      findRoom.key = SHA256(action.payload.key).toString();
      return {...state, list: roomsListCopy}
    }

    case TOGGLE_ROOM_FAVOR: {
      const roomsListCopy = state.list.slice();
      const findRoom = roomsListCopy.find(element => {
        return element.id === action.payload.roomId;
      });

      findRoom.favor = !findRoom.favor

      return {...state, list: roomsListCopy, current: findRoom}
    }

    case SET_CURRENT_ROOM: {
      return {
        ...state,
        current: state.list.findIndex(e => e.id === action.payload.room.id),
      }
    }

    case UPDATE_SEARCH_ROOMS_RESULT: {
      return {
        ...state,
        searchResult: action.payload,
      }
    }

    case CLEAR_SEARCH_ROOMS_RESULT: {
      return {
        ...state,
        searchResult: [],
      }
    }

    default:
      return { ...state };
  }
}
