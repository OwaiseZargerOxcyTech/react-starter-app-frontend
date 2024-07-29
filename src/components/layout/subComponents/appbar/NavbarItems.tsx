import React from "react";
import { Box, IconButton, InputBase, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ProfileMenu from "./ProfileMenu";
import ProfileImg from "../../../../assets/images/profile.png";

interface NavbarItemsProps {
  isOpen: boolean;
}

const NavbarItems: React.FC<NavbarItemsProps> = ({ isOpen }) => {
  const [anchorProfileEl, setAnchorProfileEl] =
    React.useState<HTMLAnchorElement | null>(null);

  //-------------
  const open = Boolean(anchorProfileEl);
  //-------------

  const handleProfileClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setAnchorProfileEl(event.currentTarget);
  };

  const handleProfileClose = (): void => {
    setAnchorProfileEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isOpen
          ? { xs: "column", md: "row" }
          : { xs: "column", sm: "row" },
        alignItems: "center",
      }}
    >
      <Box>
        <InputBase
          sx={{
            width: "100%",
            py: 0.5,
            px: 1,
            m: 1,
            flex: 1, // Allow flexible width
            border: "1px solid #E0E0E0",
            borderRadius: 3,
            "& .MuiInputBase-input": {
              fontSize: "0.85rem",
            },
          }}
          placeholder="Search here…"
          endAdornment={<SearchIcon sx={{ color: "grey"}} color="action" />}
        />
      </Box>
      <Box
        sx={{
          m: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tooltip title="Notifications">
          <IconButton sx={{ml:2}}>
            <NotificationsNoneOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Shortcuts Menu">
          <IconButton>
            {/* <PersonOutlinedIcon sx={{bgcolor:'#20C83C' ,borderRadius:'15px',color:'white',fontSize:'2rem'}} /> */}
            {/* <DashboardCustomizeOutlinedIcon sx={{ color: "black" }} /> */}
          </IconButton>
        </Tooltip>

        {/* --------------------------------------- */}
        <Tooltip title="Profile settings">
          <IconButton
            onClick={handleProfileClick}
            size="small"
            href="" // Add an empty href
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <img
              src={ProfileImg}
              alt="Profile"
              style={{ width: 32, height: 32, borderRadius: '50%'}}
            />
          </IconButton>
        </Tooltip>

        <ProfileMenu
          anchorEl={anchorProfileEl}
          handleClose={handleProfileClose}
          open={open}
        />
      </Box>
    </Box>
  );
};

export default NavbarItems;
