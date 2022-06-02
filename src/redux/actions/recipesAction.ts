import {
  SET_RECIPES,
  SET_HITS_PER_PAGE,
  SET_NUM_OF_PAGES,
} from "./actionTypes";

export const setRecipes = (recipes: {}[]) => {
  return {
    type: SET_RECIPES,
    payload: recipes,
  };
};

export const setHitsPerPage = (hitsPerPage: number) => {
  return {
    type: SET_HITS_PER_PAGE,
    payload: hitsPerPage,
  };
};

export const setNumOfPage = (nbPages: number) => {
  return {
    type: SET_NUM_OF_PAGES,
    payload: nbPages,
  };
};
