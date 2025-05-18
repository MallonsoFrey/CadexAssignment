import { AppBar, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2),
}));

const CompanyLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.25rem",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export default function Header() {
  return (
    <AppBar position="sticky" color="primary" elevation={1}>
      <StyledToolbar>
        <CompanyLink to="/">Some Company</CompanyLink>
        <Button
          component={Link}
          to="/contact-us"
          variant="contained"
          color="secondary"
        >
          Contact Us
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}
