import { useState } from "react";
import "./UrlPage.css";
import ButtonQrc from "../../Compnent/Button/ButtonQrc";
import InputQrCode from "../../Compnent/Input/InputQrCode";

// import QRCode from "react-qr-code";

function UrlPage({ setQrCodeContent }) {
  const [url, setUrl] = useState("");
  function handelclickcreate(e) {
    e.preventDefault();
    setQrCodeContent(url)
  }


  return (
    <div className=" flex flex-col  items-start justify-center gap-3">
      <div>
        <h1 className="text-[60px] text-[#00288A] ">URL</h1>{" "}
      </div>
      <form onSubmit={handelclickcreate}>
        <InputQrCode type="url" value={url} setvalue={setUrl} text="Add your Url" required/>
        <ButtonQrc type="submit" variant="contained" />
      </form>
    </div>
  );
}

export default UrlPage;
