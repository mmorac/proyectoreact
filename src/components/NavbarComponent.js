import React, {Component, useState} from 'react'


class NavbarComponent extends Component {
    titulos = {
        "esp": {"home": "Inicio", "campus": "Cursos", "team": "Nuestro equipo", "enterprise": "Empresas", "sites": "Sitios", "press": "Prensa", "blog": "Contador", "lang": "Idioma"},
        "eng": {"home": "Home", "campus": "Classes", "team": "Team", "enterprise": "Enterprise", "sites": "Sites", "press": "Press", "blog": "Blog", "Countdown": "Language"}
    }
    idioma = "esp";

    cambiarIdioma(lang){
        console.log("ESTAMOS INTENTANDO CAMBIAR EL IDIOMA!!! EL IDIOMA ES " + lang)
        this.setState({lang})
    }

    obtenerIdioma(){
        return this.state["lang"];
    }

    state = {
        "lang" : "esp"
    }

    render(){
        return (
            <div className='container'>
        
                <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src='../assets/img/VLA.png'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/inicio">{this.titulos[this.obtenerIdioma()]["home"]}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/cursos">{this.titulos[this.obtenerIdioma()]["campus"]}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">{this.titulos[this.obtenerIdioma()]["team"]}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">{this.titulos[this.obtenerIdioma()]["enterprise"]}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">{this.titulos[this.obtenerIdioma()]["sites"]}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">{this.titulos[this.obtenerIdioma()]["press"]}</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/contador">{this.titulos[this.obtenerIdioma()]["blog"]}</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {this.titulos[this.obtenerIdioma()]["lang"]}
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" onClick={e => this.cambiarIdioma("esp")}>Español</a></li>
                            <li><a className="dropdown-item" onClick={e => this.cambiarIdioma("eng")}>English</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        
            </div>
          )
        
    }
}

export default NavbarComponent;