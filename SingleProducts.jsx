import { IoTimeOutline } from "react-icons/io5";
import { MdLocalFireDepartment } from "react-icons/md";

import React from "react";
const SingleProducts = ({product,handelCard}) => {
    // console.log(product);
    return (
        <div>
             <div className="card w-80 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img  src={product.recipe_image} alt="Shoes" className="rounded-xl size-44 gap-8" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product.recipe_name}</h2>
    <p>{product.short_description}</p>
    <hr class="w-64 h-1 my-6 bg-gray-200 border-0 rounded dark:bg-gray-300"></hr>
    <h2>Ingredients: {product.ingredients.length} </h2>
    <ul className="list-disc">
      <li>{product.ingredients[0]}</li>
      <li>{product.ingredients[1]}</li>
      <li>{product.ingredients[2]}</li>
      
    </ul>
    {/*  */}
  
   
<div className="dropdown dropdown-end">
<h2 className="font-bold"> See All Ingredients</h2>
  <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
    <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </div>
  <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
    <div tabIndex={0} className="card-body">
      <h2 className="card-title">Details</h2> 
      <p>{product.ingredients}</p>
    </div>
  </div>
</div>
    {/*  */}
  
   
    <div className="flex  gap-10">
      <div className="flex  items-center">
      <IoTimeOutline /><h2>{product.preparing_time}</h2>
      </div>
     <div className="flex items-center">
     <MdLocalFireDepartment /> <h2>{product.calories}</h2>
     </div>
    </div>
    
    <div className="card-actions">
      <button onClick={()=>handelCard(product)} className="btn btn-success rounded-full mr-40 mt-5">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleProducts;