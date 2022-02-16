import React from 'react';
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
export default function CustomButton({
  variant,
  label,
  backgroundColor,
  color,
  onClick
}: any) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        style={{ backgroundColor: backgroundColor, color: color, margin:'3px' }}
        variant={variant}
        onClick={onClick}
      >
        {label}
      </Button>
    </Stack>
  );
}
