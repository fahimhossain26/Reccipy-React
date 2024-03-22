import { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './App.css'


import SingleProducts from './SingleProducts';
import Navber from './Navber';
import Banner from './Banner';

function App() {
  const[products,setProducts]=useState([]);
  const [card,setCard]=useState([]);

  const notify = () => toast("Wow so easy !");

 
 useEffect(()=>{
  fetch("./recipi.json")
  .then(res=>res.json())
  .then(data=>{
    setProducts(data);
  })
 },[])
//  console.log(products);
const handelCard=(p)=>{
  const isExist=card.find(item=>item.recipe_id==p.recipe_id);
  if(isExist){
    toast("Already Exist !");
    // setCard([...card,p]); 
  }
  else{
    // alert('already exisit');
    setCard([...card,p]); 
    
  }
   

}
 console.log(card);

//  const newState = [...p, item]
//  setCard(newState)


const  handelDelete=(recipe_id)=>{
  const newCard=card.filter(item=>item.recipe_id != recipe_id)
  setCard(newCard)

}

  return (
    <>
 <Navber></Navber>
 <Banner></Banner>

 <div className='flex '>
  <div className='md: grid grid-cols-2 gap-6 w-2/3 '>
    {
      products.map(pd=>(<SingleProducts handelCard={handelCard}  product ={pd}></SingleProducts>
      ))
    }

  </div>
 



<div className=" bg-gray-100 p-5 m-10 rounded-2xl w-1/3">

<h2  className='font-bold text-2xl'>Want to cook {card.length} </h2> 
<hr class="w-auto h-1 my-6 bg-gray-200 border-0 rounded dark:bg-gray-300"></hr>

<div className='flex justify-around gap-4 '>
  <h1>Name</h1>
  <h1>Times</h1>
  <h1>Calories</h1>
  <div></div>


</div>

<div >
 { card.map((item,index)=>( 

     <div  className="flex justify-around gap-5 ml-2 bg-slate-200 p-4 m-4 ">
      <p>{index+1}</p>
 <h1>{item.recipe_name}</h1>  
<h1>{item.preparing_time}</h1>
<h1 >{item.calories}</h1>
<button onClick={()=>handelDelete(item.recipe_id)} className="btn btn-success rounded-full">Preparing</button>
<ToastContainer />
</div>


  ))}
</div>

<div>



<h2 className='font-bold text-2xl mt-10'>Currently cooking: </h2> 
<hr class="w-auto h-1 my-6 bg-gray-200 border-0 rounded dark:bg-gray-300"></hr>

<div className='flex justify-around gap-4 '>
  <h1>Name</h1>
  <h1>Times</h1>
  <h1>Calories</h1>
  


</div>



</div>



</div>


 </div>


    </>
  )
}

export default App


