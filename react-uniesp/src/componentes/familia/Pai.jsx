import React from "react";
import Filho from "./Filho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <React.Fragment>
        <div>
            <Filho nome='Props 1' sobrenome={props.sobrenome}/>
            <Filho nome='Props 2' sobrenome={props.sobrenome}/>
            <Filho nome='Props 3' sobrenome={props.sobrenome}/>
           
        </div>
        </React.Fragment>
    )
}