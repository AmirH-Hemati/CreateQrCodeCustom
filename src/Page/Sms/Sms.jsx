import "./Sms.css";
import { useState } from "react";
import ButtonQrc from "../../Compnent/Button/ButtonQrc";
import InputQrCode from "../../Compnent/Input/InputQrCode";

function Sms({ setQrCodeContent }) {
  const [Phone, setPhone] = useState("");
  const [PhoneText, setPhoneText] = useState("");

  function handelclickCreate(e) {
    e.preventDefault();
    setQrCodeContent(`SMSTO:${Phone}:${PhoneText}`);
  }

  return (
    <div className=" flex flex-col  items-start justify-center gap-3">
      <div>
        <h1 className="text-[60px] text-[#00288A]  ">SMS</h1>
      </div>
      <form onSubmit={handelclickCreate}>
        <InputQrCode type="number" value={Phone} setvalue={setPhone} text="Add your Phone" required />
        <InputQrCode type="text" value={PhoneText} setvalue={setPhoneText} text="Text" minRows={4} required />
        <ButtonQrc variant="contained" type="submit" />
      </form>
    </div>
  );
}

export default Sms;
