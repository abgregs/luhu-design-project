import React from 'react'
import BlogList from './BlogList'
import BlogPost from './BlogPost'
import BlogCategories from './BlogCategories'
import { Switch, Route } from 'react-router-dom'

const Blog = () => (
  <Switch>
    <Route path='/blog/categories' component={BlogCategories} />
    <Route path='/blog/:id' component={BlogPost}/>
    <Route exact path='/blog' component={BlogList}/>
  </Switch>

)

export default Blog
