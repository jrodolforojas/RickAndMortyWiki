import { Redirect, Route, Switch } from 'wouter'
import { CharacterInfo } from '../pages/CharacterInfo'
import { Home } from '../pages/Home'

export const Navigator = () => {
  return (
    <Switch >
      <Route path="/characters">
        <Home/>
      </Route>
      <Route path="/characters/:id">
        {params => <CharacterInfo id={params.id}/>}
      </Route>
      <Redirect to="/characters"/>
    </Switch>
  )
}
