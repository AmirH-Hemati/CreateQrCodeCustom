import { useState } from "react";
import "./Qrcode.css";
import { QRCode } from "react-qrcode-logo";
import { HexColorPicker } from "react-colorful";
import { Add, ArrowCircleDown2, Element3, Minus } from "iconsax-react";
import { Slider } from "@mui/material";
import FileBase64 from "react-file-base64";

function Qrcode({ QrcodeData }) {
  const [frame, setFrame] = useState(false);
  const [shape, setShape] = useState(false);
  const [logo, setLogo] = useState(false);
  const [color, setColor] = useState("#00288A");
  const [bgcolor, setBgColor] = useState("#fff");
  const [eycolor, setEyColor] = useState("#00288A");
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");
  function handelclick() {
    setFrame(!frame);
    if (shape == true || logo == true) {
      setShape(false);
      setLogo(false);
    }
  }
  function handleclickshape() {
    setShape(!shape);
    if (frame == true || logo == true) {
      setFrame(false);
      setLogo(false);
    }
  }
  function handleclicklogo() {
    setLogo(!logo);
    if (frame == true || shape == true) {
      setFrame(false);
      setShape(false);
    }
  }
  return (
      <div className="h-full mb-96">
    <div className="container  flex justify-center ">
      <div className="container-qe-code ">
        <div>
          <QRCode
            logoImage={image}
            logoHeight={50}
            logoWidth={50}
            id="download"
            value={QrcodeData}
            size={150}
            fgColor={color}
            bgColor={bgcolor}
            eyeColor={eycolor}
            eyeRadius={value}
          />
        </div>
        {/* ///// */}
        <div className=" w-full flex flex-col items-center ">
          <button onClick={handelclick} className="btnQr">
            Frame {frame == false ? <Add size="32" color="#fff" /> : <Minus size="32" color="#fff" />}
          </button>
          {frame == true && (
            <div className="colorPickerWidth">
              <div className="flex flex-col items-center ">
                <HexColorPicker color={eycolor} onChange={setEyColor} />
                <Slider
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  size="small"
                  defaultValue={70}
                  min={0}
                  max={50}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  sx={{ width: 200, color: "#fff" }}
                />
              </div>
            </div>
          )}
        </div>
        {/* //// */}
        <div className=" w-full flex flex-col items-center ">
          <button onClick={handleclickshape} className="btnQr">
            Color & BackgroundColor {shape == false ? <Add size="32" color="#fff" /> : <Minus size="32" color="#fff" />}
          </button>
          <div className="flex gap-2">
            {shape == true && (
              <div className="colorPickerWidth">
                <HexColorPicker color={color} onChange={setColor} />
              </div>
            )}
            {shape == true && (
              <div className="colorPickerWidth">
                <HexColorPicker color={bgcolor} onChange={setBgColor} />
              </div>
            )}
          </div>
        </div>
        {/* //// */}
        <div className=" w-full flex flex-col items-center ">
          <button onClick={handleclicklogo} className="btnQr">
            Logo {logo == false ? <Add size="32" color="#fff" /> : <Minus size="32" color="#fff" />}
          </button>
          <div className="flex gap-2">
          {logo == true && (
            <div className="w-[200px]">
              <FileBase64 
                multiple={true}
                onDone={(base64) => {
                  setImage(base64[0].base64);
                }}
                />
            </div>
          )}
          </div>
        </div>
        {/* /// */}
        <div className="m-2 p-2 flex justify-center">
          <button
            onClick={() => {
              const qrCodeCanvas = document.getElementById("download");
              const link = document.createElement("a");
              link.href = qrCodeCanvas.toDataURL();
              link.download = "QrCode.jpg";
              link.click();
            }}
            className="btn-dl-jpg flex justify-center items-center"
          >
            <ArrowCircleDown2 size="26" color="#fff" /> JPG
          </button>
          <button
            onClick={() => {
              const qrCodeCanvas = document.getElementById("download");
              const link = document.createElement("a");
              link.href = qrCodeCanvas.toDataURL();
              link.download = "QrCode.png";
              link.click();
            }}
            className="btn-dl-svg flex  justify-center items-center "
          >
            <ArrowCircleDown2 size="26" color="#fff" /> PNG
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Qrcode;
