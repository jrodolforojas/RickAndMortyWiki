interface Props {
  title: string
}

export const MainTitle = ({ title }: Props) => {
  return (
    <h2 className="text-6xl font-bold justify-self-center">{title}</h2>
  )
}
