
import "./Facebook.css";
import { useState } from "react";
import InputQrCode from "../../Compnent/Input/InputQrCode";
import ButtonQrc from "../../Compnent/Button/ButtonQrc";

function FacebookPage({ setQrCodeContent }) {
  const [FacebookUrl, setFacebookUrl] = useState("");
  function handelclickcreate(e) {
    e.preventDefault();
    setQrCodeContent(FacebookUrl);
  }

  return (
    <div className="w-full  flex flex-col   justify-center items-center gap-3 ">
      <div className="flex justify-center  w-full">
        <h1 className=" text-[40px] text-[#00288A] ">Enter URL Facebook</h1>{" "}
      </div>
      <div className="flex flex-col  items-center justify-center w-full">
        <form className="flex flex-col items-start justify-center " onSubmit={handelclickcreate}>
          <InputQrCode type="url" value={FacebookUrl} setvalue={setFacebookUrl} text="Add your Url" variant ="contained" />
        <ButtonQrc variant="contained" type="submit" />

        </form>
      </div>
    </div>
  );
}

export default FacebookPage;
