"use client";

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { proEmail } from "../utils/personal";

type EmailButtonProps = {
  children: ReactNode;
  subject?: string;
  body?: string | ReactNode;
};

const EmailButton = ({ children, body, subject }: EmailButtonProps) => {
  return (
    <Box
      style={{ all: "unset" }}
      onClick={() =>
        window.open(
          `mailto:${proEmail}${subject ? `?subject=${subject}` : ""}${
            body ? `&body=${body}` : ""
          }`
        )
      }
    >
      {children}
    </Box>
  );
};

export default EmailButton;
