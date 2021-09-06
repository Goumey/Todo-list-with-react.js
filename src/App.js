
import Todolist from './component/Todolist/Todolist';
import Inputiteme from './component/Inputiteme/Inputiteme';

import React, { Component } from 'react'


export default class App extends Component {
  state={
    taches:[],
    inputcontent:"",
    edict:false,
  

  }
  changer=(event)=>{

this.setState({
 
  inputcontent:event.target.value

}) 
 }
  ajouter=(event)=>{
    event.preventDefault();
    let pushTache=[];
    if (this.state.taches.length==0) {
      const newTache={
        id:1,
        mission:this.state.inputcontent    }
         pushTache=[...this.state.taches,newTache];
    }
    else{
      const lastIndex=this.state.taches.length-1;
      const lastTache=this.state.taches[lastIndex];
      
          const newTache={
            id:lastTache.id+1,
            mission:this.state.inputcontent    }
   pushTache=[...this.state.taches,newTache];
      
    }
   
this.setState({
  taches:pushTache,
  edict:false
})

 
  }
  suprime=(id)=>{
  const afterdelecte=  this.state.taches.filter(function(item){
      return item.id != id;
    })
 
    this.setState({
      taches:afterdelecte
    })
  }
modification=(id)=>{

    const tachemodifier = this.state.taches.filter(function(item){
      return item.id != id;
    })
    const tacherecuperer = this.state.taches.filter(function(item){
      return item.id == id;
    })

    this.setState({
      taches:tachemodifier,
      inputcontent:tacherecuperer[0].mission,
      edict:true
    })
  }
  clear=()=>{
this.setState({
  taches:[]
})
  }
 render() {

    return (
      <div className="container ">
       
        <Inputiteme
         changement={this.changer}  
         push={this.ajouter} 
        inputvalue={this.state.inputcontent} 
        editer={this.state.edict} 
        />
        <Todolist
         tache={this.state.taches}  
         supprimer={this.suprime}  
         modifier={this.modification} 
         clear={this.clear}
         />
      </div>
    )
  }
}

