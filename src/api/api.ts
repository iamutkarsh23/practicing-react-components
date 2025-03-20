import { StarWarsCharactersAPIResponse } from "../components/interface";

// API constants that will go in env file
const API_URL_FOR_STAR_WARS_CHARACTERS = "https://swapi.dev/api/people";


const getStarWarsCharactersByPageNumber = async (page: number) => {
    const API_URL = new URL(API_URL_FOR_STAR_WARS_CHARACTERS);
    API_URL.searchParams.append("page", page.toString());
    console.log("Called api")
    const response: StarWarsCharactersAPIResponse = await fetch(API_URL).then((response) => response.json())
    const starWarsCharactersList = response.results
    const totalCount = response.count
    return {starWarsCharactersList, totalCount}
}

export default getStarWarsCharactersByPageNumber;