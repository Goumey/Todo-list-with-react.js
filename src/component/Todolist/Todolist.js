import React from 'react'
import "./Todolist.css"
import Todoiteme from './Todoiteme';
export default function Todolist(props) {
    const list =props.tache.map(function (item,index) {
        
return  <Todoiteme key={index} items={item} delecte={props.supprimer} modify={props.modifier} />       
    })
 
    return (
        <div className=" container ">
          <h1 className="text-center">Iteme List</h1>
<div>{list} </div>
<button className="btn btn-danger mt-3 form-control"  type="submit" onClick={props.clear} >Clear</button>
        </div>
    )
}
