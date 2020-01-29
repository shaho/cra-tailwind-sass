import React from "react";
import { CustomButton } from "./styles";

const Button = () => {
  return (
    <div>
      <CustomButton>
        Normal <span>&bull;</span>
      </CustomButton>
      <CustomButton primary>
        Primary{" "}
        <span role="img" aria-label="">
          🥴
        </span>
      </CustomButton>
    </div>
  );
};

export default Button;
