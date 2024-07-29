import React from "react";
import { Box, TextField, Button, Grid, Typography } from "@mui/material";

const FormComponent: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        backgroundColor: "#fff",
        width: { xs: "90%", sm: "70%", md: "50%", lg: "70%" },
        maxWidth: "600px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 2, fontFamily: "'Poppins', sans-serif" }}
      >
        Add Form
      </Typography> */}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body2"
            sx={{
              mb: 0.5,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Name
          </Typography>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="Name"
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography
            variant="body2"
            sx={{
              mb: 0.5,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Email
          </Typography>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            placeholder="johndoe@gmail.com"
            required
          />
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{
          mb: 0.5,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Service Tax
      </Typography>
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        placeholder="1234 Main St"
        required
      />

      <Typography
        variant="body2"
        sx={{
          mb: 0.5,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Address
      </Typography>
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        placeholder="Apartment, Studio or Floor"
        multiline
        minRows={4} // Adjust the number of rows as needed
        required
      />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="body2"
            sx={{
              mb: 0.5,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            City
          </Typography>
          <TextField fullWidth size="small" variant="outlined" required />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography
            variant="body2"
            sx={{
              mb: 0.5,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            State
          </Typography>
          <TextField fullWidth size="small" variant="outlined" required />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography
            variant="body2"
            sx={{
              mb: 0.5,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Date
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
      </Grid>

      <Button
        sx={{
          marginTop: 2,
          alignSelf: "start",
          padding: "10px 50px",
          textTransform: "none",
          backgroundColor: "#20C83C !important",
          color: "white",
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default FormComponent;
