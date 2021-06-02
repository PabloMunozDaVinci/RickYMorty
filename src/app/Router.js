import { Route, Switch, BrowserRouter } from "react-router-dom";
import { HomePage, CharacterCard } from "../pages/";
import React from "react";

export const Router = () => {
  const [character, setCharacter] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);

  function handleAddFavorite(character) {
    setCharacter((oldFavorites) => [...oldFavorites, character]);
  }

  function handleSetCharacter(character) {
    setCharacter(character);
  }

  function deleteFavorite(characterName) {
    setFavorites(
      favorites.filter((favorite) => favorite.name !== characterName)
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/CharacterCard">
          <CharacterCard
            character={character}
            addFavorite={handleAddFavorite}
            favorites={favorites}
            deleteFav={deleteFavorite}
          />
        </Route>
        <Route path="/">
          <HomePage setCharacter={handleSetCharacter} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
