import { TextField } from "@mui/material";
import "./InputQrCode.css"

function InputQrCode({setvalue , value , text ,  type  , minRows , required}) {
  return (
    <div className="">
            <TextField
            minRows={minRows}
            type= {type}
              value={value}
              onChange={(e) => {
                setvalue(e.target.value);
              }}
              label={text}
              variant="outlined"
              placeholder={text}
              sx={{ borderColor: "blue", width: "350px" , margin :"15px 0 " }}
              required = {required}
              multiline = {minRows ? true : false}
            />


    </div>
  )
}

export default InputQrCode