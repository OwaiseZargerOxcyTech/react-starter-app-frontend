import React from "react";
import {
  TextField,
  Button,
  Typography,
  IconButton,
  Box,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import {
  InterestsOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSigninRedirect = (): void => {
    navigate("/login");
  };

  const handleTogglePasswordVisibility = (): void => {
    setShowPassword((prev) => !prev);
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
          backgroundColor: "white",
          width: { xs: "90%", sm: "70%", md: "50%", lg: "30%", xl: "30%" },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          fontFamily: "'Poppins', sans-serif", // Matching font family with Login page
        }}
      >
        <Typography
          sx={{
            p: "1rem",
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
            pb: 0.5,
            textAlign: "center",
            color: "black",
            fontSize: "1.375rem",
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Adventure starts here
        </Typography>
        <Typography
          sx={{
            px: 2,
            pb: 2,
            textAlign: "center",
            fontSize: "0.9375rem",
            fontWeight: "bold",
            color: "black",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Make your app management easy and fun!
        </Typography>
        <Typography
          sx={{
            mb: "0.25rem",
            px: 2,
            fontSize: "0.8125rem",
            fontWeight: 400,
            color: "rgba(47, 43, 61, 0.78) !important",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Username
        </Typography>
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size="small"
          placeholder="john.doe"
          sx={{ px: 2, width: "90%", fontSize: "0.675rem" }}
        />
        <Typography
          sx={{
            my: "0.7rem",
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
          placeholder="johndoe@gmail.com"
          sx={{ px: 2, width: "90%", fontSize: "0.675rem" }}
        />
        <Typography
          sx={{
            mt: "0.9rem",
            mb: "0.25rem",
            px: 2,
            fontSize: "0.8125rem",
            fontWeight: 400,
            color: "rgba(47, 43, 61, 0.78) !important",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Password
        </Typography>
        <TextField
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="small"
          placeholder="Password"
          sx={{ px: 2, width: "90%", fontSize: "0.675rem" }}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={handleTogglePasswordVisibility}
                size="small"
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 1,
            px: 2,
            textAlign: "center",
          }}
        >
          <Checkbox
            sx={{
              color: "black",
              "&.Mui-checked": {
                color: "black",
              },
            }}
          />
          <Typography
            sx={{
              color: "rgba(47, 43, 61, 0.78) !important",
              fontSize: 15,
              fontFamily: "'Poppins', sans-serif",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            I agree to privacy policy & terms
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#20C83C !important",
              width: "65%",
              fontSize: "0.9375rem",
              color: "white",
              textTransform: "none",
              borderRadius: "2rem",
              fontWeight: "bold",
              p: 1,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            SIGN UP
          </Button>
        </Box>
        <Box
          sx={{
            px: 4,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mt: 1,
          }}
        >
          <Typography
            sx={{
              color: "black !important",
              fontSize: 14,
              mb: 2,
              fontFamily: "'Poppins', sans-serif",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Already have an account?
            <Typography
              onClick={handleSigninRedirect}
              component="span"
              sx={{
                color: "#20C83C",
                ml: "0.5rem",
                fontSize: 15,
                fontFamily: "'Poppins', sans-serif",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Sign in instead
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
