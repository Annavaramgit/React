import React,{useState} from 'react';

const MapMethodsex = () => {

  const[count,setCount] = useState(0);
  return(
    <>
    <div>
      <h1>count::::{count}</h1>
    </div>
    <div>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
    
    </>
  )
 
};



export default MapMethodsex;
