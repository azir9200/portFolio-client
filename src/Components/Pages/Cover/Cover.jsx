import { Link } from "react-router-dom";


const Cover = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/9Vx9Hvt/azir.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h2 className="text-5xl font-bold">Hi there, I am </h2>
      <h1 className="text-5xl font-bold">AZIR UDDIN</h1>
      <p className="py-6">I ama a Junior Frontend Web Developer based in Zurich, Switzerland.</p>
      <Link to='/contacts'>  
      <button className="btn btn-primary">Contact Me</button> </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default Cover;