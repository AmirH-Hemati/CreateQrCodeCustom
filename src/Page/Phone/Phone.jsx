import "./Phone.css";
import { useState } from "react";
import InputQrCode from "../../Compnent/Input/InputQrCode";
import ButtonQrc from "../../Compnent/Button/ButtonQrc";
function Phone({ setQrCodeContent }) {
  const [Phone, setPhone] = useState("");
  function handelclickcreate(e) {
    e.preventDefault();
    setQrCodeContent(`tel:${Phone}`);
  }

  return (
    <div className=" flex flex-col  items-start justify-center gap-3 ">
      <div className="w-full  flex justify-center  ">
        <h1 className=" w-full text-[50px] text-[#00288A] ">Enter your Phone</h1>
      </div>
      <div className="flex  justify-center ">
      <form className="flex flex-col justify-center " onSubmit={handelclickcreate}>
        <InputQrCode  type="number" value={Phone} setvalue={setPhone} text="Phone" required  />
        <ButtonQrc type="submit" variant="contained" />

      </form>
      </div>
    </div>
  );
}

export default Phone;
