import { Component } from "react";
import './card-style.css';

const CardComponent = ({monster}) => {
    const {name,email,id} = monster;
    console.log(id)
    return(
    
    <div key={id} clclassName="card-container" >
           <img src= {`https://robohash.org/${id}?set=set2&size=180x180`} alt={name} />
             <h2 > {name} </h2>
                <p>{email}</p>
             </div>

)}

// class CardComponent extends Component{
//     render(){
//         const {name,email,id} = this.props.monster;
//         //console.log(source)
//         return(
//             <div key = {id} className="card-container">
//             <img src= {`https://robohash.org/${id}?set=set2&size=180x180`} alt={name} />
//             <h2 > {name} </h2>
//             <p>{email}</p>
//             </div> 
//         )
//     }
// }

export default CardComponent;