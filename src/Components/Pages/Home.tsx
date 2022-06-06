// libs
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

// redux
import { setRecipes, setNumOfPage } from "../../redux/actions/recipesAction";

// components
import SearchBar from "../SearchBar/SearchBar";
import FoodCard from "../FoodCard/FoodCard";
import Pagination from "../Pagination/Pagination";

// styles
import "./Home.css";

// types
import { RecipeType } from "../../types/RecipeType";

// helpers
import { productCall } from "../../helpers/api/productCall";

export default function Home() {
  const dispatch = useAppDispatch();

  // Grab recipes to display some by default
  const { recipes } = useAppSelector((state) => state.rootReducer.recipes);

  // Only run on inital render of homepage.
  useEffect(() => {
    let hasRan = false;
    if (!hasRan) {
      const response = productCall("", 10, 0);
      response
        .then((result) => {
          console.log("get data");

          dispatch(setNumOfPage(result.data.nbPages));
          dispatch(setRecipes(result.data.hits));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => {
      hasRan = true;
    };
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <section className="Home">
        <Pagination />
        {recipes.length > 0 &&
          recipes.map((recipe: RecipeType, i: number) => (
            <FoodCard recipe={recipe} key={i++} />
          ))}
        {recipes.length === 0 && <h2>No More Recipes</h2>}
      </section>
    </>
  );
}
