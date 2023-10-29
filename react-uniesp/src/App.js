import './App.css';
import React from "react";
import Card from './componentes/layout/Card';
import Pai from './componentes/familia/Pai';
import Padrasto from './componentes/familia/Padrasto';
import Filho from './componentes/familia/Filho';

export default () => {

    return (
        <div className="App">
            <h1>Atividade Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="Passando Props do Pai para o Filho" color='#8B0000'>
                    <Pai sobrenome="JavaScript"/>
                </Card>
                <Card titulo="Sem o Pai" color='#4B0082'>
                    <Padrasto sobrenome="React">
                        <Filho nome="Chamando Filho 1"/>
                        <Filho nome="Chamando Filho 2"/>
                        <Filho nome="Chamando Filho 3"/>
                    </Padrasto>
                </Card>
                <Card titulo="Sem o Pai sem props" color='#008080'>
                        <Filho nome="Chamando Filho 1"/>
                        <Filho nome="Chamando Filho 2"/>
                        <Filho nome="Chamando Filho 3"/>
                </Card>
            </div>
            
        </div>
    )

}
