// libs
import React from "react";
import { Button } from "@mui/material";

// redux
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setPage } from "../../redux/actions/searchActions";
import { setRecipes, setNumOfPage } from "../../redux/actions/recipesAction";

// styles
import "./Pagination.css";

// helpers
import { productCall } from "../../helpers/api/productCall";

export default function Pagination() {
  const dispatch = useAppDispatch();

  const { nbPages } = useAppSelector((state) => state.rootReducer.recipes);
  const { formData, page } = useAppSelector(
    (state) => state.rootReducer.searchInfo
  );

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    let productPage = page;

    // Update our page-number state locally
    if (e.currentTarget.name === "prev") {
      productPage = page - 1;
    } else {
      productPage = page + 1;
    }

    // invoke an api call with the updated page numnber
    const response = await productCall(
      formData.product,
      formData.maxProducts,
      productPage
    );
    const { nbPages, hits } = response.data;
    // dispatch the recipes & how many pages there are.
    dispatch(setNumOfPage(nbPages));
    dispatch(setRecipes(hits));
    dispatch(setPage(productPage));
  };

  return (
    <div className="Pagination">
      <Button
        name="prev"
        onClick={handleClick}
        variant="contained"
        disabled={page === 0}
      >
        Prev
      </Button>

      <span>{page}</span>

      <Button
        name="next"
        onClick={handleClick}
        variant="contained"
        disabled={nbPages === page}
      >
        Next
      </Button>
    </div>
  );
}
