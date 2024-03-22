import { FaRegUserCircle } from "react-icons/fa";
const Navber = () => {
    return (
        <div className="mb-10"> 
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className=" btn-ghost text-3xl font-bold ">Recipe Calories</a>
  </div>
{/* */}
<div className="navbar-center hidden lg:flex  mr-40 ">
    <ul className="menu menu-horizontal px-1 text-xl gap-2">
      <li ><a>Home </a></li>
      <li><a>Recipe</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
{/*  */}

  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-full" />
    </div>
    <div className="dropdown dropdown-end">
     
        <div className="w-10 rounded-full text-4xl bg-green-400" >
         <p><FaRegUserCircle /></p>
         </div>
      
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navber;