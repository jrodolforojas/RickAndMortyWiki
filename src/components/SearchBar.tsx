interface Props {
  buttonLabel: string
}

export const SearchBar = ({ buttonLabel }:Props) => {
  return (
    <div className="mt-5 flex justify-center">
      <input className="border-2 w-2/12 h-10 mr-4 rounded-md p-2"/>
      <button className="rounded-full bg-[#97ce4c] w-1/12 h-10 ">{buttonLabel}</button>
    </div>
  )
}
