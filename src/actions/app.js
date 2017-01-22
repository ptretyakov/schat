import {
  UPDATE_HEADER_TITLE,
  UPDATE_HEADER_LEFT_ICON,
} from '../constants/app';

export function updateHeaderTitle(title = 'Empty title parameter') {
  return (dispatch) => {
    return dispatch({ type: UPDATE_HEADER_TITLE, payload: title })
  }
}

export function updateHeaderLeftIcon(title = 'menu') {
  return (dispatch) => {
    return dispatch({ type: UPDATE_HEADER_LEFT_ICON, payload: title});
  }
}