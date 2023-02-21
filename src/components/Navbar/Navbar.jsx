import { AccountCircle, Bookmark, Search } from '@material-ui/icons'
import { Download } from '@mui/icons-material';
import React from 'react'
import Logo from '../Logo'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <a href="/">
                    <Logo className="logo"/>
                </a>
            </div>
            <div className="right">
                <Search className="icons"/>
                <Bookmark className="icons"/>
                <Download className="icons"/>
                <AccountCircle className="icons"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar