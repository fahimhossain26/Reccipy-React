const Banner = () => {
    return (
        <div className="rounded-6xl">
             <div className="hero min-h-screen rounded-3xl " style={{backgroundImage: 'url(https://i.postimg.cc/cJ6zLJ1p/cover.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-8 text-5xl font-bold">Discover an exceptional cooking <br />
                               class tailored for you!
</h1>
      <p className="mb-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
problems to become an exceptionally well world-class Programmer.</p>
<button className="btn btn-success mr-6 rounded-full  text-xl">Explore Now</button>
<button className="btn btn-outline btn-success text-xl rounded-full">Our Feedback</button>
      
    </div>
  </div>
</div>
<div>
    <p className="text-center text-4xl mt-10 mb-5 font-bold  ">Our Recipes</p>
    <p className="mb-10">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br />
urna volutpat curabitur elementum mauris aenean neque. 
</p>
</div>
        </div>
        
    );
};

export default Banner
