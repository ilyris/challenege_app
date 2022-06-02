// libs
import { FC } from "react";
import { Typography, List, ListItem } from "@mui/material";

// styles
import "./FoodCard.css";

// types
import { RecipeProps } from "../../types/RecipeType";

const FoodCard: FC<RecipeProps> = ({ recipe }): JSX.Element => {
  const { Name, Description, ingredients, Tags } = recipe;

  return (
    <div className="FoodCard">
      <Typography variant="h5" component="h5">
        {Name}
      </Typography>

      {Description && (
        <Typography component="p" paragraph={true}>
          <Typography component="span">Desc:</Typography>
          {Description}
        </Typography>
      )}
      {ingredients && (
        <Typography component="p" paragraph={true}>
          <Typography component="span">Ingredients:</Typography>
          {ingredients}
        </Typography>
      )}
      {Boolean(Tags.length) && (
        <List>
          {Tags.map((tag) => (
            <ListItem key={tag.Name}>{tag.Name}</ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default FoodCard;
