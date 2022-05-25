import { CharacterCard } from '../components/CharacterCard'
import { Character } from '../interfaces/RickAndMortyResponse'

interface Props{
  characters: Character[]
}

export const CharacterList = ({ characters }:Props) => {
  return (
    <div className="grid grid-cols-6 gap-4 mt-10 content-center">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character}/>
      ))
      }
    </div>
  )
}
