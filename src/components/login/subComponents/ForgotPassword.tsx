import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { InterestsOutlined } from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const [username, setUsername] = useState<string>("");

  const navigate = useNavigate();

  const handleLoginRedirect = (): void => {
    navigate("/login");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f8f7fa",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%", lg: "30%", xl: "30%" },
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          fontFamily: "'Poppins', sans-serif", // Matching font family with Signup page
        }}
      >
        <Typography
          sx={{
            p: "1rem",
            m: 3,
            textAlign: "center",
            fontSize: "1.625rem",
            fontWeight: "700",
            color: "#20C83C",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <InterestsOutlined sx={{ mr: 1, color: "#20C83C" }} />
          Project App
        </Typography>
        <Typography
          sx={{
            px: 2,
            pb: 1,
            textAlign: "left",
            color: "black",
            fontSize: "1.375rem",
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Forgot Password?
        </Typography>
        <Typography
          sx={{
            px: 2,
            pb: 1,
            textAlign: "left",
            fontSize: "0.9375rem",
            color: "black",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Enter your email and we’ll send you instructions to reset your
          password
        </Typography>
        <Typography
          sx={{
            mt: 2,
            px: 2,
            fontSize: "0.8125rem",
            fontWeight: 400,
            color: "rgba(47, 43, 61, 0.78) !important",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Email
        </Typography>
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size="small"
          placeholder="johndoe@gmail.com"
          sx={{ px: 2, width: "90%", fontSize: "0.675rem" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#20C83C !important",
              width: "auto%",
              fontSize: "0.9375rem",
              color: "white",
              textTransform: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            SEND RESET LINK
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography
            onClick={handleLoginRedirect}
            sx={{
              color: "#20C83C",
              fontSize: 15,
              mt: 2,
              fontFamily: "'Poppins', sans-serif",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: 12 }} />
            Back to login
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
