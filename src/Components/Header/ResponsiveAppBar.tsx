import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material";
import Logo from "../../assets/images/Logo.png";

const pages = ["Study Destinations", "Services", "Company", "Upcoming Events"];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "#6C48F0",
  "& .MuiContainer-root": {
    margin: "0 auto",
    width: "90vw",
    maxWidth: "1170px",
    padding: theme.spacing(6),
  },
  "& .MuiToolbar-root": {
    justifyContent: "space-between",
  },
  "& .MuiSvgIcon-root": {
    width: "1.5em",
    height: "1.5em",
  },
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Logo} alt="logo" />
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: "8px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "normal",
                  textTransform: "unset",
                }}
                disableElevation
                disableFocusRipple
                disableTouchRipple
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outlined"
              disableElevation
              disableFocusRipple
              disableTouchRipple
              sx={{
                color: "white",
                borderColor: "white",
                borderRadius: "8px",
                height: "48px",
                marginLeft: "16px",
              }}
            >
              Course Finder
            </Button>
          </Box>

          <Box
            sx={{
              justifyContent: "flex-end",
              // flexGrow: 1,
              display: { sm: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                transition: "all 0.3s linear",
                ":hover": {
                  transform: "scale(1.2)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", textTransform: "unset" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default ResponsiveAppBar;
