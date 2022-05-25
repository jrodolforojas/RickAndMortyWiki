
interface Props{
  label: string
  onClick?: () => void

}

export const Button = ({ label, onClick }:Props) => {
  return (
    <button className="rounded-full bg-[#97ce4c] w-1/12 h-10" onClick={onClick}>{label}</button>
  )
}
