import React, { cloneElement } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <React.Fragment>
        <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
        </React.Fragment>
    )
}