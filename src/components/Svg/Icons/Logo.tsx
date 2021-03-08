import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 205 26" {...props}>
      <image width="205" height="26" href={"images/babe/LogoTextNewWhite.png"} />
    </Svg>
  );
};

export default Icon;
