import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return  ( 
   <div>
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="Index.html">Ayoub</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Menu <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="HelloWorld.jsx">Pagina 1</a></li>
            <li><a href="pagina2.html">Pagina 2</a></li>
            <li><a href="pagina3,html">Pagina 3</a></li>
          </ul>
        </li>
       
      </ul>
      
       
      </ul>
    </div>
  </div>
</nav>
    
   </div>
  );

}

export default App;
