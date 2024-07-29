import { Drawer, Typography, Box } from "@mui/material";
import MainMenuItems from "./MainMenuItems";
import OtherMenuItems from "./OtherMenuItems";
import Logo from "../../../../assets/images/logo.png";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const drawerStyles = {
    "& .MuiDrawer-paper": {
      width: { sm: "17em" },
      backgroundColor: "#f8f9fa",
      boxShadow: "rgba(0.05, 0.05, 0.05, 0.05) ",
      overflowX: "auto",
      px: "15px",
      scrollbarWidth: "thin",
      
    },
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      onClose={onClose}
      ModalProps={{
        BackdropProps: {
          invisible: true, // This will remove the overlay
        },
      }}
      sx={drawerStyles}
    >
      <Box
        sx={{
          my: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        
        <img src={Logo} alt="Profile" style={{width:'50%',height:'auto'}}/>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
      </Box>

      <MainMenuItems />
      <OtherMenuItems />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "5%",
        }}
      >
        <Box sx={{ textAlign: "center"}}>
          <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
            gibberish
          </Typography>
          <Typography sx={{ fontSize: "0.7rem" }}>
            @2024 All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
