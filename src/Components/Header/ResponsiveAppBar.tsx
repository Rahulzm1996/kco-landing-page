import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled } from "@mui/material";
import Logo from "../../assets/images/Logo.png";

const pages = ["Study Destinations", "Services", "Company", "Upcoming Events"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

          {/* logo */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
          </Typography> */}
          <img src={Logo} alt="logo" />

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}

          <Box
            sx={{
              // display:"flex",
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

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default ResponsiveAppBar;
