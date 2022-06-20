import { Component } from "react";
import './Search-Field-Styling.css';
const SearchField = ({onChangeHandler,className,type,placeholder}) =>{
    return(
        

    <div>
                 <input className={`searchField ${className}`} type={type} placeholder={placeholder} onChange={onChangeHandler}>
              </input>
          </div>
)}

// class SearchField extends Component{
//     render(){
//         const {onChangeHandler,className,type,placeholder} = this.props;
//         return(
//             <div>
//                 <input className={`searchField ${className}`} type={type} placeholder={placeholder} onChange={onChangeHandler}>
//                 </input>
//             </div>
//         )
//     }
// }

export default SearchField;