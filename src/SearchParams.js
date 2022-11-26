import { useEffect, useState, useContext } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [location, updateLocation] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              updateAnimal(e.target.value);
              updateBreed("");
            }}
            onBlur={(e) => {
              updateAnimal(e.target.value);
              updateBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor={theme}>
          Theme
          <select
            id={theme}
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="peru">Peru</option>
              <option value="darkblue">Darkblue</option>
              <option value="lightgreen">Lightgreen</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="red">Red</option>
              <option value="pink">Pink</option>
              <option value="purple">Purple</option>
              <option value="deepskyblue">Deepskyblue</option>
              <option value="blueviolet">Blueviolet</option>
              <option value="purpleviolet">Purpleviolet</option>
              <option value="indigo">Indigo</option>
              <option value="violet">Violet</option>
              <option value="chartreuse">Chartreuse</option>
              <option value="mediumaquamarine">Mediumaquamarine</option>
              <option value="palegreen">Palegreen</option>
              <option value="skyblue">Skyblue</option>
              <option value="lightsteelblue">Lightsteelblue</option>
              <option value="powderblue">Powderblue</option>
              <option value="darkcyan">Darkcyan</option>
              <option value="paleturquoise">Paleturquoise</option>
              <option value="darkgoldenrod">Darkgoldenrod</option>
              <option value="mediumorchid">Mediumorchid</option>
              <option value="darkkhaki">Darkkhaki</option>
              <option value="palevioletred">Palevioletred</option>
              <option value="midnightblue">Midnightblue</option>
              <option value="coral">Coral</option>
              <option value="darkorange">Darkorange</option>
              <option value="orangered">Orangered</option>
              <option value="darkorchid">Darkorchid</option>
              <option value="palegoldenrod">Palegoldenrod</option>
              <option value="mediumvioletred">Mediumvioletred</option>
              <option value="palevioletred">Palevioletred</option>
              <option value="midnightblue">Midnightblue</option>
              <option value="cornsilk">Cornsilk</option>
              <option value="darksalmon">Darksalmon</option>
              <option value="violetred">Violetred</option>
              <option value="darkviolet">Darkviolet</option>
              <option value="palegreen">Palegreen</option>
              <option value="paleturquoise">Paleturquoise</option>
              <option value="darkslateblue">Darkslateblue</option>
              <option value="darkslategray">Darkslategray</option>
              <option value="darkturquoise">Darkturquoise</option>
              <option value="firebrick">Firebrick</option>
              <option value="darkviolet">Darkviolet</option>
              <option value="paleviolet">Paleviolet</option>
              <option value="papayawhip">Papayawhip</option>
              <option value="peachpuff">Peachpuff</option>
              <option value="palegoldenrod">Palegoldenrod</option>
              <option value="khaki">Khaki</option>
              <option value="lavender">Lavender</option>
              <option value="thistle">Thistle</option>
              <option value="plum">Plum</option>
              <option value="powderblue">Powderblue</option>
              <option value="purple">Purple</option>
              <option value="green">Green</option>
              <option value="silver">Silver</option>
              <option value="crimson">Crimson</option>
              <option value="midnightblue">Midnightblue</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>

            </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>;
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;