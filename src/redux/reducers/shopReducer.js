import {
  GET_ALL_SHOP_ITEM,
  GET_SHOP_ITEM_BY_ID,
  SET_SHOP_ERROR,
  SET_SHOP_LOADING,
} from "../constants";

const initialState = {
  itemList: [],
  isLoading: false,
  error: null,
};

export const shopReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case SET_SHOP_LOADING:
      return { ...state, isLoading: true };
    case GET_ALL_SHOP_ITEM:
      return { ...state, itemList: payload, isLoading: false };
    case GET_SHOP_ITEM_BY_ID:
      return { ...state, itemList: payload, isLoading: false };

    case SET_SHOP_ERROR:
      return { ...state, error: payload, isLoading: true };

    default:
      return state;
  }
};
