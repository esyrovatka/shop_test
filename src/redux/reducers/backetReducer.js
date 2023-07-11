/* eslint-disable no-case-declarations */
import {
  GET_ALL_ITEM,
  ADD_NEW_ITEM,
  SET_BACKET_ERROR,
  SET_BACKET_LOADING,
  DELETE_ITEM,
  DELETE_All_ITEM,
} from "../constants";

const initialState = {
  itemList: [],
  isLoading: false,
  error: null,
};

export const backetReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_BACKET_LOADING:
      return { ...state, isLoading: true };
    case GET_ALL_ITEM:
      return { ...state, itemList: payload, isLoading: false };
    case ADD_NEW_ITEM:
      const newList = JSON.parse(JSON.stringify(state.itemList));

      payload.count = 1;
      const res = newList.find((item) => item.id === payload.id);
      if (res) {
        res.count += 1;
      } else {
        newList.push(payload);
      }
      return { ...state, itemList: newList, isLoading: false };

    case DELETE_ITEM:
      const newDeleteList = JSON.parse(JSON.stringify(state.itemList));
      const result = newDeleteList.find((item) => item.id === payload);
      if (result.count > 1) {
        result.count -= 1;
        return { ...state, itemList: newDeleteList, isLoading: false };
      } else {
        return {
          ...state,
          itemList: newDeleteList.filter((item) => item.id !== payload),
          isLoading: false,
        };
      }
    case SET_BACKET_ERROR:
      return { ...state, error: payload, isLoading: true };

    case DELETE_All_ITEM:
      return initialState;
    default:
      return state;
  }
};
