

const MySkills = () => {
  return (
    <div className="mx-auto lg:flex my-6">

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
  <div className=" w-2/5  bg-sky-300 m-4 p-20  rounded-full"> 
 <h2 className="text-4xl flex justify-center font-semibold ">My Skills</h2>
  </div>
   
    
    <div className="w-3/5 bg-lime-100 p-4 rounded-xl "> 
 <p className="py-6"> <span className="text-2xl "> PROGRAMMING LANGUAGES : </span> HTML, CSS, Javascript </p>
 <p className="py-6"> <span className="text-2xl">  FRAMEWORKS/LIBRARIES: </span>React | Express | Node | Tailwind CSS | React Native  </p>
 <p className="py-6"> <span className="text-2xl"> DATABASES: </span>  MongoDB  </p>
 <p className="py-6"> <span className="text-2xl"> TOOLS & PLATFORMS: </span> Git, GitHub, Vercel, Firebase, </p>

 </div>
  </div>
</div>


    </div>
  );
};

export default MySkills;