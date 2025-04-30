import portfolio_content from "../assets/portfolio_content.json";
import { containerVariants, InfoBox1 } from "./InfoBoxes";
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TypeWriteAnimatedText from "../misc/TypewriteAnimatedText";

const AboutMe = () => {
  const { about } = portfolio_content;
  const { aboutMe, hobbiesAndInterests } = about;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: (theme) => theme.palette.background.default,
          color: (theme) => theme.palette.text.primary,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          sx={{ marginBottom: 3 }}
        >
          {aboutMe.title}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: 5, mx: 10 }}
        >
          <TypeWriteAnimatedText text={aboutMe.description} delay="20" />
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 30 }}>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ marginBottom: { xs: 5, md: 13 } }}
        >
          {hobbiesAndInterests.title}
        </Typography>
        {hobbiesAndInterests.items.map((item, index) => (
          <InfoBox1
            key={index}
            orientation={item.orientation}
            header={item.header}
            caption={item.caption}
            img1={item.img1}
            img2={item.img2}
          />
        ))}
      </Box>
    </motion.div>
  );
};

export default AboutMe;
