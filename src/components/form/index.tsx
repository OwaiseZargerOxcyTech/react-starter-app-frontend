import { Box, TextField, Button, Grid, Typography } from "@mui/material";

const FormComponent: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "#fff",
        p: 3,
        width: { xs: "90%", sm: "70%", md: "50%", lg: "70%" },
        maxWidth: "600px",
        
        margin: "auto",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Add Form
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ mb: 0.5, color: "grey" }}>
            Name
          </Typography>
          <TextField
            fullWidth
            size="medium"
            variant="outlined"
            placeholder="Name"
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ mb: 0.5, color: "grey" }}>
            Email
          </Typography>
          <TextField
            fullWidth
            size="medium"
            variant="outlined"
            placeholder="johndoe@gmail.com"
            required
          />
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ mb: 0.5, color: "grey" }}>
        Service Type
      </Typography>
      <TextField
        fullWidth
        size="medium"
        variant="outlined"
        placeholder="Service Type"
        required
      />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" sx={{ mb: 0.5, color: "grey" }}>
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
          mt: 3,
          alignSelf: "start",
          padding: "10px 50px",
          textTransform: "none",
          backgroundColor: "#20C83C",
          color: "white",
          borderRadius: 6,
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default FormComponent;
