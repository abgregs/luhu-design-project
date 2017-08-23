import React from 'react'
import BlogList from './BlogList'
import BlogPost from './BlogPost'
import BlogCategories from './BlogCategories'
import { Switch, Route } from 'react-router-dom'

const Blog = () => (
  <Switch>
    <Route exact path='/blog' component={BlogList}/>
    <Route path='/blog/:id' component={BlogPost}/>
    <Route path='/blog/categories' component={BlogCategories} />
  </Switch>
)

export default Blog
