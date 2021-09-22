import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'

// Icon names found at https://semantic-ui.com/elements/icon.html#status


class Navbar extends Component {
  

  render() {
    

    return (
      // set menu to include icons as menu icon: semantic ui menu
      <Menu icon='labeled'>
        {/* first item, give link, and component name (dev tools menu item name) */}
        <Menu.Item
          as={NavLink} exact to="/"
          name='home'
          // add a divider for html txt
        >
          {/* set icon by name from icon names url */}
          <Icon name='home'/>
          {/* text to label navbar menu item */}
          Home
        </Menu.Item>
        <Menu.Item
          as={NavLink} exact to="/login"
          name='login'
        >
          <Icon name='sign in alternate'/>
          Sign in
        </Menu.Item>
        <Menu.Item
          as={NavLink} exact to="/signup"
          name='signup'
        >
          <Icon name='plus'/>
          Register
        </Menu.Item>
        <Menu.Item
          as={NavLink} exact to="/tetris"
          name='tetris'
        >
          <Icon name='gamepad'/>
          Tetris
        </Menu.Item>

        {/* menu position right starts elements on right side of navbar */}
        <Menu.Menu position='right'>
          {/* Logout button logs out on click, since its unauthenticated, gets thrown to home, which redirects to login */}
          <Menu.Item
            name='logout'
            onClick={() => signOut(getAuth())}
          >
            <Icon name='sign out alternate'/>
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar;