import styled from "styled-components";

// Header container with styled components
export const Header = styled.div`
  color: #FF8C00;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */
`;

// Responsive search input with smooth focus transition
export const ResponsiveSearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
  color: black;
  background-color: transparent;
  border-bottom: 2px solid transparent; /* Default border color */
  transition: border-bottom 0.3s ease;

  &::placeholder {
    color: white;
  }

  &:focus {
    border-bottom: 2px solid #f90; /* Lighter orange on focus */
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 12px;
  }
`;

export const ResponsiveHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;
  color: #ff8c00;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    font-size: 26px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    text-align: center; /* Centers text on very small screens */
  }
`;

// Container for the search component with a clean design
export const ResponsiveSearchComponent = styled.div`
  display: flex;
  align-items: center;
  background-color: #ff8c00;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

// Search icon with inverted color filter for visibility
export const SearchIconComponent = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  filter: invert(100%); /* Inverts the color to white */
`;

// App name component with image and text alignment
export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
    width: 50px;
    height: auto;
  }
`;

// General search component with a consistent design
export const SearchComponent = styled.div`
  display: flex;
  align-items: center;
  background-color: #FF8C00;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */
`;

// Search icon with inverted color filter for visibility
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  filter: invert(100%); /* Inverts the color to white */
`;

// Input field for search with a consistent look
export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  color: white; /* Ensures text color contrasts with the background */
  background-color: #FF8C00;
  border-radius: 4px; /* Rounded corners for a softer look */
  padding: 8px; /* Consistent padding */
`;
export const Placeholder = styled.img`
  width: 400px;
  height: 400px;
  margin: 100px auto; /* Center horizontally */
  opacity: 50%;
  display: block; /* Ensure the margin auto works */
  
  @media (max-width: 800px) {
    width: 300px; /* Adjust size for small screens */
    height: auto; /* Maintain aspect ratio */
    margin: 20px auto; /* Adjust margin for small screens, center horizontally */
    display: block;
  }
`;