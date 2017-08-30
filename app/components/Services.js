import React from 'react'
import ServiceDetail from './ServiceDetail'
import ServicesList from './ServicesList'
import { Switch, Route } from 'react-router-dom'

const Services = () => (

  <Switch>
    <Route path='/services/:id' component={ServiceDetail}/>
    <Route exact path='/services' component={ServicesList}/>
  </Switch>
)


export default Services
