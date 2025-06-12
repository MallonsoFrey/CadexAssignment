import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2),
}));

const CompanyLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.25rem",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const NavList = styled("ul")(({ theme }) => ({
  color: theme.palette.primary.main,
  display: "flex",
  gap: theme.spacing(4),
  listStyle: "none",
  margin: 0,
  padding: 0,

  "& a": {
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { label: "Coffee Types", to: "/types" },
    { label: "Brewing Methods", to: "/methods" },
    { label: "About Us", to: "/about" },
  ];

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={1}>
        <StyledToolbar>
          <CompanyLink to="/">What the coffee?</CompanyLink>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <List sx={{ width: 250 }}>
                  {navItems.map(({ label, to }) => (
                    <ListItem key={to} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={to}
                        onClick={toggleDrawer}
                      >
                        <ListItemText primary={label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  <ListItem disablePadding>
                    <ListItemButton
                      component={Link}
                      to="/contact-us"
                      onClick={toggleDrawer}
                    >
                      <ListItemText primary="Contact Us" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <nav>
                <NavList>
                  {navItems.map(({ label, to }) => (
                    <li key={to}>
                      <Link to={to}>{label}</Link>
                    </li>
                  ))}
                </NavList>
              </nav>
              <Button
                component={Link}
                to="/contact-us"
                variant="contained"
                color="secondary"
              >
                Contact Us
              </Button>
            </>
          )}
        </StyledToolbar>
      </AppBar>
    </>
  );
}
