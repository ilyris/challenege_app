interface RecipesState {
  recipes: {}[];
  hitsPerPage: number;
  nbPages: number | null;
}

const initialState = {
  recipes: [],
  hitsPerPage: 5,
  nbPages: null,
} as RecipesState;

const recipesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_RECIPES":
      return { ...state, recipes: action.payload };
    case "SET_HITS_PER_PAGE":
      return {
        ...state,
        hitsPerPage: action.payload,
      };
    case "SET_NUM_OF_PAGES":
      return {
        ...state,
        nbPages: action.payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
