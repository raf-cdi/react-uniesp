import './App.css';
import React from "react";
import Card from './componentes/layout/Card';
import Pai from './componentes/Familia/Pai';
import Padrasto from './componentes/Familia/Padrasto';
import Filho from './componentes/Familia/Filho';

export default () => {

    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#05 - Padastro e Filho" color='#006400'>
                    <Padrasto sobrenome="Uniesp">
                        <Filho nome="Teste Padrastro 1"/>
                        <Filho nome="Teste Padrastro 2"/>
                        <Filho nome="Teste Padrastro 3"/>
                    </Padrasto>
                </Card>
                <Card titulo="#04 - Pai e Filho" color='#DC143C'>
                    <Pai sobrenome="Uniesp"/>
                </Card>
            </div>
            
        </div>
    )

}
