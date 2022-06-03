
interface Props {
  id: string
}

export const CharacterInfo = ({ id }: Props) => {
  return (
    <div>{`Character ${id}`}</div>
  )
}
