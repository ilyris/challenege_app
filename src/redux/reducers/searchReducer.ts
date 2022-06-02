interface SearchState {
  formData: { product: string; maxProducts: number };
  page: number;
}

const initialState = {
  formData: { product: "", maxProducts: 10 },
  page: 0,
} as SearchState;

const searchReducer = (
  state = initialState,
  action: { payload: any; type: string }
) => {
  switch (action.type) {
    case "SET_FORM_STATE":
      const { product, maxProducts } = action.payload;
      return {
        ...state,
        formData: { product, maxProducts },
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
