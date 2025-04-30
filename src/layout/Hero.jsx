import portfolio_content from "../assets/portfolio_content.json";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import FileDownloadSharpIcon from "@mui/icons-material/FileDownloadSharp";

const getDarkerShade = (color, factor) => {
    const shade = factor * 10;
    return `${color}${Math.min(Math.max(shade, 0), 99)}`;
};

const Hero = function ({ themeMode }) {
  const { hero } = portfolio_content;
  const isMobile = useMediaQuery('(max-width:600px)');

  const downloadMyResume = () => {
    const link = document.createElement("a");
    link.href = hero.resume;
    link.target = '_blank';
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const gradient = {
    firstStop: "transparent",
    secondStop: getDarkerShade(
      '#000000',
      themeMode === "light" ? 3 : 5
    ),
  };

  return (
    <Box sx={{ mt: -6, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: `linear-gradient(${gradient.firstStop}, ${gradient.firstStop}, ${gradient.secondStop})`, bgcolor: "primary.heroBg", color: "white", py: { xs: 8, md: 12 }, px: { xs: 2, md: 6, lg: 13 }, transition: "background 0.5s ease-in-out", }} >
      <Container maxWidth="lg">
        <Grid container direction="row" spacing={6} sx={{ justifyContent: "space-between", alignItems: 'center' }} >
          <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 1 }, alignContent: "center", textAlign: { xs: "center", md: "left" }, }} >
            <Typography variant={isMobile ? "h4" : "h3"} fontWeight={400} gutterBottom>
              {hero.header_text}
            </Typography>
            <Typography variant={isMobile ? "h6" : "h5"} fontWeight={400}>
              {hero.header_caption}
            </Typography>
            <Button startIcon={<FileDownloadSharpIcon />} color="primary" size="large" variant="contained" onClick={downloadMyResume} sx={{ mt: 3 }} >
              Download my Resume
            </Button>
          </Grid>
          <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 }, justifyContent: "center", display: "flex", alignItems: "center", }} >
            <img loading="lazy" src={hero.avatar} alt="My Avatar" style={{ width: (isMobile ? "50%" : "100%"), maxWidth: "340px", height: "auto", borderRadius: '10%'}} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;