interface Props {
  title: string
}

export const MainTitle = ({ title }: Props) => {
  return (
    <h1 className="text-6xl font-bold flex justify-center mt-5">{title}</h1>
  )
}
