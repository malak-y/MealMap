import React, { useState } from "react";
import styled from "styled-components";
import menuImage from "./assets/Screenshot (416).png";
import searchIcon from "./assets/Screenshot (417).png"; // Import the search icon
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import {
  AppNameComponent,
  Placeholder,
  ResponsiveSearchInput,
  SearchIcon as SearchIconComponent,
} from "./components/Header";
import {
  CoverImage,
  IngredientsText,
  RecipeContainer,
  RecipeListContainer,
  RecipeName,
  ResponsiveHeader,
  ResponsiveSearchComponent,
  SeeMoreText,
} from "./components/ReciepeList";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const APP_ID = "a52b4d43";
const APP_KEY = "e0e5c667605f5e91d8275c973531b80a";

function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [recipeList, updateRecipeList] = useState([]);

  const fetchData = async (searchString: string) => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      updateRecipeList(response.data.hits);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // debounce
  const [timeoutId, setTimeoutId] = useState<number | undefined>(undefined);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const searchString = event.target.value;
    updateSearchQuery(searchString);

    const timeout = window.setTimeout(() => {
      if (searchString) {
        fetchData(searchString);
      }
    }, 700);
    setTimeoutId(timeout);
  };

  return (
    <Container>
      <ResponsiveHeader>
        <AppNameComponent>
          <img src={menuImage} alt="menu" /> MealMap
        </AppNameComponent>
        <ResponsiveSearchComponent>
          <SearchIconComponent src={searchIcon} alt="search" />
          <ResponsiveSearchInput
            placeholder="Search Recipe"
            onChange={handleTextChange}
          />
        </ResponsiveSearchComponent>
      </ResponsiveHeader>
      <RecipeListContainer>
        {recipeList.length > 0 ? (
          recipeList.map((recipe: any, index: number) => (
            <RecipeComponent key={index} recipeObj={recipe.recipe} />
          ))
        ) : (
          <Placeholder src={menuImage} />
        )}
      </RecipeListContainer>
    </Container>
  );
}

interface Ingredient {
  text: string;
  weight: number;
}

interface Props {
  recipeObj: {
    image: string;
    label: string;
    url: string;
    ingredients: Ingredient[];
  };
}

const RecipeComponent: React.FC<Props> = ({ recipeObj }) => {
  const [show, setShow] = useState(false);
  const { image, label, url, ingredients } = recipeObj;

  return (
    <RecipeContainer>
      <Dialog
        onClose={() => setShow(false)}
        aria-labelledby="simple-dialog-title"
        open={show}
      >
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <RecipeName>{label}</RecipeName>
          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <SeeMoreText
            onClick={() => window.open(url)}
            style={{ color: "green", border: "1px solid green" }}
          >
            See More
          </SeeMoreText>

          <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      <CoverImage src={image} alt={label} />
      <RecipeName>{label}</RecipeName>
      <IngredientsText onClick={() => setShow(true)}>
        Ingredients
      </IngredientsText>
      <SeeMoreText onClick={() => window.open(url)}>
        See Complete Recipe
      </SeeMoreText>
    </RecipeContainer>
  );
};

export default App;
