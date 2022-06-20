import { Component } from "react";
import './card-list-styling.css';
import CardComponent from "../card-component/card-component";

const CardList = ({monster}) =>{
    return(
            <div className="card-list" >
               {monster.map(monster => {
                  return(
                  <CardComponent monster = {monster}/>
                  )})}
                  </div>
)}
// class CardList extends Component{
//     render(){
//         const {monsters} = this.props;

//         return(
//             <div className="card-list" >
//                 {monsters.map(monster => {
//                     return(
//                     <CardComponent monster = {monster}/>

//     )})}
                
//             </div>
//         )
//     }
// }

export default CardList;