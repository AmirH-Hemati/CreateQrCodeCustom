import { Button } from "@mui/material";
import "./ButtonQrc.css";
import { Refresh } from "iconsax-react";
function ButtonQrc({ variant, type }) {
  return (
    <div>
      <Button
        type={type}
        startIcon={<Refresh className="m-2" size="24" color="#fff" />}
        style={{
          backgroundColor: "#00288A",
          borderRadius: 15,
          width: "180px",
          height: "60px",
          fontSize: 12,
          fontWeight :"bold" ,
        }}
        variant={variant}
      >
        Create Qr Code
      </Button>
    </div>
  );
}

export default ButtonQrc;
