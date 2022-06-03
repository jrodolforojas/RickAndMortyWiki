import { SearchBar, MainTitle, CharacterList, Button } from '../components'
import { useCharacters } from '../hooks/useCharacters'

export const Home = () => {
  const { characters, handleLoadNewCharacters } = useCharacters()
  return (
    <div className="container mx-auto px-12">
      <MainTitle title="Rick And Morty Wiki"/>
      <SearchBar buttonLabel='Search'/>
      <CharacterList characters={characters}/>
      <div className="mb-10 mt-10 flex justify-center">
        <Button label='Load more' onClick={handleLoadNewCharacters}/>
      </div>
    </div>
  )
}
