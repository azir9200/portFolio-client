import Navbar from "../Navbar/Navbar";
import Contacts from "./Contacts";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-24">
        {" "}
        <Contacts />
      </div>
    </div>
  );
};

export default ContactPage;
