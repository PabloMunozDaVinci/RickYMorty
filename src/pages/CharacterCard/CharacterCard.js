import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export const CharacterCard = ({
  character,
  addFavorite,
  favorites,
  deleteFav,
}) => {
  const [characterData, setCharacterData] = React.useState();

  const history = useHistory();

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${character}`).then(
      (respuesta) => respuesta.json().then((data) => setCharacterData(data))
    );
  }, [character]);

  const favoriteNames = favorites.map((favorite) => favorite.name);
  const isCharacterAdded =
    characterData && favoriteNames.includes(CharacterData.name);
  console.log(isCharacterAdded);
  return (
    <>
      <button onClick={() => history.push(" /")}>
        Volver a la pantalla principal
      </button>
      {characterData && (
        <>
          <Card>
            <img src={characterData.results[[0]].image} />
            <Container>
              <h4>
                <b>{characterData.results[[0]].name}</b>
              </h4>
              <p>{characterData.results[[0]].status}</p>
            </Container>
          </Card>

          <button
            onClick={
              isCharacterAdded
                ? () => deleteFav(characterData.name)
                : () => addFavorite(characterData)
            }
          >
            {isCharacterAdded ? " Borrar favorito" : " Agregar favorito"}
          </button>
        </>
      )}
    </>
  );
};

const Card = styled.div`
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const Container = styled.div`
  padding: 2px 16px;
`;
