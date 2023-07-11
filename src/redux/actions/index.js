import { getAllShopItemApi } from "../api";
import {
  ADD_NEW_ITEM,
  DELETE_All_ITEM,
  DELETE_ITEM,
  GET_ALL_SHOP_ITEM,
  SET_SHOP_ERROR,
  SET_SHOP_LOADING,
} from "../constants";

//shop
export const getAllShopItem = () => async (dispatch) => {
  dispatch({ type: SET_SHOP_LOADING });
  try {
    const response = await getAllShopItemApi();
    dispatch({ type: GET_ALL_SHOP_ITEM, payload: response.data });
  } catch (err) {
    dispatch({ type: SET_SHOP_ERROR });
  }
};

//basket

export const addItemToShop = (item) => async (dispatch) => {
  dispatch({ type: ADD_NEW_ITEM, payload: item });
};

export const removeItemFromShop = (id) => async (dispatch) => {
  dispatch({ type: DELETE_ITEM, payload: id });
};

export const clearBasket = () => async (dispatch) => {
  dispatch({ type: DELETE_All_ITEM });
};
