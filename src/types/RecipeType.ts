export type RecipeType = {
  Name: string;
  Description: string;
  Tags: any[];
  ingredients: string;
};

export interface RecipeProps {
  recipe: RecipeType;
}
