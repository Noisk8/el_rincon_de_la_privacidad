import Link from "next/link";
import { Button } from "@mui/material";
import * as React from "react";

const ClaimPoap = () => {
  return (
    <div>
      <Link href="">
        <Button
          variant="outlined"
          sx={{
            color: "#14e76f",
            borderColor: "#14e76f",
            transition: "background-color 0.3s ease, color 0.3s ease",
            "&:hover": {
              backgroundColor: "#14e76f",
              color: "black",
            },
          }}
        >
          Enviar Foto y Reclamar POAP
        </Button>
      </Link>
    </div>
  );
};

export default ClaimPoap;
