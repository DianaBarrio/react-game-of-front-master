const CharactersURL = "https://api.got.show/api/show/characters/";
const HousesURL = "https://api.got.show/api/show/houses/";

export const getAllCharacters = async () => {
  const res = await fetch(CharactersURL);
    if (res.ok) {
        return res.json();
    } else {
        return [];
    }
};

export const getCharacter = async (name) => {
  const res = await fetch(`${CharactersURL}${name}`);
    if (res.ok) {
        return res.json();
    } else {
        return [];
    }
};

export const getAllHouses = async () => {
    const res = await fetch(HousesURL);
      if (res.ok) {
          return res.json();
      } else {
          return [];
      }
  };
  
  export const getHouse = async (name) => {
    const res = await fetch(`${HousesURL}${name}`);
      if (res.ok) {
          return res.json();
      } else {
          return [];
      }
  };