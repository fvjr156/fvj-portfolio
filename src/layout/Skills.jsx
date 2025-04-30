import portfolio_content from "../assets/portfolio_content.json";
import { containerVariants, InfoBox2 } from "./InfoBoxes";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Skills = function () {
  const { skills } = portfolio_content;
  const eduList = skills.education;
  const achList = skills.achievements;

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
          sx={{ marginBottom: 8 }}
        >
          {skills.education_title}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: 5, mx: 10 }}
        >
          {eduList.map((item, key) => (
            <InfoBox2
              orientation="row"
              header={item.institution}
              caption={item.field}
              img={item.cert_image}
              clickableImgs
            />
          ))}
        </Typography>
      </Box>
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
          sx={{ marginBottom: 8 }}
        >
          {skills.achievements_title}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: 5, mx: 10 }}
        >
          {achList.map((item, key) => (
            <InfoBox2
              orientation="row"
              header={item.institution}
              caption={item.cert_name}
              img={item.cert_img}
              clickableImgs
            />
          ))}
        </Typography>
      </Box>
    </motion.div>
  );
};

export default Skills;
