import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
export default function CustomButton({
  variant,
  label,
  backgroundColor,
  color,
  onClick,
}) {
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
