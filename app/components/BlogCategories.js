import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BlogCategoryList from './BlogCategoryList'


const BlogCategories = () => (
  <Switch>
    {/* <Route exact path='/blog/categories' component={BlogCategoriesHome}/> */}
    <Route path='/blog/categories/:category' component={BlogCategoryList}/>
  </Switch>
)

export default BlogCategories
