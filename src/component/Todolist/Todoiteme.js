import React from 'react'
import './Todoiteme.css'
export default function Todoiteme(props) {


    return (
        <div>
            <li className="list-group-item d-flex justify-content-between ">
                <div>
                    <span className="text-capitalize">{props.items.mission}</span>
                </div>
                <div className="icon" >
               <span><i className="fas fa-pen text-success me-3" onClick={()=> props.modify(props.items.id)}></i></span> 
               <span> <i className="fas fa-trash text-danger" onClick={()=> props.delecte(props.items.id)} ></i></span>
                </div>
            </li>
        </div>
    )
}
