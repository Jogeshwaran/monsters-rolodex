import { Component, useEffect, useState } from 'react';
import './App.css';
import CardList from './Components/Card-list-Compnonent/card-list-component';
import SearchField from './Components/Search-field-Component/Search-field-Component';

const App = () => {
  const [searchField,SetSearchField] = useState(' ');
  const [monster, setMonster] = useState([]);
  const [filteredMonster , setFilterdMonster] = useState(monster);
  console.log(searchField);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then((valsInApi) => setMonster(valsInApi))

  },[])

  useEffect(() => {
    const newFilteredMonster = monster.filter(mon => {return mon.name.toLocaleLowerCase().includes(searchField)})
    setFilterdMonster(newFilteredMonster)
    console.log(newFilteredMonster)
  },[monster,searchField])
  

  const onSearchChange = (event) =>{
    const searchFieldString =  event.target.value.toLocaleLowerCase();
    SetSearchField(searchFieldString)
    console.log(searchFieldString);

  }

  
  return(
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchField 
          type = 'search'
          placeholder = 'search monsters'
          className = 'monsterSearchField'
          onChangeHandler = {onSearchChange}/>

      <CardList monster = {filteredMonster}/>
    </div>

  )
}

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       seriesName : {
//         name : 'Breaking Bad',
//         character : 'Heisenberg'
//       },
//       count : 0,
//     };
//   }
//   render(){
//   return (
//     <div className="App">
//       <h1>Counter</h1>
//       <p>{this.state.count}</p>
//       {/* <button onClick={()=>{this.setState({count : this.state.count +1})}}>Increment</button> */}
//       <button onClick={
//         ()=>{
//           this.setState(()=>{
//             return{
//               count : this.state.count +1
//             };

//           },
//        /*callback Function */   () => {
//             console.log(this.state)
//           }
//           )
//         }
//       }>Increment</button>
//         <p>
//           Have you seen {this.state.seriesName.name } Main character is {this.state.seriesName.character}.
//         </p>
//         {/* <button onClick={()=>{this.setState({seriesName : 'Breaking Bad'} )}}>Click to Change</button> */}
//        {/* passing via function  */}
//        <button onClick={ ()=> {
//          this.setState( () => {
//            return{
//            seriesName : {name:'Stranger Things', character:'Demogorgon'}
//            };
//          },
//          ()=>{
//           console.log(this.state)
//         }
//          )
//        }
       
       

//        }>click</button>
//     </div>
//   );
// }
// }

// class App extends Component{
//   constructor(){

//     super();
//     this.state = {
//       monster : [],
//       searchString : '',
//       // monster : [
//       //   {name : 'Subash'},
//       //   {name : 'Sanjai'},
//       //   {name : 'reva'},
//       //   {name : 'aswin'}

//       // ],
//     };
//     console.log('constructor')

//   }

//   /* for the API calls we have to Component Did Mount so that the state gets
//   filled with value once the component is loaded in the Dom */

//   componentDidMount() {
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json() )
//     .then((valsInApi) => this.setState(() => {
//       return {
//         monster : valsInApi
//       }
      
//     },
//     )  )
    
//   }
// // for optimization
//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLocaleLowerCase();
//     console.log(searchString)
    
//     this.setState(
//     () =>{
//       return {
//         searchString

//       }
//     }
//   )}

 
//   render(){
//     console.log('render')
//     const {monster,searchString } = this.state;
//     const { onSearchChange} = this;
  
//     const newMonsterArray = monster.filter(mon => {return mon.name.toLocaleLowerCase().includes(searchString)})
//     console.log(newMonsterArray)

//     return(
//       <div className='App'>
//         <div>
//           {/* <input className='SearchField' type='search' placeholder='search employees' 

//           onChange={onSearchChange}>

//           </input> */}
//           <h1 className='app-title'>Monsters Rolodex</h1>
//           <SearchField 
//           type = 'search'
//           placeholder = 'search monsters'
//           className = 'monsterSearchField'
//           onChangeHandler = {onSearchChange}/>
//         </div>
//         {/* {newMonsterArray.map((i) =>{
//           return <h1 key = {i.id}>{i.name}</h1>
//         })} */}
//         <CardList monsters = {newMonsterArray}/>

//       </div>
//     );
//   }
// }

export default App;
