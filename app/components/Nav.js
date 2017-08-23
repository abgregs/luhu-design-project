import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../img/Luhu-Logo-Blue.svg';

class Nav extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      isActive:false,
      classOne: null,
      classTwo: null,

    }

    this.toggleClass = this.toggleClass.bind(this);
    this.resetToggle = this.resetToggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  resetToggle() {
    this.setState(function() {
      return {
        isActive: false,
        classOne: null,
        classTwo: null,
        scrolled: null
      }
    });
  }

componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 50) {
      this.setState({
      scrolled: "-scrolled"
    });
    // console.log(this.state.scrolled);
  } else {
    this.setState({
    scrolled: null
  });
  // console.log(this.state.scrolled);
  }
}

  toggleClass() {

    if (this.state.isActive === false) {

      this.setState(function() {
        return {
          isActive: true,
          classOne: "-active",
          classTwo: "-on"
        }
      });
    } else {
        this.setState(function() {
          return {
            isActive: false,
            classOne: null,
            classTwo: null
          }
        });
      }
  }

  render() {

  return (
    <div className={[this.state.scrolled, "navbar-component", "navbar-fixed-top"].join(' ')}>
      {/* <!-- Class `area` is a container --> */}
      <div className="navbar area">
        {/* <!-- Logo --> */}
        <NavLink onClick={this.resetToggle} className="brand" exact to='/'><img src={Logo}/></NavLink>
        {/* <!-- List of links --> */}
        <nav role="navigation" id="navigation" className={[this.state.classOne, this.state.classTwo, "list"].join(' ')}>
          {/* <NavLink onClick={this.resetToggle} className='navlink item -link' activeClassName='active' to='/'>Home</NavLink> */}
          <NavLink onClick={this.resetToggle} className='navlink item -link' activeClassName='active' to='/services'>Services</NavLink>
          <NavLink onClick={this.resetToggle} className='navlink item -link' activeClassName='active' to='/blog'>Blog</NavLink>
          <NavLink onClick={this.resetToggle} className='navlink item -link' activeClassName='active' to='/about'>About</NavLink>
          <NavLink onClick={this.resetToggle} className='navlink item -link' activeClassName='active' to='/contact'>Contact</NavLink>
          {/* <span className="item"><i className="fa fa-search"></i></span> */}
        </nav>
        {/* <!-- Button to toggle the display menu  --> */}
        <button onClick={this.toggleClass} className={[this.state.classOne, this.state.classTwo, "toggle"].join(' ')} data-toggle data-target="#navigation">
          {/* <!-- Hamburger icon --> */}
          <span className="icon"></span>
        </button>
      </div>
    </div>
  )
}
}

export default Nav
