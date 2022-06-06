// libs
import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";

// redux
import { useAppDispatch } from "../../hooks/hooks";
import { setFormState } from "../../redux/actions/searchActions";
import { setRecipes, setNumOfPage } from "../../redux/actions/recipesAction";
import { setPage } from "../../redux/actions/searchActions";

// styles
import "./SearchBar.css";

// helpers
import { productCall } from "../../helpers/api/productCall";

export default function SearchBar() {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<{
    product: string;
    maxProducts: number;
  }>({
    product: "",
    maxProducts: 10,
  });

  const handleClick = async () => {
    const response = await productCall(
      formData.product,
      formData.maxProducts,
      0
    );
    const { nbPages, hits } = response.data;
    dispatch(setNumOfPage(nbPages));
    dispatch(setRecipes(hits));

    dispatch(setPage(0));
    dispatch(setFormState(formData));
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

  const handleSelect = (e: SelectChangeEvent<unknown>) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <div className="SearchBar">
      <Typography component="h4" variant="h4">
        Search
      </Typography>
      <TextField
        label="Products"
        name="product"
        value={formData.product}
        variant="standard"
        placeholder="chicken"
        onChange={handleInput}
      />
      <FormControl fullWidth>
        <InputLabel id="max-products-label">Products per page </InputLabel>

        <Select
          labelId="max-products-label"
          id="max-products"
          name="maxProducts"
          value={formData.maxProducts}
          label="Products per page"
          onChange={handleSelect}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={handleClick} variant="contained">
        Submit
      </Button>
    </div>
  );
}
