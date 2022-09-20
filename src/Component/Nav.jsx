import React, {Component} from 'react';
import logo from '../img/logo.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import ShopIcon from '@mui/icons-material/Shop';
import SearchIcon from '@mui/icons-material/Search';
import './style/nav.scss'
import Dropdown from 'react-bootstrap/Dropdown';
import MenuIcon from '@mui/icons-material/Menu';

class Nav extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navigation">
                    <a href="#" className="nav-logo">
                        <img src={logo} alt=""/>
                    </a>
                    <div className="searchSec">
                        <form>
                            <input type="text" className="searchInput" placeholder="Lorem input generator"/>
                            <button className="searchBtn"><SearchIcon /></button>
                        </form>
                    </div>
                    <div className="icons">
                        <a href="#" className="icon">
                            <FavoriteBorderIcon />
                        </a>
                        <a href="#" className="icon">
                            <PersonIcon />
                        </a>
                        <a href="#" className="icon">
                            <ShopIcon />
                        </a>
                    </div>
                </nav>
                <div className="categories">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <MenuIcon className="menuIcon"/> ALL Categories
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <ul className="links">
                        <li><a className="link active" href="#">О Компании</a></li>
                        <li><a className="link" href="#">Сервис</a></li>
                        <li><a className="link" href="#">Новости</a></li>
                        <li><a className="link" href="#">Экспорт</a></li>
                        <li><a className="link" href="#">Карьера</a></li>
                        <li><a className="link" href="#">Royal</a></li>
                        <li><a className="link" href="#">F.A.Q</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;