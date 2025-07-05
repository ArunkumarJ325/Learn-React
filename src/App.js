
import './App.css';
import { useState } from 'react';

function App() {

  // const [counter,setCounter]=useState(0);
  // let increase=function(){
  //   setCounter(counter+1);
  // }
  // let decrease=function(){
  //   setCounter(counter-1);
  // }

  // return (
  //   <>
  //   <button onClick={decrease}>Decrese</button>
  //   <h1>{counter}</h1>
  //   <button onClick={increase}>Increase</button>
  //   </>
  // )

  const [fruits,setFruits] = useState(['grapes', 'banana', 'orange']);
  const [newFruit,setNewfruit]=useState("")
  const [sortfn,setSortfn]=useState(true);
  const [searchfruit,setSearchfruit]=useState("") 
  const [searchterm,setSearchterm]=useState("")
  const [fruithistory,setFruithistory]=useState([]);

  const handleRemove=(fruit)=>{
    let result=fruits.filter((fru)=>fru!==fruit);
    setFruithistory([...fruithistory,fruits])
    setFruits(result);
  }

  const handleChange=(e)=>{
    setNewfruit(e.target.value);
  }
  const handleAdd=()=>{
    let flag=fruits.some((fruit1)=>fruit1.toLowerCase()===newFruit.toLowerCase());
    console.log(flag)
    if(flag){
      alert(`${newFruit} is already added`);
      return;
    }
    setFruithistory([...fruithistory,fruits])
    setFruits([...fruits,newFruit]);
    setNewfruit("");
  }

  const handleSort=()=>{
    setSortfn(!sortfn);
  }

  const handleSearch=(e)=>{
    setSearchterm(e.target.value);
  }

  const handleSearchbtn=()=>(
    setSearchfruit(searchterm)
  )

  const handleClearsearch=()=>{
    setSearchterm("")
    setSearchfruit("")
}
const handleUndo=()=>{
  if(fruithistory.length===0) return;
  setFruits(fruithistory[fruithistory.length-1]);
  setFruithistory(fruithistory.slice(0,-1));
}

  const filterfruits=[...fruits]
      .filter((fruit)=>(
        fruit.toLowerCase().includes(searchfruit.toLowerCase())
      ))
      
      .sort((a,b)=>
        sortfn?a.toLowerCase().localeCompare(b.toLowerCase()) 
         :b.toLowerCase().localeCompare(a.toLowerCase()));

  return (
    <div>
      <input placeholder='Enter a new Name' value={newFruit} onChange={handleChange}></input>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSort}>Sort:{sortfn?"Z to A":"A to Z"}</button>
      
      <input type="text" placeholder='Enter the Fruit to search' value={searchterm} onChange={handleSearch}></input>
      <button onClick={handleSearchbtn}>Search</button>
      <button onClick={handleClearsearch}>Clear</button>
      <button onClick={handleUndo} >Undo</button>

      {fruits.length!==0 ? 
      (filterfruits.length!==0) ?
      filterfruits.map((fruit, index) => (
        <div key={index}>
          <h3>{fruit}</h3>
          <button onClick={()=>handleRemove(fruit)}>Remove</button>
        </div>
      )): (
      <h1>No matching Fruits</h1>
    ) :(
      <h2>No fruits to display</h2>
    )}
    </div>

  )


}

export default App;
