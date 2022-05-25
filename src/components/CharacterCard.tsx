import { Character } from '../interfaces/RickAndMortyResponse'

interface Props{
  character: Character
}

export const CharacterCard = ({ character }: Props) => {
  const { name, image, status, location: { name: locationName } } = character
  return (
    <div className="rounded-lg border shadow-md w-52 bg-white">
      <img className="rounded-t-lg" src={image} alt={name}/>
      <div className="p-2">
        <p className="font-bold text-2xl">{name}</p>
      <div className="mt-2">
        <p>{status}</p>
        <p className="text-[#97ce4c]">{locationName}</p>
      </div>
      </div>
    </div>
  )
}
