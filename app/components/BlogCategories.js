import React from 'react'
import { Link } from 'react-router-dom'
import BlogCategoriesHome from './BlogCategoriesHome'
import BlogCategoryListing from './BlogCategoryList'


const BlogCategories = () => (
  <Switch>
    <Route exact path='/blog/categories' component={BlogCategoriesHome}/>
    <Route path='/blog/categories/:category' component={BlogCategoryList}/>
  </Switch>
)

export default BlogCategories
