import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        textAlign: "center",
        py: 2,
        borderTop: "1px solid #ddd",
        mt: "auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="body2">Some Company 2025</Typography>
    </Box>
  );
}
