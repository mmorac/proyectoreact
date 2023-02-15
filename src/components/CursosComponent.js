import React, { Component } from 'react'

class CursosComponent extends Component {

    cursos = [
        {
            "curso": "Angular",
            "img": "devicon-angularjs-plain",
            "descripcion": "Ingresa al mundo de Front End con Angular"
        },
        {
            "curso": "SQL Server",
            "img": "devicon-microsoftsqlserver-plain",
            "descripcion": "Aprende Bases de Datos con SQL Server"
        },
        {
            "curso": "C#",
            "img": "devicon-csharp-plain",
            "descripcion": "Inicia en el Back End con C#"
        }
    ]
    render() {
        return(
            this.cursos.forEach((item, index) => {
                <div className='container countdowncontainer'>

                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">{item.curso}</h5>
                    </div>
                    <div className="card-body">
                        <i className='{item.img}'></i>
                        <p>
                            {item.descripcion}
                        </p>
                    </div>
                </div>

            </div>                
            })
    
        )
    }
}

export default CursosComponent;