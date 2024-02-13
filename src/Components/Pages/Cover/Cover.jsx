import { Link } from "react-router-dom";


const Cover = () => {
  return (
   
  <div className="hero min-h-screen bg-base-200 border border-sky-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className=" "> 
    <img src="https://i.ibb.co/9Vx9Hvt/azir.jpg" className="max-w-xs rounded-lg shadow-2xl" />
    </div>
    <div className="bg-lime-100 max-w-xl  p-8 border border-b-slate-300">
      <h2 className="text-5xl font-bold">Hi there, I am </h2>
      <h1 className="text-5xl font-bold">AZIR UDDIN</h1>
      <p className="py-6">I am a Junior Frontend Web Developer based in Zurich, Switzerland.</p>
      <Link to='/contacts'>  
      <button className="btn btn-primary">Contact Me</button> </Link>
    </div>
  </div>
</div>
    
  );
};

export default Cover;