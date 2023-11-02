import React from "react";
import produtos from "../mocks/produtos";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

const getLinhas = produtos.map((r)=>{
    return(
    <tr key={r.id}>
        <td>{r.id}</td>
        <td>{r.nome}</td>
        <td>{r.preco}</td>
    </tr>);
});

return (
    <div>
        <table>
            <thead>
                <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {getLinhas}
            </tbody>
        </table>
    </div>
)
}