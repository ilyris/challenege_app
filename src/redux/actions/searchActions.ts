import { SET_FORM_STATE, SET_PAGE } from "./actionTypes";

export const setFormState = (formData: {
  product: string;
  maxProducts: number;
}) => {
  return {
    type: SET_FORM_STATE,
    payload: formData,
  };
};

export const setPage = (page: number) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};
