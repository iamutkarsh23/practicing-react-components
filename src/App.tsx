import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { StarWarsCharacter, StarWarsCharactersAPIResponse } from './components/interface'
import DropdownComponent from './components/DropdownComponent';
import getStarWarsCharactersByPageNumber from './api/api';

function App() {
  const [starWarsCharacters, setStarWarsCharacters] = useState<StarWarsCharacter[]>([])
  const [selectedCharacter, setSelectedCharacter] = useState<StarWarsCharacter>();
  const [isLoading, setIsLoading] = useState(false);
  const [dropdownErrorMessage, setDropdownErrorMessage] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getStarWarsCharacters = async () => {
      setIsLoading(true);

      try{

        const starWarsCharactersResponse = await getStarWarsCharactersByPageNumber(page)
        const list = starWarsCharactersResponse.starWarsCharactersList
        setStarWarsCharacters([ ...starWarsCharacters, ...list]);
        setSelectedCharacter({name: list[0].name})
      } catch(e) {
        setDropdownErrorMessage(`There was an API error - ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    }

    getStarWarsCharacters();
  }, [page]);

  const onDropdownChange = (e: any) => {
    console.log(e.target.value)
    const starWarsCharacter: StarWarsCharacter = {name: e.target.value};
    setSelectedCharacter(starWarsCharacter);
  }

  const onPageChange = () => setPage(page+1);

  console.log("App component render")
  return (
    <>
      <h2>Choose your star wars character:</h2>
      <DropdownComponent
        isLoading={isLoading}
        defaultPlaceHolder = {"Select a star wars character here: "}
        listOfOptions={starWarsCharacters}
        dropdownId='starWarsCharactersId'
        dropdownName='star-wars-characters-name' 
        onChangeHandler={onDropdownChange}
        onLoadMoreButtonClick={onPageChange}
        defaultSelectedValue={selectedCharacter?.name}
        errorMessage={dropdownErrorMessage}/>
      <h3>You choose: {selectedCharacter?.name}</h3>
    </>
  )
}

export default App
