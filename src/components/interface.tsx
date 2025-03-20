export interface StarWarsCharactersAPIResponse {
    count: number;
    next?: string;
    previous?: string;
    results: StarWarsCharacter[]
}

export interface StarWarsCharacter {
    name: string;
    birth_year?: string;
    gender?: string;
    eye_color?: string;
    hair_color?: string
    height?: string;
    homeworld?: string;
    mass?: string;
    skin_color?: string;
    url?: string;
    species?: any[];
    films?: any[];
    starships?: any[];
    vehicles?: any[];
}