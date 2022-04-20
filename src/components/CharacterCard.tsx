
export const CharacterCard = () => {
  return (
    <div className="rounded-lg border shadow-md w-52">
      <img className="rounded-t-lg" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick"/>
      <div className="p-2">
        <p className="font-bold text-2xl">Rick Sanchez</p>
      <div className="mt-2">
        <p>Human</p>
        <p className="text-[#97ce4c]">{'Earth (C-137)'}</p>
      </div>
      </div>
    </div>
  )
}
