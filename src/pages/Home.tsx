import { SearchBar, MainTitle, CharacterList, Button } from '../components'
import { useCharacters } from '../hooks/useCharacters'

export const Home = () => {
  const { characters, loadCharacters } = useCharacters()
  return (
    <div className="container mx-auto px-12">
      {/* Title */}
      <MainTitle title="Rick And Morty Wiki"/>
      {/* Search bar */}
      <SearchBar buttonLabel='Search'/>
      {/* Characters */}
      <CharacterList characters={characters}/>
      {/* Load more button */}
      <div className="content-center justify-center justify-items-center mb-10 mt-10">
        <Button label='Load more' onClick={() => loadCharacters()}/>
      </div>
    </div>
  )
}
