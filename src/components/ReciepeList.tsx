import styled from "styled-components";
import { Header, SearchComponent, SearchInput } from "./Header";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CoverImage = styled.img`
  height: 200px;
  object-fit:cover;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

export const IngredientsText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
  margin-bottom: 12px;
`;

export const SeeMoreText = styled(IngredientsText)`
  color: #eb3300;
  border: solid 1px #eb3300;
`;

export const ResponsiveHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`;

export const ResponsiveSearchComponent = styled(SearchComponent)`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

 export const ResponsiveSearchInput = styled(SearchInput)`
  flex-grow: 1;
  margin-left: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;