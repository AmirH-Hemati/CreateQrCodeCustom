import { useState } from "react";
import "./Youtube.css";
import ButtonQrc from "../../Compnent/Button/ButtonQrc";
import InputQrCode from "../../Compnent/Input/InputQrCode";

function YoutubePage({ setQrCodeContent }) {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  function handelclickcreate(e) {
    e.preventDefault();
    setQrCodeContent(youtubeUrl);
  }

  return (
    <div className=" flex flex-col justify-center  items-start gap-3 ">
      <div>
        <h1 className="text-[50px] text-[#00288A] ">Enter URL Youtube</h1>{" "}
      </div>
      <form onSubmit={handelclickcreate}>
        <InputQrCode type="url" value={youtubeUrl} setvalue={setYoutubeUrl} text="Add your Url" required />
        <ButtonQrc type="submit" variant="contained" />
      </form>
    </div>
  );
}

export default YoutubePage;
