import { useMemo } from "react";
import { StarWarsCharacter } from "./interface";


interface DropdownComponentProps {
    isLoading: boolean,
    listOfOptions: StarWarsCharacter[],
    dropdownName: string
    dropdownId: string
    onChangeHandler: () => void
    errorMessage: string
    defaultPlaceHolder: string
    onLoadMoreButtonClick: () => void
    defaultSelectedValue?: string
}


const DropdownComponent = (props: DropdownComponentProps) => {
    const { dropdownName, dropdownId, listOfOptions, isLoading, onChangeHandler, errorMessage, onLoadMoreButtonClick, defaultSelectedValue } = props;


    return (
        <>
        {errorMessage && <h4>Failed to render Dropdown component due to API error</h4>}
        
        <div style={{display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center'}} defaultValue={defaultSelectedValue}>
            <select name={dropdownName} id={dropdownId} disabled={isLoading || errorMessage} onChange={onChangeHandler}>
                {listOfOptions.map((character: StarWarsCharacter) => (
                    <option value={character.name} key={character.name}>{character.name}</option>
                ))}
            </select> 
            
            <button onClick={onLoadMoreButtonClick}>Load more...</button>
        </div>

        </>
    )

}

export default DropdownComponent;