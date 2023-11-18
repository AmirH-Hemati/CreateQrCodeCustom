import { CallCalling, Link1, MessageText1, Sms, Facebook, Youtube, Wifi, ChartCircle } from "iconsax-react";
import "./Navbar.css";
import { useState } from "react";
import NavItem from "./NavItem";

function Navbar() {
  const [ActiveButton, setActiveButton] = useState("email");

  return (
    <div className="flex flex-col justify-around items-center h-full">
      <div className="">
      <button className="circle-icon">
        <ChartCircle size="55" color="#00288A" variant="TwoTone" />
      </button>
      </div>

      
      
      <div className="container-btn bg-white my-10 h-[550px]  w-20 rounded-[50px] flex flex-col items-center justify-center">
        <NavItem ActiveButton={ActiveButton} setActiveButton={setActiveButton} to="wifi" icon={<Wifi size="27" />} />
        <NavItem ActiveButton={ActiveButton} setActiveButton={setActiveButton} to="youtube" icon={<Youtube size="27" />} />
        <NavItem ActiveButton={ActiveButton} setActiveButton={setActiveButton} to="facebook" icon={<Facebook size="27" />} />
        <NavItem ActiveButton={ActiveButton} setActiveButton={setActiveButton} to="email" icon={<MessageText1 size="27" />} />
        <NavItem ActiveButton={ActiveButton} setActiveButton={setActiveButton} to="url" icon={<Link1 size="27" />} />
        <NavItem ActiveButton={ActiveButton} setActiveButton={setActiveButton} to="phone" icon={<CallCalling size="27" />} />
        <NavItem ActiveButton={ActiveButton} setActiveButton={setActiveButton} to="sms" icon={<Sms size="27" />} />
      </div>
      

      
    </div>
  );
}

export default Navbar;
