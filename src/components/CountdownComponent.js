import React, { Component } from 'react'

class CountdownComponent extends Component {

    cursos = [
        {

        }
    ]
    render() {
        return(
            <div className='container countdowncontainer'>

                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Ingresar el tiempo de break</h5>
                    </div>
                    <div className="card-body">
                        <div className="input-group mb-12">
                        <input type="text" class="form-control" placeholder="Minutos" aria-label="Minutos" aria-describedby="button-addon2" />
                            <a className="btn btn-outline-secondary" href="/contador" id="button-addon2">Definir</a>
                        </div>
                    </div>
                </div>

            </div>
    
        )
    }
}

export default CountdownComponent;