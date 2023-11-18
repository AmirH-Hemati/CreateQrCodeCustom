import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Compnent/Navbar/Navbar";
import Qrcode from "./Compnent/Qrcode/Qrcode";
import { useState } from "react";

import UrlPage from "./Page/UrlPage/UrlPage";
import { Button, TextField } from "@mui/material";
import Phone from "./Page/Phone/Phone";
import Sms from "./Page/Sms/Sms";
import FacebookPage from "./Page/facebook/FacebookPage";
import YoutubePage from "./Page/youtube/YoutubePage.jsx";
import WifiPage from "./Page/Wifi/WifiPage";
import Email from "./Page/EmailPage/Email";
import ButtonQrc from "./Compnent/Button/ButtonQrc";
import InputQrCode from "./Compnent/Input/InputQrCode";

function App() {
  const [QrCodeContent , setQrCodeContent] = useState("")
  const [value1 , setValue1] = useState("")
  console.log(value1);
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="shadow-box flex flex-row justify-around h-[750px] w-[1000px] bg-[#ECF7FF] m-6  rounded-[40px] p-2"> 
    
      <div className="w-[15%]  ">
        <Navbar />
      </div>
      <div className="w-[100%] flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Email setQrCodeContent={setQrCodeContent}  />} />
          <Route path="/email" element={<Email setQrCodeContent={setQrCodeContent}/>} />
          <Route path="/url" element={<UrlPage setQrCodeContent={setQrCodeContent} />}  />
          <Route path="/phone" element={<Phone setQrCodeContent={setQrCodeContent} />} />
          <Route path="/sms" element={<Sms setQrCodeContent={setQrCodeContent} />} />
          <Route path="/wifi" element={<WifiPage setQrCodeContent={setQrCodeContent} />} />
          <Route path="/facebook" element={<FacebookPage setQrCodeContent={setQrCodeContent} />} />
          <Route path="/youtube" element={<YoutubePage setQrCodeContent={setQrCodeContent} />} />
        </Routes>
        
      </div>
      <div className=" w-[50%]">
      <Qrcode  QrcodeData={QrCodeContent}  />

      </div>
    </div>
    </div>
  );
}

export default App;
