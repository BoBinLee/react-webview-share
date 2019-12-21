import React from "react";
import styled from "styled-components/native";

import colors from "@shared/styles/colors";

type FontType = "BOLD" | "MEDIUM" | "REGULAR";

export interface ITextProps {
  fontType?: FontType;
}

const fontTypeToFont: { [key in FontType]: string } = {
  BOLD: "NotoSansKR-Bold",
  MEDIUM: "NotoSansKR-Medium",
  REGULAR: "NotoSansKR-Regular"
};

const Text = styled.Text<{ fontType: FontType }>`
  font-family: ${({ fontType }) => fontTypeToFont[fontType]};
  letter-spacing: -0.5px;
  color: ${colors.gray900};
  include-font-padding: false;
`;

const FMText: React.FC<ITextProps> = ({ fontType = "REGULAR", ...props }) => {
  return <Text fontType={fontType} {...props} />;
};

export default FMText;