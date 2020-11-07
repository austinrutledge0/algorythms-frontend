import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Rewards from "./components/UnauthenticatedApp/Products/Rewards";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Rewards} />
    </Switch>
  )
}

export default Routes
