import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HelloWorld from './HelloWorld';
import ByeWorld from './ByeWorld';
import GoodWorld from './GoodWorld';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/Helloworld' component={HelloWorld}/>
      <Route exact path='/ByeWorld' component={ByeWorld}/>
      <Route exact path='/GoodWorld' component={GoodWorld}/>
    </Switch>
  </main>
)

export default Main;
