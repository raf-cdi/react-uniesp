import React, {useState} from "react";

export default props => {

    const [valor1, setValor1] = useState(""); 
    const [valor2, setValor2] = useState(""); 
    
    const [a, setaA] = useState('');
    const [b, setB] = useState('');
    const valor = props.titulo;

    function show(){
        console.log(valor);
        setaA(valor1);
        setB(valor2);
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            
            <label htmlFor="">Controlado</label>
            <input className="valor1" value={valor1} onChange={(e)=> setValor1(e.target.value)}/>
            <input className="valor2" value={valor2} onChange={(e) => setValor2(e.target.value)}/>
            <button onClick={show}>Mostrar</button>
            <div>{a}</div>
            <div>{b}</div>

           
        </div>
    )
}