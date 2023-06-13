import React from "react";


 
export default function List(props) {

    function deletelement(k){
        props.onSelect(k);
        return 
    }
    return(    <>
    <button className="button1"  onClick={() => deletelement(props.index)}></button>
    <li  key = {props.id}> {props.item}</li>
    </>)

};
