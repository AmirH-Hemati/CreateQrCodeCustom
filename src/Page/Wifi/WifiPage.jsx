import "./Wifi.css";
import { useState } from "react";
import ButtonQrc from "../../Compnent/Button/ButtonQrc";
import InputQrCode from "../../Compnent/Input/InputQrCode";

function WifiPage({ setQrCodeContent }) {
  const [WirelessWifi, setWirelessWifi] = useState("");
  const [password, setPassword] = useState("");
  function handelclickcreate(e) {
    e.preventDefault();
    setQrCodeContent(`WIFI:S:${WirelessWifi};P:${password};;`);
  }

  return (
    <div className=" flex flex-col justify-center  items-start gap-3">
      <div>
        <h1 className="text-[50px] text-[#00288A] ">Enternet Conected</h1>{" "}
      </div>
      <form onSubmit={handelclickcreate}>
        <InputQrCode type="text" value={WirelessWifi} setvalue={setWirelessWifi} text="Wireless SSID" required />
        <InputQrCode type="password" value={password} setvalue={setPassword} text="Password" required />
        <ButtonQrc type="submit" variant="contained" />
      </form>
    </div>
  );
}

export default WifiPage;
