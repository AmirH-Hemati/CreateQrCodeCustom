import "./email.css";
import { useState } from "react";
import ButtonQrc from "../../Compnent/Button/ButtonQrc";
import InputQrCode from "../../Compnent/Input/InputQrCode";
function Email({ setQrCodeContent }) {
  const [emailadd, setEmailAdd] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  function handelclickCreate(e) {
    e.preventDefault();
    setQrCodeContent(`mailto:${emailadd}?subject=${subject}&body=${message}`);
  }
  return (
    <div className=" flex justify-center mt-10 ">
      <div className="w-[100%] flex flex-col justify-around ">
        <div className="flex items-center justify-start ">
          <h1 className="  text-[60px] text-[#00288A] font-medium">Email</h1>
        </div>
        <div>
          <form className="flex flex-col items- justify-center " onSubmit={handelclickCreate}>
            <InputQrCode type="email" value={emailadd} setvalue={setEmailAdd} text="Add your Email" required />
            <InputQrCode type="text" value={subject} setvalue={setSubject} text="Subject" required />
            <InputQrCode type="text" value={message} setvalue={setMessage} text="Message" minRows="4" required />
            <ButtonQrc type="submit" variant="contained" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Email;
