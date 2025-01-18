import { Typography, Box } from "@mui/material";

const ExampleComponent = () => {
  return (
    <Box sx={{ boxShadow: 2 }}>
      {" "}
      {/* Uses whiteShadow */}
      <Typography variant="heading1" color="textDark">
        Hello World
      </Typography>
      <Typography variant="paragraph16Book" color="textGray">
        This is a sample text
      </Typography>
    </Box>
  );
};

export default ExampleComponent;
