import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Cover from "../Cover/Cover";
import MySkills from "../MySkills/MySkills";
import Navbar from "../Navbar/Navbar";


const Home = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Cover></Cover>
     <About></About>
     <MySkills></MySkills>
     <Contacts></Contacts>

     
    </div>
  );
};

export default Home;