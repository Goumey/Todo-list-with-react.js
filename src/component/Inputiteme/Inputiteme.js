import React from 'react'
 

export default function Inputiteme(props) {

    return (
        <div >
           <h1 className="text-center">Todo list</h1> 
           <form onSubmit={props.push}>
           <div className="card card-body">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book"></i>
                    </div>
                </div>
              
                <input type="text" className="form-control ms-2" onChange={props.changement} value={props.inputvalue} />
            </div>
            {props.editer==false? <button className="btn btn-primary mt-3"  type="submit" >Add Item</button>: <button className="btn btn-success mt-3"  type="submit" >Edit Item</button>}
           
        </div>
        </form>
        </div>
    )
}
