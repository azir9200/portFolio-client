// import { FaBeer } from "react-icons";
import { FaBeer, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    

    <div className='max-w-screen-lg mx-auto text-center mt-12 pt-12 rounded-lg bg-lime-50'>
      
    <div>
      <h2 className="text-2xl ">My name is MD AZIR  UDDIN</h2>
    <h3  className="text-xl italic">I live in Zurich City in Switzerland.</h3>
    </div>
   
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contract with Social Apps</h1>
      <p className="py-6 text-center">You can contact me with all of these Social Applications.</p>
      <div className=" text-6xl flex justify-center gap-4   "> 
      <Link  to="https://www.facebook.com/azirzaif/about" ><p className="text-sky-400">  <FaFacebook></FaFacebook> </p></Link>
      <Link to="https://www.linkedin.com/in/azir9200" ><p className="text-sky-700"> <FaLinkedin></FaLinkedin> </p></Link>
      <Link to="https://github.com/azir9200" ><p><FaGithub></FaGithub> </p></Link>
      
         </div>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <p>My home Address : </p>
      <p>Road Name : Dübendorfstrasse  312, </p>
      <p> Stettbach, </p>
      <p>Post Code: 8051, Zürich </p>
      <p>Switzerland</p>
    <p>   Email : <Link  >  <span  className="text-sky-600">   aziruddin83@gmail.com   </span>  </Link></p>
    <p>  <span className="text-sky-600" > Mobile: </span> 0041-0762042063</p>
    <p> <span  className="text-sky-600">  Whatsapp: </span> 00351-920063430</p>       
       
      </div>
    </div>
  </div>
</div>

    
  );
};

export default Contacts;