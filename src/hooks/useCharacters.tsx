import { useEffect, useRef, useState } from 'react'
import { RickAndMortyResponse, Character } from '../interfaces/RickAndMortyResponse'
const API_URL = 'https://rickandmortyapi.com/api/character'

export const useCharacters = () => {
  const nextPageUrl = useRef(API_URL)
  const [characters, setCharacters] = useState<Character[]>([] as Character[])

  const loadCharacters = async () => {
    const response:Promise<RickAndMortyResponse> = await fetch(nextPageUrl.current, {
      method: 'GET'
    }).then(res => res.json())
      .catch(error => console.error(error))

    const data = await response
    nextPageUrl.current = data.info.next
    setCharacters([...characters, ...data.results])
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  return {
    characters,
    loadCharacters
  }
}
