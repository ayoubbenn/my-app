import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
    <header>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <ul class="nav navbar-nav navbar-right">
                            <li><Link to="/HelloWorld">Pagina 1</Link></li>
                            <li><Link to="/ByeWorld">Pagina 2</Link></li>
                            <li><Link to="/GoodWorld">Pagina 3</Link></li>
                        </ul>


                    </ul>
                </div>
            </div>
        </nav>
    </header>
)


export default Header