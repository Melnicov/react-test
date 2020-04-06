import React from "react";

function InputRow(props) {
    return <>
        <input placeholder={props.placeholder} onChange={props.onChange}/>
        <br/>
        <span>{props.error ? props.error : null}</span>
    </>
}

export default InputRow