import './App.css';
import React from "react";
import Card from './componentes/layout/Card';
import Pai from './componentes/familia/Pai';
import Padrasto from './componentes/familia/Padrasto';
import Filho from './componentes/familia/Filho';
import TabelaProduto from './componentes/repeticao/TabelaProduto';

// eslint-disable-next-line import/no-anonymous-default-export
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
                <Card titulo="Tabela Produtos" color='#FFD700'>
                        <TabelaProduto/>
                </Card>
            </div>
            
        </div>
    )

}
